const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = this.officeNumber
        super(name, id, email);
    }

    printOfficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;