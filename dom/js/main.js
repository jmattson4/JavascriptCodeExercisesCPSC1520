/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

// required vars
var todos = document.querySelector('.todo-list');
var todoCount = 0;
var dn = '\u21e9';
var up = '\u21e7'

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', function(evt) {


    var div,
        checkbox,
        label,
        labelText,
        todoText;

    todoText = evt.target.elements['todo-item'].value;

    // adding a todo regardless, so might as well increment now...
    todoCount += 1;

    if (todoText === '') {
        todoText = 'Todo ' + (todoCount);
    }

    // create required elements
    div = document.createElement('div');
    checkbox = document.createElement('input');
    label = document.createElement('label');
    labelText = document.createTextNode(todoText);
    upArrow = document.createElement('span');
    upText = document.createTextNode(up);
    dnArrow = document.createElement('span');
    dnText = document.createTextNode(dn);

    // set appropriate attributes
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'todo-' + todoCount);
    label.setAttribute('for', 'todo-' + todoCount);
    label.setAttribute('contenteditable', '');
    upArrow.setAttribute('class', 'arrow up');
    dnArrow.setAttribute('class', 'arrow dn');


    // build document fragment
    label.appendChild(labelText);
    upArrow.appendChild(upText);
    dnArrow.appendChild(dnText)
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(upArrow);
    div.appendChild(dnArrow);

    // add the document fragment to the document for rendering
    todos.appendChild(div);

    // clear the form
    evt.target.reset();

    evt.preventDefault();
});

document.querySelector('.todo-list').addEventListener('click', event => {
    let targetTodo = event.target.parentNode;
    let todoList = targetTodo.parentNode;
    let siblingTodo;

    if (event.target.classList.contains('arrow')) {
        if (event.target.classList.contains('dn')) {
            siblingTodo = targetTodo.nextElementSibling;
            if (siblingTodo === null) {
                firstElement = todoList.firstElementChild;
                todoList.insertBefore(targetTodo, firstElement);
            } else {
                todoList.insertBefore(siblingTodo, targetTodo);
            }
        } else if (event.target.classList.contains('up')) {
            siblingTodo = targetTodo.previousElementSibling;
            todoList.insertBefore(targetTodo, siblingTodo);
        }
    }
})