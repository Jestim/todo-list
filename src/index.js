import { createListElement, createTodoElement, deleteListElement, deleteTodoElement } from "./dom-manipulation";

// DOM Elements
const addListButton = document.querySelector('.add-list-button');
const addListForm = document.querySelector('.add-list-form');
const newListInput = document.querySelector('.new-list');
const newListButton = document.querySelector('.new-list-button');

const newTodoInput = document.querySelector('.new-todo');
const newTodoButton = document.querySelector('.new-todo-button');


// Hide "Add List" button when clicked and show input for new list
addListButton.addEventListener('click', (e) => {
    e.target.classList.add('invisible');
    addListForm.classList.remove('invisible');
});

// Create new list with the inputted text
newListButton.addEventListener('click', () => {
    createNewList(newListInput.value);
    addListButton.classList.remove('invisible');
    addListForm.classList.add('invisible');
    newListInput.value = '';
});

// Create new todo with the inputted text
newTodoButton.addEventListener('click', () => {
    createTodoObject(newTodoInput.value);
    newTodoInput.value = '';
});

let mainListContainer = (() => {
    let lists = [];

    function addList(list) {
        lists.push(list);
    }

    function getList(list) {
        lists.forEach(element => {
            if (element.getName() === list) {
                return element;
            }
        });
    }

    function getAllLists() {
        return lists;
    }

    function removeList(list) {
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].getName() === list) {
                lists.splice(i, 1);
            }
        }
    }

    return {
        addList,
        getList,
        getAllLists,
        removeList
    }
})();

function createListObject(listName) {
    createListElement(listName);

    let name = listName;
    let todos = [];

    function getName() {
        return name;
    }

    function getTodos() {
        return todos;
    }

    function addTodo(newTodo) {
        todos.push(newTodo);
    }

    function removeTodo(deleteTodo) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i] === deleteTodo) {
                todos.splice(i, 1);
            }
        }
    }

    return {
        getName,
        getTodos,
        addTodo,
        removeTodo
    }
}

function createTodoObject(todoName) {
    createTodoElement(todoName);

    let name = todoName;
    let isDone = false;

    function getName() {
        return name;
    }

    return { getName };
}

function createNewList(listName) {
    mainListContainer.addList(createListObject(listName));
}

createNewList('Default');