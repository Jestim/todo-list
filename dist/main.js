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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createListElement\": () => (/* binding */ createListElement),\n/* harmony export */   \"createTodoElement\": () => (/* binding */ createTodoElement),\n/* harmony export */   \"deleteListElement\": () => (/* binding */ deleteListElement),\n/* harmony export */   \"deleteTodoElement\": () => (/* binding */ deleteTodoElement),\n/* harmony export */   \"clearTodoDisplay\": () => (/* binding */ clearTodoDisplay)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n// DOM Elements\nconst listsElement = document.querySelector('.lists');\nconst currentTodosElement = document.querySelector('.current-todos');\n\nfunction createListElement(newListName) {\n    const listElement = document.createElement('li');\n    listElement.classList.add('list');\n\n    const listNameElement = document.createElement('p');\n    listNameElement.textContent = newListName;\n    listNameElement.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_0__.displaySelectedList);\n    listElement.appendChild(listNameElement);\n\n    const deleteListIconElement = document.createElement('i');\n    deleteListIconElement.classList.add('far', 'fa-trash-alt');\n    deleteListIconElement.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_0__.deleteList);\n    listElement.appendChild(deleteListIconElement);\n\n    listsElement.appendChild(listElement);\n}\n\nfunction createTodoElement(newTodoData) {\n    const todoElement = document.createElement('div');\n    todoElement.classList.add('todo');\n\n    const checkIconElement = document.createElement('i');\n    checkIconElement.classList.add('far', 'fa-square');\n    checkIconElement.addEventListener('click', changeCheckSquareState);\n    todoElement.appendChild(checkIconElement);\n\n    const todoDataElement = document.createElement('p');\n    todoDataElement.textContent = newTodoData;\n    todoElement.appendChild(todoDataElement);\n\n    const deleteTodoIconElement = document.createElement('i');\n    deleteTodoIconElement.classList.add('far', 'fa-trash-alt');\n    deleteTodoIconElement.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)\n    todoElement.appendChild(deleteTodoIconElement);\n\n    currentTodosElement.appendChild(todoElement);\n}\n\nfunction deleteListElement(listElement) {\n    const lists = document.querySelectorAll('.list');\n    lists.forEach(list => {\n        if (list === listElement.target.parentElement) {\n            list.remove();\n        }\n    });\n}\n\nfunction deleteTodoElement(todoElement) {\n    const todos = document.querySelectorAll('.todo');\n    todos.forEach(todo => {\n        if (todo === todoElement.target.parentElement) {\n            todo.remove();\n        }\n    });\n}\n\nfunction changeCheckSquareState(e) {\n    if (e.target.classList.contains('fa-square')) {\n        e.target.classList.remove('fa-square');\n        e.target.classList.add('fa-check-square');\n    } else {\n        e.target.classList.remove('fa-check-square');\n        e.target.classList.add('fa-square');\n    }\n}\n\nfunction clearTodoDisplay() {\n    while (currentTodosElement.firstChild) {\n        currentTodosElement.lastChild.remove();\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom-manipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainListContainer\": () => (/* binding */ mainListContainer),\n/* harmony export */   \"displaySelectedList\": () => (/* binding */ displaySelectedList),\n/* harmony export */   \"deleteList\": () => (/* binding */ deleteList),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo)\n/* harmony export */ });\n/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ \"./src/dom-manipulation.js\");\n\n\n// DOM Elements\nconst addListButton = document.querySelector('.add-list-button');\nconst addListForm = document.querySelector('.add-list-form');\nconst newListInput = document.querySelector('.new-list');\nconst newListButton = document.querySelector('.new-list-button');\n\nconst newTodoInput = document.querySelector('.new-todo');\nconst newTodoButton = document.querySelector('.new-todo-button');\n\n\n// Hide \"Add List\" button when clicked and show input for new list\naddListButton.addEventListener('click', (e) => {\n    e.target.classList.add('invisible');\n    addListForm.classList.remove('invisible');\n});\n\n// Create new list with the inputted text\nnewListButton.addEventListener('click', () => {\n    createNewList(newListInput.value);\n    addListButton.classList.remove('invisible');\n    addListForm.classList.add('invisible');\n    newListInput.value = '';\n});\n\n// Create new todo with the inputted text\nnewTodoButton.addEventListener('click', () => {\n    createNewTodo(newTodoInput.value);\n    newTodoInput.value = '';\n});\n\nlet mainListContainer = (() => {\n    let lists = [];\n    let currentList;\n\n    function addList(list) {\n        lists.push(list);\n    }\n\n    function getList(listName) {\n        for (let i = 0; i < lists.length; i++) {\n            if (lists[i].getName() === listName) {\n                return lists[i];\n            }\n        }\n    }\n\n    function getAllLists() {\n        return lists;\n    }\n\n    function setCurrentList(list) {\n        for (let i = 0; i < lists.length; i++) {\n            if (lists[i] === list) {\n                currentList = lists[i];\n            }\n        }\n    }\n\n    function getCurrentList() {\n        return currentList;\n    }\n\n    function removeList(list) {\n        for (let i = 0; i < lists.length; i++) {\n            if (lists[i].getName() === list) {\n                lists.splice(i, 1);\n            }\n        }\n    }\n\n    return {\n        addList,\n        getList,\n        getAllLists,\n        removeList,\n        setCurrentList,\n        getCurrentList\n    }\n})();\n\nfunction createListObject(listName) {\n    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createListElement)(listName);\n\n    let name = listName;\n    let todos = [];\n\n    function getName() {\n        return name;\n    }\n\n    function getTodos() {\n        return todos;\n    }\n\n    function addTodo(newTodo) {\n        todos.push(newTodo);\n    }\n\n    function removeTodo(deleteTodo) {\n        for (let i = 0; i < todos.length; i++) {\n            if (todos[i] === deleteTodo) {\n                todos.splice(i, 1);\n            }\n        }\n    }\n\n    return {\n        getName,\n        getTodos,\n        addTodo,\n        removeTodo\n    }\n}\n\nfunction createTodoObject(todoName) {\n    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createTodoElement)(todoName);\n\n    let name = todoName;\n    let isDone = false;\n\n    function getName() {\n        return name;\n    }\n\n    return { getName };\n}\n\nfunction createNewList(listName) {\n    mainListContainer.addList(createListObject(listName));\n}\n\nfunction deleteList(list) {\n    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.deleteListElement)(list);\n    mainListContainer.removeList(list.target.previousSibling.textContent);\n}\n\nfunction displaySelectedList(selectedList) {\n    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.clearTodoDisplay)();\n    const listName = selectedList.target.textContent\n    const list = mainListContainer.getList(listName);\n    mainListContainer.setCurrentList(list);\n    const todos = list.getTodos();\n    todos.forEach(todo => {\n        (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.createTodoElement)(todo.getName());\n    });\n}\n\nfunction createNewTodo(todoName) {\n    let currentList = mainListContainer.getCurrentList();\n    currentList.addTodo(createTodoObject(todoName));\n}\n\nfunction deleteTodo(todo) {\n    (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.deleteTodoElement)(todo);\n\n    const todoName = todo.target.previousSibling.textContent;\n    const lists = mainListContainer.getAllLists();\n    for (let i = 0; i < lists.length; i++) {\n        const todos = lists[i].getTodos();\n        for (let j = 0; j < todos.length; j++) {\n            if (todos[j].getName() == todoName) {\n                lists[i].removeTodo(todos[j]);\n            }\n        }\n    }\n}\n\n\n\ncreateNewList('Default');\nconst defaultList = mainListContainer.getList('Default');\ndefaultList.addTodo(createTodoObject('Buy Milk'));\n\ncreateNewList('Test');\nconst testList = mainListContainer.getList('Test');\ntestList.addTodo(createTodoObject('Run!'));\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;