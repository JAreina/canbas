module.exports = function createLine(xstart, ystart, xend, yend, width, color, cap,ctx) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width
  ctx.lineCap = cap;
  ctx.moveTo(xstart, ystart);
  ctx.lineTo(xend, yend);
  ctx.stroke();
  ctx.closePath();
}
