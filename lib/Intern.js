
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
    this.school = school

    super(name, id, email)
}

printSchool() {
    console.log(`School: ${this.school}`);
}

getRole() {
    console.log("Intern");
}
}

module.exports = Intern;