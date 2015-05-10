// info from: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

var noop = function() {}

var ctx = {
  clearRect: noop,
  fillRect: noop,
  strokeRect: noop,
  fillText: noop,
  strokeText: noop,
  measureText: noop,
  lineWidth: 1,
  lineCap: 'butt',
  lineJoin: 'miter',
  miterLimit: 10,
  getLineDash: noop,
  lineDashOffset: 0,
  font: '10px sans-serif',
  textAlign: 'start',
  textBaseline: 'alphabetic',
  direction: 'inherit',
  fillStyle: '#000',
  strokeStyle: '#000',
  createLinearGradient: noop,
  createRadialGradient: noop,
  createPattern: '#000',
  shadowBlur: 0,
  shadowColor: 'black',
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  // Paths
  beginPath: noop,
  closePath: noop,
  moveTo: noop,
  lineTo: noop,
  bezierCurveTo: noop,
  quadraticCurveTo: noop,
  arc: noop,
  arcTo: noop,
  ellipse: noop,
  rect: noop,
  // Drawing Paths
  fill: noop,
  stroke: noop,
  drawFocusIfNeeded: noop,
  scrollPathIntoView: noop,
  clip: noop,
  isPointInPath: noop,
  isPointInStroke: noop,
  // Transformations
  currentTransform: {},
  rotate: noop,
  scale: noop,
  translate: noop,
  transform: noop,
  setTransform: noop,
  resetTransform: noop,
  // Compositing
  globalAlpha: 1.0,
  globalCompositeOperation: {},
  // Drawing Images
  drawImage: noop,
  // PixelManipulation
  createImageData: noop,
  getImageData: noop,
  putImageData: noop,
  // Image Smoothing
  imageSmoothingEnabled: false,
  // Canvas State
  save: noop,
  restore: noop,
  canvas: {},
  // Hit regions
  addHitRegion: noop,
  removeHitRegion: noop,
  clearHitRegions: noop
  // Non-standard APIs not "implemented"
}

module.exports = ctx