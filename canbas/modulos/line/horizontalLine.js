const createLine = require('./line.js');

module.exports = function horizontalLine(xstart, ystart, xend, yend, width, color,ctx,cap,newYStart,newYend,numDeLineas) {
  for (i = 1; i <= numDeLineas; i++) {
    //xstart, ystart, xend, yend, width, color, cap,ctx
    createLine(xstart, ystart, xend, yend, width++, color,cap,ctx);
    ystart += newYStart; //change through y axis
    yend += newYend;
  }
}
