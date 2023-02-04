const Engineer = require('./lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        const intern = new Intern('David', 0902, 'david@theteam.com');

        describe('school', () => {
            it('should add the school to the Intern object' () => {
                const intern = new Intern('David', 0902, 'david@theteam.com', 'Stanford');

                expect()intern.toEqual(Stanford);
            })
        })
    })
})