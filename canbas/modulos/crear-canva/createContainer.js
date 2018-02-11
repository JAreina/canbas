

/**
 * Esta función crea un contenedor
 * @param {string}  id del contenedor
 * @param {string} etiqueta HTML del contenedor
 * @param {string} appendTo dónde se añade el elemento creado
 * @returns {element} el contenedor
 */
module.exports = function createContainer(id, tag, appendTo) {


  let containerCanvas = document.createElement(tag);
  containerCanvas.setAttribute("id", id);
  return document.querySelector(appendTo).appendChild(containerCanvas);
}
