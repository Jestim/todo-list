import { clearTodoDisplay, createListElement, createTodoElement, deleteListElement, deleteTodoElement } from "./dom-manipulation";

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
    createNewTodo(newTodoInput.value);
    newTodoInput.value = '';
});

let mainListContainer = (() => {
    let lists = [];
    let currentList;

    function addList(list) {
        lists.push(list);
    }

    function getList(listName) {
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].getName() === listName) {
                return lists[i];
            }
        }
    }

    function getAllLists() {
        return lists;
    }

    function setCurrentList(list) {
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] === list) {
                currentList = lists[i];
            }
        }
    }

    function getCurrentList() {
        return currentList;
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
        removeList,
        setCurrentList,
        getCurrentList
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

function deleteList(list) {
    deleteListElement(list);
    mainListContainer.removeList(list.target.previousSibling.textContent);
}

function displaySelectedList(selectedList) {
    clearTodoDisplay();
    const listName = selectedList.target.textContent
    const list = mainListContainer.getList(listName);
    mainListContainer.setCurrentList(list);
    const todos = list.getTodos();
    todos.forEach(todo => {
        createTodoElement(todo.getName());
    });
}

function createNewTodo(todoName) {
    let currentList = mainListContainer.getCurrentList();
    currentList.addTodo(createTodoObject(todoName));
}

function deleteTodo(todo) {
    deleteTodoElement(todo);

    const todoName = todo.target.previousSibling.textContent;
    const lists = mainListContainer.getAllLists();
    for (let i = 0; i < lists.length; i++) {
        const todos = lists[i].getTodos();
        for (let j = 0; j < todos.length; j++) {
            if (todos[j].getName() == todoName) {
                lists[i].removeTodo(todos[j]);
            }
        }
    }
}



createNewList('Default');
const defaultList = mainListContainer.getList('Default');
defaultList.addTodo(createTodoObject('Buy Milk'));

createNewList('Test');
const testList = mainListContainer.getList('Test');
testList.addTodo(createTodoObject('Run!'));

export {
    mainListContainer,
    displaySelectedList,
    deleteList,
    deleteTodo,
};