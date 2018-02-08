const createCanvas = require('../modulos/crear-canva/createCanvas.js');
const createLine= require('../modulos/line/line.js')

function crear(idContainer, idCanvas, width, height, border, tagContainerCanvas, appendToContainer) {
  let ctx = createCanvas(idContainer, idCanvas, width, height, border, tagContainerCanvas, appendToContainer);
  return ctx;
}


function init() {
  crear("canvasContainer1", "idCanvas1", 700, 300, "1px solid tomato", "div", "body");
let contexto=   crear("canvasContainer2", "idCanvas2", 350, 300, "1px solid tomato", "div", "body");
      createLine(30,30,300,30,20,"orange","butt",contexto)
}


window.load = init();
