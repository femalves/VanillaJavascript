//OOP ES5 and ES6
// Person constructor
function Person (name, birthDate) {
    this.name = name;
    this.birthday = new Date(birthDate);

    this.calculateAge = function() {
        const dif = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// console.log(this); // pertains to the window object

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());


// Strings
const name1 = 'Jeff';
const name2 = new String('Jeff'); //can be used in functions, objects, arrays, regular expressions...

// name2.foo = 'bar';

console.log(typeof name1); //string
console.log(typeof name2); //object

if(name2 === 'Jeff'){
    console.log('YES');
} else {
    console.log('NO');
}// NO 


// Function 
const getSum1 = function(x, y) {
    return x+y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

//Object.prototype
//__proto___
function Person (firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthDate);

    this.calculateAge = function() {
        const dif = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Gets married 
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;

}

// Prototypal inheritance

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
    return `Hello there, ${this.firstName} ${this.lastName}!`;
}

const person1 = new Person('John', 'Doe');

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

Customer.prototype.greeting = function() {
    return `Hello there, ${this.firstName} ${this.lastName}! Welcome to the company.`;
}

// Object.create
Cconst personPrototypes = {
    greeting: function() {
        return `Hello there, ${this.firstName} ${this.lastName}!`;
    },

    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
    firstName: {value: 'Brad'}, 
    lastName: {value: 'Traversy'}, 
    age: {value: 36}
});

//__________________________________________________//

//ES6

class Person {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = new Date(birthDate
            );
    }

    greeting() {
        return `Hello there, ${this.firstName} ${this.lastName}!`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried (newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x,y) {
        return x+y;
    }


}

const mary = new Person('Mary', 'Williams');
console.log(mary);
Person.addNumbers(1,2);

// Sub classes
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName); 
        this.phone = phone;
        this.membership = membership;

    }

    static getMembershipCost() {
        return 500;  
    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');