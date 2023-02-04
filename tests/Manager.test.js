const Engineer = require('./lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        const manager = new Manager('Receca', 0439, 'rebecca@theteam.com');

        describe('school', () => {
            it('should add the office numbrer to the Manager object' () => {
                const manager = new Manager('Rebecca', 0439, 'rebecca@theteam.com', 'officeNumber');

                expect()manager.toEqual(12);
            })
        })
    })
})