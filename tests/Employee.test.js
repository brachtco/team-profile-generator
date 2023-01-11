const { describe } = require('node:test');
const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an employee object with name, id and email", () => {
            const employee = new Employee('Rebecca', 0439, 'rebecca@theteam.com');

            expect(employee).toEqual(name, id, email);
        })
    })

    describe("addName", () => {
        it("should add the name to the employee object", () => {
            const employee = new Employee('Rebecca', 0439, 'rebecca@theteam.com');

            expect(employee).toEqual('Rebecca');
        })
    })

    describe("addId", () => {
        it("should add the id to the employee object", () => {
            const employee = new Employee('Rebecca', 0439, 'rebecca@theteam.com');

            expect(employee).toEqual(0439);
        })
    })

    describe("addEmail", () => {
        it("should add the email address to the employee object", () => {
            const employee = new Employee('Rebecca', 0439, 'rebecca@theteam.com');

            expect(employee).toEqual('rebecca@theteam.com');
        })
    })
});