"use strict";

// 1) Using Constructor function for Prototypal Inheritance

const Person = function (firstName, birthYear) {
	// console.log(this);  Person {}
	//Instance Properties
	this.firstName = firstName;
	this.birthYear = birthYear;

	// Instance Methods (Never create this in constructor function as it can performance issues)
	// this.calcAge = function () {
	// 	console.log(2037 - this.birthYear);
	// };
};

const navin = new Person("Navin", 1997); // calling a constructor function
const raj = new Person("Raj", 1998);
console.log(navin);
console.log(navin instanceof Person);

/* When we call a constructor function four things happens behind the scene

1) New Empty Person {} Object is created
2) function is called and this = Person {}
3) Person {} is linked to the Prototype
4) Function automatically return the Person Object.
*/

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
	console.log(2037 - this.birthYear);
};

navin.calcAge();
raj.calcAge();

console.log(navin.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(navin));

// prototype == Prototype of Linked Objects like navin, raj

Person.prototype.species = "Homo Sapiens";
console.log(navin.species);
console.log(navin.hasOwnProperty("species")); // false
console.log(navin.hasOwnProperty("firstName")); // true

// Prototypal Inheritance
console.log(navin.__proto__); // Person.prototype
console.log(navin.__proto__.__proto__); // Object.prototype (Top of prototype chain)
console.log(navin.__proto__.__proto__.__proto__); // null

// Static methods in Javascript

Person.hey = function () {
	console.log(`Hey there`);
};

Person.hey();

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
};

Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 20);
const mercedes = new Car("Mercedes", 35);

console.log(bmw, mercedes);

bmw.accelerate();
mercedes.accelerate();
bmw.accelerate();

bmw.brake();
mercedes.brake();

// 2) ES6 Classes for Prototypal Inheritance

class PersonCl {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;
	}

	// Methods will be added to .prototype property automatically
	//(Instance methods)
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	// Trying to set a property that already exists
	set fullName(name) {
		if (name.includes(" ")) this._fullName = name;
		// underscore is added for name resolution because of name conflicts we get an error.
		else console.log(`${name} is not a full name`);
	}

	get fullName() {
		return this._fullName;
	}

	// Static methods
	static hey() {
		console.log("Hey there");
	}
}

const jessica = new PersonCl("Jessica Davis", 1997); // when we use new keyword constructor function is automatically invoked.
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);
console.log(jessica.fullName);
Person.hey();

// Note :

// 1) Classes are not hoisted
// 2) Class are the first class citizens
// 3) Classes are executed in strict mode.

// Getter and Setters methods on JavaScript Object literal

const account = {
	owner: "Navin",
	movements: [300, 50, 200, 75, 78],

	get latest() {
		return this.movements.slice(-1).pop();
	},

	set latest(mov) {
		this.movements.push(mov);
	},
};

console.log(account.latest);
account.latest = 45;

console.log(account.movements);

// 3) Prototypal Inheritance using Object.create method

const Personproto = {
	calcAge() {
		console.log(2037 - this.birthYear);
	},

	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	},
};

const steven = Object.create(Personproto);
steven.init("Steven", 1997);
steven.calcAge();

console.log(steven.__proto__ === Personproto);
