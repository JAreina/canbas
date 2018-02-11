const createCanvas = require('../modulos/crearCanvas/createCanvas.js');
const createLine = require('../modulos/line/line.js')
const horizontalLines = require('../modulos/line/horizontalLines.js')
import './../src/canbas.css';


function init() {
  //crear primer canvas
  let contexto = createCanvas("canvasContainer1", "idCanvas1", 700, 300, "1px solid tomato", "div", "body");

  //CREAR OTRO CANVAS
  let contexto2 = createCanvas("canvasContainer2", "idCanvas2", 350, 300, "1px solid tomato", "div", "body");

  //DIBUJAR LÍNEAS

  createLine(30, 30, 300, 30, 10, "tomato", "butt", contexto2)
  createLine(30, 80, 300, 80, 20, "crimson", "round", contexto2)
  createLine(30, 130, 300, 130, 20, "teal", "square", contexto2)


  //lineas horizontales
  let contexto3 = createCanvas("canvasContainer3", "idCanvas3", 300, 300, "1px solid tomato", "div", "body");

  //xstart, ystart, xend, yend, width,color,ctx,cap,newYStart,newYend,numDeLineas
  horizontalLines(0, 5, 50, 5, 2, "tomato", contexto3,"", 30, 30,5)
horizontalLines(50, 30, 150, 30, 2, "teal", contexto3,"", 30, 30,8)

}


window.load = init();
