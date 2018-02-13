const createLine = require('./line.js');
/**
 * Esta función crea varias líneas horizontales
 * @param {number}  xstart punto donde comienza en el eje x
 * @param {number} ystart punto donde comienza en el eje y
 * @param {number} xend punto donde termina en el eje x
 * @param {number} yend punto donde termina en el eje y
 * @param {number} width ancho de la línea
 * @param {string} color color de la línea
 * @param {string} cap  borde de la línea puede ser "butt",  "round",  "square"
 * @param {Object} ctx contexto del canvas
  * @param {number} newXStart nuevo valor para el punto de comienzo de la nueva línea en el eje x
  * @param {number} newXEnd nuevo valor para el punto de fin de la nueva línea en el eje x
  * @param {number} numDeLineas número de líneas a dibujar
 * @returns {void} no retorna nada
 */
module.exports = function verticalLines(xstart, ystart, xend, yend, width, color,cap,ctx,newXStart,newXend,numDeLineas) {
  for (i = 1; i <= numDeLineas; i++) {
    //xstart, ystart, xend, yend, width, color, cap,ctx
    createLine(xstart, ystart, xend, yend, width++, color,cap,ctx);
    xstart += newXStart; //change through x axis
    xend += newXend;
  }
}
