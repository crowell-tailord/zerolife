/**
 * ZERØLIFE Responsive 3D Room Engine:
 * Unified Three.js experience supporting both mobile viewport (top window) and desktop viewport (split stage)
 * with RoomEnvironment reflections, CLO mannequins, cloth swing physics, dynamic camera framing, and hold-to-freeze observation.
 */
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'

export class ResponsiveRoom3D {
  constructor(container, canvas, options = {}) {
    this.container = container
    this.canvas = canvas
    this.options = Object.assign(
      {
        activeModel: 'tee', // 'tee' | 'catwalk' | 'hoodie'
        onModelChange: null,
        onProgress: null,
      },
      options,
    )

    this.active = true
    this.ready = false
    this.currentModelKey = this.options.activeModel

    // Freeze-on-hold physics
    this.holdAfter = 2.0
    this.holdEase = 5.0
    this.heldUntil = 0
    this.playSpeed = 1.0
    this.isDragging = false
    this.pointerDownPos = { x: 0, y: 0 }
    this.rotation = { y: 0, targetY: 0 }
    this.zoom = { z: 1, targetZ: 1 }

    this.init()
    this.bindEvents()
    this.handleResize()
    this.animate = this.animate.bind(this)
    requestAnimationFrame(this.animate)
  }

  init() {
    const width = this.container.clientWidth || window.innerWidth
    const height =
      this.container.clientHeight ||
      (window.innerWidth >= 1024
        ? window.innerHeight
        : Math.round(window.innerHeight * 0.6))

    // Canvas sizing
    this.canvas.width = width
    this.canvas.height = height

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.15
    this.renderer.setClearColor(0x0c0c0c, 1)

    // Scene & Studio Environment
    this.scene = new THREE.Scene()
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer)
    pmremGenerator.compileEquirectangularShader()
    const environment = new RoomEnvironment()
    this.scene.environment = pmremGenerator.fromScene(environment).texture

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0)
    this.scene.add(ambientLight)

    const dirLight1 = new THREE.DirectionalLight(0xe4dfd3, 2.2)
    dirLight1.position.set(3, 5, 4)
    this.scene.add(dirLight1)

    const dirLight2 = new THREE.DirectionalLight(0x8b9094, 1.2)
    dirLight2.position.set(-3, -2, -3)
    this.scene.add(dirLight2)

    const rimLight = new THREE.PointLight(0xe4dfd3, 2.0, 10)
    rimLight.position.set(0, 3, -2)
    this.scene.add(rimLight)

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    this.updateCameraForViewport()

    // Model group
    this.modelGroup = new THREE.Group()
    this.scene.add(this.modelGroup)

    // GLTF Loader setup with Meshopt
    this.gltfLoader = new GLTFLoader()
    this.gltfLoader.setMeshoptDecoder(MeshoptDecoder)

    // Load initial model
    this.loadModel(this.currentModelKey)
  }

  observe() {
    this.heldUntil = performance.now() + this.holdAfter * 1000
  }

  updateCameraForViewport() {
    const width = this.container.clientWidth || window.innerWidth
    const height =
      this.container.clientHeight ||
      (window.innerWidth >= 1024
        ? window.innerHeight
        : Math.round(window.innerHeight * 0.6))
    const isDesktop = window.innerWidth >= 1024

    this.camera.aspect = width / height

    if (isDesktop) {
      this.camera.fov = 40
      this.camera.position.set(0, 0.1, 3.5)
      this.modelGroup.position.set(-0.25, -0.6, 0)
    } else {
      this.camera.fov = 50
      this.camera.position.set(0, 0.05, 4.0)
      this.modelGroup.position.set(0, -0.65, 0)
    }
    this.camera.updateProjectionMatrix()

    const dpr = isDesktop
      ? Math.min(window.devicePixelRatio, 2)
      : Math.min(window.devicePixelRatio, 1.5)
    this.renderer.setSize(width, height, false)
    this.renderer.setPixelRatio(dpr)
  }

  handleResize() {
    this.updateCameraForViewport()
  }

  bindEvents() {
    window.addEventListener('resize', () => this.handleResize())

    // Pointer events on canvas
    this.canvas.addEventListener('pointerdown', (e) => {
      this.isDragging = true
      this.observe()
      this.pointerDownPos = { x: e.clientX, y: e.clientY }
      try {
        this.canvas.setPointerCapture(e.pointerId)
      } catch {}
    })

    window.addEventListener('pointermove', (e) => {
      if (!this.isDragging) return
      this.observe()
      const dx = e.clientX - this.pointerDownPos.x
      this.rotation.targetY += dx * 0.008
      this.pointerDownPos = { x: e.clientX, y: e.clientY }
    })

    const stopDrag = () => {
      this.isDragging = false
    }
    window.addEventListener('pointerup', stopDrag)
    window.addEventListener('pointercancel', stopDrag)

    // Wheel zoom
    this.canvas.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault()
        this.observe()
        const zoomDelta = e.deltaY * -0.0015
        this.zoom.targetZ = Math.max(
          0.7,
          Math.min(1.6, this.zoom.targetZ + zoomDelta),
        )
      },
      { passive: false },
    )
  }

  loadModel(key) {
    this.currentModelKey = key
    this.ready = false

    // Clear existing model children
    while (this.modelGroup.children.length > 0) {
      const obj = this.modelGroup.children[0]
      this.modelGroup.remove(obj)
      if (obj.geometry) obj.geometry.dispose()
      if (obj.material) {
        if (Array.isArray(obj.material))
          obj.material.forEach((m) => m.dispose())
        else obj.material.dispose()
      }
    }

    // Check if base64 model string exists on window
    let base64Source = null
    if (key === 'tee' && window.ZL_GLB_TEE_WALK)
      base64Source = window.ZL_GLB_TEE_WALK
    else if (key === 'catwalk' && window.ZL_GLB_CATWALK)
      base64Source = window.ZL_GLB_CATWALK
    else if (key === 'hoodie' && window.ZL_GLB_HOODIE)
      base64Source = window.ZL_GLB_HOODIE

    if (base64Source) {
      try {
        const raw = atob(base64Source)
        const u8 = new Uint8Array(raw.length)
        for (let i = 0; i < raw.length; i++) u8[i] = raw.charCodeAt(i)
        this.gltfLoader.parse(
          u8.buffer,
          '',
          (gltf) => {
            this.setupModelMesh(gltf)
          },
          (err) => {
            console.warn(
              '[ZERØLIFE] GLTF parse error, using cyber mannequin:',
              err,
            )
            this.setupCyberMannequin(key)
          },
        )
        return
      } catch (e) {
        console.warn('[ZERØLIFE] Model parse failed:', e)
      }
    }

    // High-fidelity cybernetic mannequin geometry
    this.setupCyberMannequin(key)
  }

  setupModelMesh(gltf) {
    const root = gltf.scene || gltf.scenes[0]
    root.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true
        node.receiveShadow = true
        if (node.material) {
          node.material.roughness = 0.4
          node.material.metalness = 0.2
        }
      }
    })

    if (gltf.animations && gltf.animations.length) {
      this.mixer = new THREE.AnimationMixer(root)
      const action = this.mixer.clipAction(gltf.animations[0])
      action.play()
    }

    this.modelGroup.add(root)
    this.ready = true
    if (this.options.onProgress) this.options.onProgress(1.0)
  }

  setupCyberMannequin(key) {
    const group = new THREE.Group()

    // Palette: bone & machine annotations
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0xe4dfd3,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x1a1815,
    })

    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x141414,
      roughness: 0.3,
      metalness: 0.8,
    })

    // Torso / Garment Silhouette
    const isHoodie = key === 'hoodie'
    const topRadius = isHoodie ? 0.62 : 0.52
    const botRadius = isHoodie ? 0.5 : 0.44
    const height = isHoodie ? 1.4 : 1.3

    // Outer wireframe garment
    const garmentGeo = new THREE.CylinderGeometry(
      topRadius,
      botRadius,
      height,
      28,
      14,
      true,
    )
    const garmentMesh = new THREE.Mesh(garmentGeo, wireMat)
    garmentMesh.position.y = 0.7
    group.add(garmentMesh)

    // Inner dark core
    const coreGeo = new THREE.CylinderGeometry(
      topRadius * 0.94,
      botRadius * 0.94,
      height * 0.98,
      20,
      8,
    )
    const coreMesh = new THREE.Mesh(coreGeo, innerMat)
    coreMesh.position.y = 0.7
    group.add(coreMesh)

    // Shoulders & Collar
    const collarGeo = new THREE.TorusGeometry(topRadius * 0.7, 0.05, 12, 32)
    collarGeo.rotateX(Math.PI / 2)
    const collarMesh = new THREE.Mesh(collarGeo, wireMat)
    collarMesh.position.y = 0.7 + height / 2
    group.add(collarMesh)

    // Stylized Head / Void Hood
    const headGeo = new THREE.SphereGeometry(isHoodie ? 0.34 : 0.26, 20, 16)
    const headMesh = new THREE.Mesh(headGeo, wireMat)
    headMesh.position.y = 0.7 + height / 2 + 0.32
    group.add(headMesh)

    // Horizontal scanline rings
    for (let i = 0; i < 4; i++) {
      const ringGeo = new THREE.RingGeometry(
        botRadius * 0.9,
        botRadius * 1.05,
        32,
      )
      ringGeo.rotateX(Math.PI / 2)
      const ringMesh = new THREE.Mesh(ringGeo, wireMat)
      ringMesh.position.y = 0.2 + i * 0.32
      group.add(ringMesh)
    }

    this.modelGroup.add(group)
    this.ready = true
    if (this.options.onProgress) this.options.onProgress(1.0)
  }

  animate() {
    if (!this.active) return
    requestAnimationFrame(this.animate)

    const now = performance.now()
    const dt = 0.016

    // Freeze-on-hold observation state
    const isObserved =
      this.isDragging || this.zoom.targetZ > 1.05 || now < this.heldUntil
    const targetSpeed = isObserved ? 0.0 : 1.0
    this.playSpeed +=
      (targetSpeed - this.playSpeed) * Math.min(1, dt * this.holdEase)
    if (this.playSpeed < 0.01 && isObserved) this.playSpeed = 0

    if (this.mixer && this.playSpeed > 0) {
      this.mixer.update(dt * this.playSpeed)
    }

    // Auto rotate when not held
    if (!this.isDragging) {
      this.rotation.targetY += 0.005 * this.playSpeed
    }
    this.rotation.y += (this.rotation.targetY - this.rotation.y) * 0.1
    this.modelGroup.rotation.y = this.rotation.y

    // Zoom interpolation
    this.zoom.z += (this.zoom.targetZ - this.zoom.z) * 0.1
    this.modelGroup.scale.set(this.zoom.z, this.zoom.z, this.zoom.z)

    this.renderer.render(this.scene, this.camera)
  }

  destroy() {
    this.active = false
    this.renderer.dispose()
  }
}
