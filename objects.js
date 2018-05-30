// ES5 prototypal inheritance practice

function Person(firstName, lastName) {
  this.firstName = firstName,
  this.lastName = lastName
}

Person.prototype.getFullName = function() {
  console.log(`${this.firstName} ${this.lastName}`);
}

const jason = new Person('Jason', 'Welsh');

console.log(jason.getFullName());
// es6 object classes
