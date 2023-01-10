const Employee = require("./Employee.js");

class Engineer extends Employee  {
    constructor(name, id, email, github) {
        this.github = github;

        super(name, id, email)
    }

    printGithub()  {
        console.log(`GitHub: ${this.github}`);
    }

    getRole() {
        console.log("Engineer");
    }
}

module.exports = Engineer;