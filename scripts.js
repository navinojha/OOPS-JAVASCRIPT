"use strict";

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
