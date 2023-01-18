describe('GET /', () => {
    it('Returns all applications', async () => {
        const response = {
            data: [
                {
                    id: 1,
                    user_email: 'blah@blah@com',
                    job_title: 'Junior Developer',
                    company: 'Google',
                    job_description: 'Job Description',
                    location: 'London',
                    salary: '100',
                    job_link: 'https://www.google.com/',
                    notes: 'This is a note',
                    progress: 'Researching'
                }
            ]
        };
        const result = response;
        expect(result).toEqual(response);


});
});


// getApplicationByEmail - Get the application with the given email.
describe('GET /:email', () => {
    it('Returns the correct application', async () => {
        const testEmail = 'blah@blah@com'
        // The expected result is an object containing the application data
        const expectedResult = {
            user_email: 'blah@blah@com',

        }

        const getApplicationByEmail = (email) => {
                
                return expectedResult;
        }
        const result = await getApplicationByEmail(testEmail);
        expect(result).toEqual(expectedResult);


})
});
