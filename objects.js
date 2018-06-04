// es6 object classes

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Welcome, ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  changesName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const jason = new Person('Jason', 'Welsh', '08-25-1980');

// Customer subclass

class Customer extends Person {
  constructor(firstName, lastName, dob, phone, membership) {
    super(firstName, lastName, dob);

    this.phone = phone;
    this.membership = membership;
  }
}

const zav = new Customer('Zav', 'Xargo', '04-21-1975','555-5555', 'Standard');
console.log(zav);
