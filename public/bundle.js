/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function createLine(xstart, ystart, xend, yend, width, color, cap,ctx) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width
  ctx.lineCap = cap;//BORDE DE LA LÍNEA
  ctx.moveTo(xstart, ystart);
  ctx.lineTo(xend, yend);
  ctx.stroke();
  ctx.closePath();
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const createCanvas = __webpack_require__(2);
const createLine = __webpack_require__(0)
const horizontalLine = __webpack_require__(4)



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
  let contexto3 = createCanvas("canvasContainer1", "idCanvas1", 700, 300, "1px solid tomato", "div", "body");

  //xstart, ystart, xend, yend, width, color,ctx,newYStart,newYend
  horizontalLine(30, 30, 50, 50, 2, "tomato", contexto3, 3, 3)


}


window.load = init();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const createContainer = __webpack_require__(3);

"use strict"

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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function createContainer(id, tag, appendTo) {

  let containerCanvas = document.createElement(tag);
  containerCanvas.setAttribute("id", id);
  return document.querySelector(appendTo).appendChild(containerCanvas);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const createLine = __webpack_require__(0);

module.exports = function horizontalLine(xstart, ystart, xend, yend, width, color,ctx,newYStart,newYend) {
  for (i = 1; i <= 10; i++) {
    drawLine(xstart, ystart, xend, yend, width++, color,ctx);
    ystart += newYStart; //change through y axis
    yend += newYend;
  }
}


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map