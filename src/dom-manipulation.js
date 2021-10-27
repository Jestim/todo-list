import { mainListContainer, displaySelectedList, deleteList, deleteTodo, toggleTodoCheckedState } from "./index";

// DOM Elements
const listsElement = document.querySelector('.lists');
const currentTodosElement = document.querySelector('.current-todos');

function createListElement(newListName) {
    const listElement = document.createElement('li');
    listElement.classList.add('list');
    listElement.addEventListener('click', (e) => {
        displaySelectedList(e.target.firstChild.textContent);
    });
    const listNameElement = document.createElement('p');
    listNameElement.textContent = newListName;
    listElement.appendChild(listNameElement);

    const deleteListIconElement = document.createElement('i');
    deleteListIconElement.classList.add('far', 'fa-trash-alt');
    deleteListIconElement.addEventListener('click', (e) => {
        deleteList(e.target.previousSibling.textContent);
        deleteListElement(e);
        e.stopPropagation();
    });
    listElement.appendChild(deleteListIconElement);

    listsElement.appendChild(listElement);
}

function createTodoElement(newTodoData, isDone) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');

    const checkIconElement = document.createElement('i');
    if (isDone) {
        checkIconElement.classList.add('far', 'fa-check-square');
    } else {
        checkIconElement.classList.add('far', 'fa-square');
    }
    checkIconElement.addEventListener('click', (e) => {
        changeCheckSquareState(e);
        toggleTodoCheckedState(e.target.nextSibling.textContent);
    });
    todoElement.appendChild(checkIconElement);

    const todoDataElement = document.createElement('p');
    todoDataElement.textContent = newTodoData;
    todoElement.appendChild(todoDataElement);

    const deleteTodoIconElement = document.createElement('i');
    deleteTodoIconElement.classList.add('far', 'fa-trash-alt');
    deleteTodoIconElement.addEventListener('click', deleteTodo)
    todoElement.appendChild(deleteTodoIconElement);

    currentTodosElement.appendChild(todoElement);
}

function deleteListElement(listElement) {
    const lists = document.querySelectorAll('.list');
    lists.forEach(list => {
        if (list === listElement.target.parentElement) {
            list.remove();
        }
    });
}

function deleteTodoElement(todoElement) {
    const todos = document.querySelectorAll('.todo');
    todos.forEach(todo => {
        if (todo === todoElement.target.parentElement) {
            todo.remove();
        }
    });
}

function changeCheckSquareState(e) {
    if (e.target.classList.contains('fa-square')) {
        e.target.classList.remove('fa-square');
        e.target.classList.add('fa-check-square');
    } else {
        e.target.classList.remove('fa-check-square');
        e.target.classList.add('fa-square');
    }
}

function clearTodoDisplay() {
    while (currentTodosElement.firstChild) {
        currentTodosElement.lastChild.remove();
    }
}

export {
    createListElement,
    createTodoElement,
    deleteListElement,
    deleteTodoElement,
    clearTodoDisplay
};