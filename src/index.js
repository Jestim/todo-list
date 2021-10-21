import { clearTodoDisplay, createListElement, createTodoElement, deleteListElement, deleteTodoElement } from "./dom-manipulation";

// DOM Elements
const addListButton = document.querySelector('.add-list-button');
const addListForm = document.querySelector('.add-list-form');
const newListInput = document.querySelector('.new-list');
const newListButton = document.querySelector('.new-list-button');

const newTodoInput = document.querySelector('.new-todo');
const newTodoButton = document.querySelector('.new-todo-button');

const allListElement = document.getElementById('all');

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

allListElement.addEventListener('click', (e) => {
    displaySelectedList(e.target.textContent);
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
    let name = listName;
    let todos = [];

    function getName() {
        return name;
    }

    function getTodos() {
        return todos;
    }

    function getTodo(todoName) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].getName() === todoName) {
                return todos[i];
            }
        }
        return null;
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
        getTodo,
        addTodo,
        removeTodo
    }
}

function createTodoObject(todoName) {
    let name = todoName;
    let isDone = false;

    function getName() {
        return name;
    }

    function toggleIsDone() {
        isDone = !isDone;
    }

    function getIsDone() {
        return isDone;
    }

    return {
        getName,
        toggleIsDone,
        getIsDone
    };
}

function createNewList(listName) {
    if (listName === '') {
        return;
    }
    mainListContainer.addList(createListObject(listName));
    createListElement(listName);
}

function deleteList(listName) {
    const todos = mainListContainer.getList(listName).getTodos();
    const allList = mainListContainer.getList('All');
    const allListTodos = allList.getTodos();

    todos.forEach(todo => {
        if (allListTodos.includes(todo)) {
            allList.removeTodo(todo);
        }
    });
    mainListContainer.removeList(listName);

    if (listName === mainListContainer.getCurrentList().getName()) {
        mainListContainer.setCurrentList(allList);
        displaySelectedList(allList.getName());
    }

    displaySelectedList(mainListContainer.getCurrentList().getName());
}

function displaySelectedList(listName) {
    clearTodoDisplay();
    const list = mainListContainer.getList(listName);
    mainListContainer.setCurrentList(list);
    setActiveList(list);
    const todos = list.getTodos();
    todos.forEach(todo => {
        createTodoElement(todo.getName());
    });
}

function setActiveList(list) {
    const listElements = document.querySelectorAll('.list');

    for (let i = 0; i < listElements.length; i++) {
        if (listElements[i].classList.contains('list-active')) {
            listElements[i].classList.remove('list-active');
        }

        if (listElements[i].firstChild.textContent == list.getName()) {
            listElements[i].classList.add('list-active');
        }
    };
}

function createNewTodo(todoName) {
    if (todoName === '') {
        return;
    }
    let currentList = mainListContainer.getCurrentList();
    let newTodo = createTodoObject(todoName);
    currentList.addTodo(newTodo);
    if (currentList.getName() != 'All') {
        mainListContainer.getList('All').addTodo(newTodo);
    }
    createTodoElement(todoName);
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

function toggleTodoCheckedState(todoName) {
    const currentList = mainListContainer.getCurrentList();
    const todo = currentList.getTodo(todoName);
    todo.toggleIsDone();
}


// Test -----------------------------------------------------
const allList = createListObject('All');
mainListContainer.addList(allList);
mainListContainer.setCurrentList(allList);
displaySelectedList(allList.getName());

createNewList('Test');
// ----------------------------------------------------------

export {
    mainListContainer,
    displaySelectedList,
    deleteList,
    deleteTodo,
    toggleTodoCheckedState,
};