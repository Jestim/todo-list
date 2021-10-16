// DOM Elements
const listsElement = document.querySelector('.lists');
const todoDisplayElement = document.querySelector('.todo-display');

function createListElement(newListName) {
    const listElement = document.createElement('li');
    listElement.classList.add('list');

    const listNameElement = document.createElement('p');
    listNameElement.textContent = newListName;
    listElement.appendChild(listNameElement);

    const deleteListIconElement = document.createElement('i');
    deleteListIconElement.classList.add('far', 'fa-trash-alt');
    deleteListIconElement.addEventListener('click', deleteListElement);
    listElement.appendChild(deleteListIconElement);

    listsElement.appendChild(listElement);
}

function createTodoElement(newTodoData) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');

    const checkIconElement = document.createElement('i');
    checkIconElement.classList.add('far', 'fa-square');
    checkIconElement.addEventListener('click', changeCheckSquareState);
    todoElement.appendChild(checkIconElement);

    const todoDataElement = document.createElement('p');
    todoDataElement.textContent = newTodoData;
    todoElement.appendChild(todoDataElement);

    const deleteTodoIconElement = document.createElement('i');
    deleteTodoIconElement.classList.add('far', 'fa-trash-alt');
    deleteTodoIconElement.addEventListener('click', deleteTodoElement)
    todoElement.appendChild(deleteTodoIconElement);

    todoDisplayElement.appendChild(todoElement);
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

export {
    createListElement,
    createTodoElement,
    deleteListElement,
    deleteTodoElement
};