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
    deleteListIconElement.id = 'delete-list-button';
    deleteListIconElement.classList.add('far', 'fa-trash-alt');
    listElement.appendChild(deleteListIconElement);

    listsElement.appendChild(listElement);
}

function createTodoElement(newTodoData) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');

    const checkIconElement = document.createElement('i');
    checkIconElement.classList.add('far', 'fa-square');
    todoElement.appendChild(checkIconElement);

    const todoDataElement = document.createElement('p');
    todoDataElement.textContent = newTodoData;
    todoElement.appendChild(todoDataElement);

    const deleteIconElement = document.createElement('i');
    deleteIconElement.classList.add('far', 'fa-trash-alt');
    todoElement.appendChild(deleteIconElement);

    todoDisplayElement.appendChild(todoElement);
}

function deleteListElement(listElement) {
    const lists = document.querySelectorAll('.list');
    lists.forEach(list => {
        if (list === listElement) {
            list.remove();
        }
    });
}

function deleteTodoElement(todoElement) {
    const todos = document.querySelectorAll('.todo');
    todos.forEach(todo => {
        if (todo === todoElement) {
            todo.remove();
        }
    });
}

export {
    createListElement,
    createTodoElement,
    deleteListElement,
    deleteTodoElement
};