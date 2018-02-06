const createCanvas= require('../modulos/crear-canva/createCanvas.js');


    function crear(){
      let ctx = createCanvas(".canvas",300,300,"1px solid tomato");
    }
    window.load=crear();
