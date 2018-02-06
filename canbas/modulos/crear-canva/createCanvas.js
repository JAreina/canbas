const createContainer= require('./createContainer.js');

"use strict"

module.exports= function   createCanvas(idContainer,idCanvas, width, height, border,tagContainerCanvas,appendToContainer ) {
       let canvas=undefined;
       let ctx=undefined;
       let container=undefined;



       container = createContainer(idContainer,tagContainerCanvas,appendToContainer)

       canvas = document.createElement("canvas");
       canvas.setAttribute("id",idCanvas)
       canvas.style.border = border;
       canvas.width = width;
       canvas.height = height;
       container.appendChild(canvas);
       if (canvas.getContext)
         ctx = canvas.getContext("2d");

       return ctx;
     };
