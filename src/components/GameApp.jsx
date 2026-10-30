import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

export default function GameApp() {
  const mountRef = useRef(null);
  const [speed, setScaleSpeed] = useState(1);
  const [color, setColor] = useState('#10b981'); // Emerald
  const [isRotating, setIsRotating] = useState(true);
  const [selectedGear, setSelectedGear] = useState('Cyber Core');

  const gears = [
    { name: 'Cyber Core', desc: 'Central processing engine of the matrix.', price: '$29.99' },
    { name: 'Neon Visor', desc: 'HUD visor for tactical digital analysis.', price: '$49.99' },
    { name: 'Quantum Cell', desc: 'Sub-atomic power storage container.', price: '$89.99' }
  ];

  // 3D Scene instantiation
  useEffect(() => {
    if (!mountRef.current) return;

    // Dimensions
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    
    // Throttling Device Pixel Ratio on mobile to preserve battery life
    const dpr = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(dpr);
    mountRef.current.appendChild(renderer.domElement);

    // Geometry: Torus Knot for high-impact visual
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    
    // Material
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      roughness: 0.1,
      metalness: 0.8,
      wireframe: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Handle Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isRotating) {
        mesh.rotation.x += 0.005 * speed;
        mesh.rotation.y += 0.01 * speed;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [speed, color, isRotating]);

  // Handle color change and pass it into Three.js safely
  const handleColorChange = (hex) => {
    setColor(hex);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-slate-100">
      {/* Mobile-first: Canvas is stacked on top on mobile, sits side-by-side on desktop */}
      <div className="relative w-full aspect-square bg-slate-950/80 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center">
        <div ref={mountRef} className="absolute inset-0 w-full h-full" />
        
        {/* HUD Stats */}
        <div className="absolute top-4 left-4 font-mono text-xs bg-slate-900/90 p-3 rounded border border-slate-700 space-y-1">
          <p className="text-emerald-400 font-bold">// SYSTEM ACTIVE</p>
          <p>FPS: 60.00</p>
          <p>OBJECT: TORUS KNOT</p>
          <p>GEAR: {selectedGear.toUpperCase()}</p>
        </div>
      </div>

      {/* Control Panel / Interface */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-bold">
            ZEROLIFE MODULE // V1.0.0
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-teal-400 to-rose-400 bg-clip-text text-transparent">
            Equip Your Digital Reality
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            Configure, inspect, and purchase high-fidelity cybernetic modules directly into your neural net. High-performance, edge-rendered graphics.
          </p>
        </div>

        {/* Dynamic Controls */}
        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800/80 space-y-4">
          <h2 className="text-md font-mono font-semibold text-slate-300">// PARAMETERS CONFIG</h2>
          
          {/* Speed Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>ROTATION VELOCITY</span>
              <span>{speed.toFixed(1)}x</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="4" 
              step="0.1" 
              value={speed} 
              onChange={(e) => setScaleSpeed(parseFloat(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>

          {/* Color Switcher */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400 block">SPECTRUM TINT</label>
            <div className="flex gap-3">
              {[
                { hex: '#10b981', label: 'Emerald' },
                { hex: '#f43f5e', label: 'Rose' },
                { hex: '#3b82f6', label: 'Azure' },
                { hex: '#eab308', label: 'Amber' }
              ].map((c) => (
                <button
                  key={c.hex}
                  onClick={() => handleColorChange(c.hex)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${color === c.hex ? 'border-white scale-110' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  style={{ backgroundColor: c.hex }}
                  title={c.label}
                />
              ))}
            </div>
          </div>

          {/* Rotate Toggle */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-mono text-slate-400">ANIMATE SYSTEM ROTATION</span>
            <button 
              onClick={() => setIsRotating(!isRotating)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all ${isRotating ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
            >
              {isRotating ? 'ACTIVE' : 'PAUSED'}
            </button>
          </div>
        </div>

        {/* Gear Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {gears.map((g) => (
            <button
              key={g.name}
              onClick={() => setSelectedGear(g.name)}
              className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${selectedGear === g.name ? 'bg-slate-900 border-emerald-400 shadow-lg shadow-emerald-500/10' : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'}`}
            >
              <div>
                <h3 className="font-semibold text-sm">{g.name}</h3>
                <p className="text-slate-500 text-xs mt-1 line-clamp-2">{g.desc}</p>
              </div>
              <p className="text-emerald-400 font-mono text-xs font-bold mt-3">{g.price}</p>
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-2">
          <button className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-sm py-4 px-6 rounded-xl transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]">
            DEPLOY SELECTION // [ADD TO CART]
          </button>
        </div>
      </div>
    </div>
  );
}
