const createCanvas = require('../modulos/crear-canva/createCanvas.js');
const createLine = require('../modulos/line/line.js')




function init() {
  //crear primer canvas
  let contexto = createCanvas("canvasContainer1", "idCanvas1", 700, 300, "1px solid tomato", "div", "body");

  //CREAR OTRO CANVAS
  let contexto2 = createCanvas("canvasContainer2", "idCanvas2", 350, 300, "1px solid tomato", "div", "body");

  //DIBUJAR LÍNEAS

  createLine(30, 30, 300, 30, 10, "tomato", "butt", contexto2)
    createLine(30,80,300,80,20,"crimson","round", contexto2)
      createLine(30,130,300,130,20,"teal","square", contexto2)
}


window.load = init();
