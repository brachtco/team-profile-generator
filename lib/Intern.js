
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
    this.school = school

    super(name, id, email)
}

printSchool() {
    return this.school;
}

getRole() {
    return 'Intern';
}
}

module.exports = Intern;