module.exports = function createContainer(id,tag,appendTo){

  let containerCanvas = document.createElement(tag);
        containerCanvas.setAttribute("id",id);
  return document.querySelector(appendTo).appendChild(containerCanvas);
}
