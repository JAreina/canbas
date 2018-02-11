/**
 * Esta función crea una simple línea
 * @param {number}  xstart punto donde comienza en el eje x
 * @param {number} ystart punto donde comienza en el eje y
 * @param {number} xend punto donde termina en el eje x
 * @param {number} yend punto donde termina en el eje y
 * @param {number} width ancho de la línea
 * @param {string} color color de la línea
 * @param {string} cap  borde de la línea puede ser "butt",  "round",  "square"
 * @param {Object} ctx contexto del canvas
 * @returns {void} no retorna nada
 */
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
