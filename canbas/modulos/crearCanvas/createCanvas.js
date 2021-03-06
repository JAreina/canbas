const createContainer = require('./createContainer.js');

"use strict"
/**
 * Esta función crea el lienzo del canvas
 * @param {string}  idContainer del contenedor
 * @param {string} idCanvas id del canvas
 * @param {number} width ancho del canvas
 * @param {number} height altura del canvas
 * @param {string} border expresión css para el borde del canvas
 * @param {string} tagContainerCanvas etiqueta html del container del container
 * @param {string} appendToContainer elemento donde se añade el canvas
 * @returns {Object} el contexto del canvas
 */
module.exports = function createCanvas(idContainer, idCanvas, width, height, border, tagContainerCanvas, appendToContainer) {
  let canvas = undefined;
  let ctx = undefined;
  let container = undefined;



  container = createContainer(idContainer, tagContainerCanvas, appendToContainer)

  canvas = document.createElement("canvas");
  canvas.setAttribute("id", idCanvas)
  canvas.style.border = border;
  canvas.width = width;
  canvas.height = height;
  container.appendChild(canvas);
  if (canvas.getContext)
    ctx = canvas.getContext("2d");

  return ctx;
};
