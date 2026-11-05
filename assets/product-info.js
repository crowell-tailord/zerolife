// The item panel's words, one entry per model button (js/room-panel.js draws it next to the model). Hand-written.
// MAKESHIFT (Oct 12 2026): EVERYTHING here is placeholder shop copy for the user to replace: names, prices, sizes,
// fabric make-up, fit, care, shipping. The measurements are NOT the size chart: they were measured on the 3D models as
// the garment hangs on the avatar, so they are only rough. Replace them with the real ones from the CLO pattern.
// Photos (Nov 1 2026): the Blender mockups, made square by tools/build-tee-photos.py. The FIRST is the main photo (the
// cart's thumbnail). The phone strip shows them in this order; the desktop panel as a row of small squares.
const TEE_PHOTOS = [
  ['assets/01-back-main.jpg', 'Back print on black jersey'],
  ['assets/02-back-faces.jpg', 'Back print close-up: the faces'],
  ['assets/03-text-sq.jpg', 'Back print close-up: the terminal text'],
  ['assets/04-back-feet.jpg', 'Back print close-up: the legs'],
  ['assets/05-front-logo.jpg', 'Front chest logo'],
]
// The hoodie's: CLO's hoodie laid flat, back up (the hand is on the back); the sleeve shot has that arm turned out
const HOODIE_PHOTOS = [
  ['assets/01-main.jpg', 'Back print on black fleece'],
  ['assets/02-knuckles.jpg', 'Back print close-up: the knuckles'],
  ['assets/03-nail.jpg', 'Back print close-up: the nail'],
  ['assets/04-hem.jpg', 'Back print close-up: the wrist over the bone rib hem'],
  ['assets/05-sleeve.jpg', 'Sleeve print: ZERØLIFE'],
  ['assets/06-front.jpg', 'The whole hoodie, laid flat'],
]
window.ZL_PRODUCTS = {
  tee: {
    subject: 'SUBJECT 01 // RECOVERED',
    name: 'ZERØLIFE Tee',
    file: 'FILE ZL-TE-001 // STATE: DOWNLOADED',
    line: 'the human is the glitch.',
    price: '$ 55.00',
    photos: TEE_PHOTOS,
    photo: TEE_PHOTOS[0][0],
    sizes: ['S', 'M', 'L', 'XL'],
    rows: [
      ['FABRIC', '240 GSM heavyweight jersey'],
      ['MADE OF', '100% cotton'],
      ['FIT', 'boxy, dropped shoulder'],
      ['PRINT', 'screen print, front + back'],
      ['CARE', 'cold wash inside out, do not tumble dry'],
      ['SHIPS', '3-5 days // worldwide'],
      ['LENGTH', '~75 cm *'],
      ['WIDTH', '~42 cm *'],
      ['SLEEVE', '~35 cm *'],
    ],
  },
  catwalk: {
    subject: 'SUBJECT 02 // RECOVERED',
    name: 'ZERØLIFE Tee',
    file: 'FILE ZL-TE-001 // STATE: WORN',
    line: 'the human is the glitch.',
    price: '$ 55.00',
    photos: TEE_PHOTOS,
    photo: TEE_PHOTOS[0][0],
    sizes: ['S', 'M', 'L', 'XL'],
    rows: [
      ['FABRIC', '240 GSM heavyweight jersey'],
      ['MADE OF', '100% cotton'],
      ['FIT', 'boxy, dropped shoulder'],
      ['PRINT', 'screen print, front + back'],
      ['CARE', 'cold wash inside out, do not tumble dry'],
      ['SHIPS', '3-5 days // worldwide'],
      ['LENGTH', '~75 cm *'],
      ['WIDTH', '~42 cm *'],
      ['SLEEVE', '~35 cm *'],
    ],
  },
  hoodie: {
    subject: 'SUBJECT 03 // RECOVERED',
    name: 'ZERØLIFE Hoodie',
    file: 'FILE ZL-HD-001 // STATE: INFECTED',
    line: 'the human is the glitch.',
    price: '$ 95.00',
    photos: HOODIE_PHOTOS,
    photo: HOODIE_PHOTOS[0][0],
    sizes: ['S', 'M', 'L', 'XL'],
    rows: [
      ['FABRIC', '420 GSM brushed-back fleece'],
      ['MADE OF', '80% cotton, 20% polyester'],
      ['RIB', '95% cotton, 5% elastane'],
      ['FIT', 'oversized, dropped shoulder'],
      ['PRINT', 'knockout screen print, front + back'],
      ['CARE', 'cold wash inside out, do not tumble dry'],
      ['SHIPS', '3-5 days // worldwide'],
      ['LENGTH', '~64 cm *'],
      ['WIDTH', '~47 cm *'],
      ['SLEEVE', '~62 cm *'],
    ],
  },
}
