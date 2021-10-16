import { createListElement, createTodoElement, deleteListElement, deleteTodoElement } from "./dom-manipulation";

// DOM Elements
const addListButton = document.querySelector('.add-list-button');
const addListForm = document.querySelector('.add-list-form');
const newListInput = document.querySelector('.new-list');
const newListButton = document.querySelector('.new-list-button');

const newTodoInput = document.querySelector('.new-todo');
const newTodoButton = document.querySelector('.new-todo-button');

createListElement('Default');
createListElement('Test');
createListElement('Work');
createTodoElement('Buy milk');
createTodoElement('Buy nuts');
createTodoElement('Clean');


// Hide "Add List" button when clicked and show input for new list
addListButton.addEventListener('click', (e) => {
    e.target.classList.add('invisible');
    addListForm.classList.remove('invisible');
});

// Create new list with the inputted text
newListButton.addEventListener('click', () => {
    createListElement(newListInput.value);
    addListButton.classList.remove('invisible');
    addListForm.classList.add('invisible');
    newListInput.value = '';
});

newTodoButton.addEventListener('click', () => {
    createTodoElement(newTodoInput.value);
    newTodoInput.value = '';
});