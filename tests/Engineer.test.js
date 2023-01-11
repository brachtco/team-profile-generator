const Engineer = require('./lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        const engineer = new Engineer('Jack', 0799, 'jack@theteam.com');

        describe('addGithub', () => {
            it('should add the github username to the Engineer object' () => {
                const engineer = new Engineer('Jack', 0799, 'jack@theteam.com');

                expect(engineer).toEqual(jacko);
            })
        })
    })
})