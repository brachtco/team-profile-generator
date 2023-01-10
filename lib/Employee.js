class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Email: ${this.email}`);
    }

    getRole() {
        console.log("Employee");
    }
}

module.exports = Employee;