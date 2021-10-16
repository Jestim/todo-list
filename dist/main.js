/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createListElement\": () => (/* binding */ createListElement),\n/* harmony export */   \"createTodoElement\": () => (/* binding */ createTodoElement),\n/* harmony export */   \"deleteListElement\": () => (/* binding */ deleteListElement),\n/* harmony export */   \"deleteTodoElement\": () => (/* binding */ deleteTodoElement)\n/* harmony export */ });\n// DOM Elements\nconst listsElement = document.querySelector('.lists');\nconst todoDisplayElement = document.querySelector('.todo-display');\n\nfunction createListElement(newListName) {\n    const listElement = document.createElement('li');\n    listElement.classList.add('list');\n\n    const listNameElement = document.createElement('p');\n    listNameElement.textContent = newListName;\n    listElement.appendChild(listNameElement);\n\n    const deleteListIconElement = document.createElement('i');\n    deleteListIconElement.classList.add('far', 'fa-trash-alt');\n    deleteListIconElement.addEventListener('click', deleteListElement);\n    listElement.appendChild(deleteListIconElement);\n\n    listsElement.appendChild(listElement);\n}\n\nfunction createTodoElement(newTodoData) {\n    const todoElement = document.createElement('div');\n    todoElement.classList.add('todo');\n\n    const checkIconElement = document.createElement('i');\n    checkIconElement.classList.add('far', 'fa-square');\n    checkIconElement.addEventListener('click', changeCheckSquareState);\n    todoElement.appendChild(checkIconElement);\n\n    const todoDataElement = document.createElement('p');\n    todoDataElement.textContent = newTodoData;\n    todoElement.appendChild(todoDataElement);\n\n    const deleteTodoIconElement = document.createElement('i');\n    deleteTodoIconElement.classList.add('far', 'fa-trash-alt');\n    deleteTodoIconElement.addEventListener('click', deleteTodoElement)\n    todoElement.appendChild(deleteTodoIconElement);\n\n    todoDisplayElement.appendChild(todoElement);\n}\n\nfunction deleteListElement(listElement) {\n    const lists = document.querySelectorAll('.list');\n    lists.forEach(list => {\n        if (list === listElement.target.parentElement) {\n            list.remove();\n        }\n    });\n}\n\nfunction deleteTodoElement(todoElement) {\n    const todos = document.querySelectorAll('.todo');\n    todos.forEach(todo => {\n        if (todo === todoElement.target.parentElement) {\n            todo.remove();\n        }\n    });\n}\n\nfunction changeCheckSquareState(e) {\n    if (e.target.classList.contains('fa-square')) {\n        e.target.classList.remove('fa-square');\n        e.target.classList.add('fa-check-square');\n    } else {\n        e.target.classList.remove('fa-check-square');\n        e.target.classList.add('fa-square');\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom-manipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ \"./src/dom-manipulation.js\");\n\n\n// DOM Elements\nconst addListButton = document.querySelector('.add-list-button');\nconst addListForm = document.querySelector('.add-list-form');\nconst newListInput = document.querySelector('.new-list');\nconst newListButton = document.querySelector('.new-list-button');\n\nconst newTodoInput = document.querySelector('.new-todo');\nconst newTodoButton = document.querySelector('.new-todo-button');\n\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createListElement)('Default');\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createListElement)('Test');\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createListElement)('Work');\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createTodoElement)('Buy milk');\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createTodoElement)('Buy nuts');\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createTodoElement)('Clean');\n\n\n// Hide \"Add List\" button when clicked and show input for new list\naddListButton.addEventListener('click', (e) => {\n    e.target.classList.add('invisible');\n    addListForm.classList.remove('invisible');\n});\n\n// Create new list with the inputted text\nnewListButton.addEventListener('click', () => {\n    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createListElement)(newListInput.value);\n    addListButton.classList.remove('invisible');\n    addListForm.classList.add('invisible');\n    newListInput.value = '';\n});\n\nnewTodoButton.addEventListener('click', () => {\n    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createTodoElement)(newTodoInput.value);\n    newTodoInput.value = '';\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;