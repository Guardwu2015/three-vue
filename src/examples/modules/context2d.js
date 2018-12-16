function get2DCanvasContext() {
  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 1600;
  canvas.style.width = '800px';
  canvas.style.height = '800px';
  return canvas.getContext('2d');
}

const context = get2DCanvasContext();

export default context;