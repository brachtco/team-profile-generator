const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = this.officeNumber
        super(name, id, email);
    }

    printOfficeNumber() {
        console.log(`Office Number: ${this.officeNumber}`);
    }
}

module.exports = Manager;