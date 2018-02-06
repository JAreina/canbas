module.exports =  function createCanvas(selector, width, height, border ) {
    let canvas=undefined;
    let ctx=undefined;
    let container=undefined;

    container = document.querySelector(selector);

    canvas = document.createElement("canvas");
    canvas.style.border = border;
    canvas.width = width;
    canvas.height = height;
    container.appendChild(canvas);
    if (canvas.getContext)
      ctx = canvas.getContext("2d");

    return ctx;
  };
