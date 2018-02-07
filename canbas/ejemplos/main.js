const createCanvas = require('../modulos/crear-canva/createCanvas.js');


function crear(idContainer, idCanvas, width, height, border, tagContainerCanvas, appendToContainer) {
  let ctx = createCanvas(idContainer, idCanvas, width, height, border, tagContainerCanvas, appendToContainer);
}


function init() {
  crear("canvasContainer1", "idCanvas1", 700, 300, "1px solid tomato", "div", "body");
  crear("canvasContainer2", "idCanvas2", 350, 300, "1px solid tomato", "div", "body");
}


window.load = init();
