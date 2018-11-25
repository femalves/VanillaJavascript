let val;

val = document;

val = document.all;
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

//not recommended
val = document.forms;
val = document.forms[0].id;

val = document.links;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;

val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
//Collections must be converted to arrays so we can use the forEach method
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script);
});

console.log(val);

// document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);

// Change styling
document.getElementById('task-title').style.background = 'black';

// Change color
document.getElementById('task-title').style.color = 'black';

// Change padding
document.getElementById('task-title').style.padding = '5px';

//Change content
document.getElementById('task-title').textContent = 'Task list';

document.getElementById('task-title').innerText = 'My tasks';

document.getElementById('task-title').innerHTML = '<span style="color:red"> Task list</span>';

//document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));//grabs the first one


document.querySelector('li').style.color = 'red';

document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'yellow';

document.querySelector('li:nth-child(4)').textContent = 'Hello there';

document.querySelector('li:nth-child(odd)').textContent = 'First odd';


// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');

console.log(items);

console.log(items[0]);

items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// document.getElementsByTagName
lis = document.getElementsByTagName('li');
console.log(lis);
val[0].style.color = 'red';

Convert HTML Collection into array

val = Array.from(lis);
console.log(val)
val.reverse();


val.forEach(function(li) {
    console.log(li);
    li.textContent = `${index}: Hello`;
});

// document.querySelectorAll(); Node list

val = document.querySelectorAll('ul.collection.li.collection-item');


val.forEach(function(item) {
    console.log(item);
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li,index){
    li.style.background = '#ccc';
})

for(let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';
}

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

//Get child node
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;


// 1 - Element;
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

//Get children element nodes
val = list.children;

val = list.children[1];
val = list.children[1].textContent = 'Hello';

// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// First Child
val = list.firstChild;
val = list.firstElementChild;

// Element count
val = list.childElementCount;

//Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

//Get previous sibling
val = listItem.previousSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Create element
const li = document.createElement('li');
li.className = 'collection-item';
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New item');

// Create text node and append
li.appendChild(document.createTextNode('Hello world'));

// Create new link element
const link = document.createElement('a');

// Add classes
link.className = 'delete-item secondary-content';

// Add icon html 
link.innerHTLML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);
console.log(val)

//Replace element

const newHeading = document.createElement('h2');

//Add id

newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();

list.removeChild(lis[3]);

// Classes and attributes
const firstLi = document.querySelector('li:first-child');

console.log(firstLi);


const link = firstLi.children[0];

let val;

//Classes 

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;


console.log(newHeading);


document.querySelector('.clear-tasks').addEventListener('click', function(e) {
    console.log('Hello world');
    //e.preventDefault();
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    console.log('Clicked');
    let val;
    val = e;
    

    //Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    e.target.innerText = 'Hello';

    // Event type
    val = e.type;

    //Timestamp
    val = e.timeStamp;

    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;


    console.log(val);
}

const clearBtn = document.querySelector('.clear-tasks');

const card = document.querySelector('.card');

const heading = document.querySelector('h5');

//Click
clearBtn.addEventListener('click', runEvent);

// DoubleClick
clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
clearBtn.addEventListener('mousedown', runEvent);

//Mouseup
clearBtn.addEventListener('mouseup', runEvent);

//Mouseenter
card.addEventListener('mouseenter', runEvent);

//Mouseleave
card.addEventListener('mouseleave', runEvent);

//Mouseover
card.addEventListener('mouseover', runEvent);

//Mouseout
card.addEventListener('mouseout', runEvent);

//Mousemove
card.addEventListener('mousemove', runEvent);

//Event handler
function runEvent(e) {
    console.log(`Event type: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`;
}


const form = document.querySelector('form');

const taskInpt = document.getElementById('task');

const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

// keydown
taskInput.addEventListener('keydown', runEvent);

// keyup
taskInput.addEventListener('keyup', runEvent);

// keypress
taskInput.addEventListener('keypress', runEvent);

// focus
taskInput.addEventListener('focus', runEvent);

// blur
taskInput.addEventListener('blur', runEvent);

// Cut
taskInput.addEventListener('cut', runEvent);

// Paste
taskInput.addEventListener('paste', runEvent);

// Input
taskInput.addEventListener('input', runEvent);

// Change event - used on a select list and disable materialize
const select = document.querySelector('select');
select.addEventListener('change', runEvent);


form.addEventListener('submit', runEvent);
function runEvent(e){
    
    
    console.log(`Event type: ${e.type}`);
    // Grab text that is being typed
    console.log(e.target.value);
    // heading.innerText = e.target.value;
    // Get input value
    console.log(taskInput.value);
    e.preventDefault();
}

//Event bubbling - Parent will fire off if we click on child
document.querySelector('.card-title').addEventListener('click', function() {
    console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', function() {
    console.log('card content');
});

document.querySelector('.card').addEventListener('click', function() {
    console.log('card');
});

document.querySelector('.col').addEventListener('click', function() {
    console.log('col');
});




// Event delegation - Event listening on parent and it will go down

//only works with first item
const delItem = document.querySelector('.delete-item');
delItem.addEventListener('click', deleteItem);
function deleteItem(){
    console.log('delete item');
}

document.body.addEventListener('click', deleteItem);

function deleteItem(e){

    // if(e.target.parentElement.className === 'delete-item secondary-content'){ 
    //     console.log('delete item');
    // }

    if(e.target.parentElement.className.contains('delete-item')){ 
        e.target.parentElement.parentElement.remove();
        // console.log('delete item');
    }
}

//Local storage
//has to be a string to be saved

//set local storage item
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');
//set session storage item
sessionStorage.setItem('name', 'Beth');

//remove from storage
localStorage.removeItem('name');

//get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

//clear local storage
localStorage.clear()
console.log(name);

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
    console.log(task);
});