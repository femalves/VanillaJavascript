const sayHello = function() {
    console.log('Hello');
}

const sayHello1 = () => {
    console.log('Hello1');
}

const sayHello2 = () => console.log('Hello2');

// Return object
const sayHello3 = () => ({ msg: 'Hello3'});

// Single param
const sayHello4 = name => console.log(`Hello ${name}`);

// Multiple params
const sayHello5 = (firsName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

const users = ['Nathan', 'John', 'William'];


const nameLengths = users.map((name) => {
    return name.length;
});

const nameLengths1 = users.map(name => name.length);
