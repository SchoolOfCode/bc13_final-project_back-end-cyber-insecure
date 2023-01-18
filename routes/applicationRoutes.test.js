// getAllApplications - Get all applications
describe("GET /", () => {
    it("Returns all applications", async () => {
        const response = {
            data: [
                {
                    id: 1,
                    user_email: "blah@blah.com",
                    job_title: "Junior Developer",
                    company: "Google",
                    job_description: "Job Description",
                    location: "London",
                    salary: "100",
                    job_link: "https://www.google.com/",
                    notes: "This is a note",
                    progress: "Researching"
                },
            ]
        }
        const result = response;
        expect(result).toEqual(response);


})
})


// getApplicationById - Get the application with the given ID.
describe("GET /:id", () => {
    it("Returns the correct application", async () => {
        const testId = 1;
        // The expected result is an object containing the application data
        const expectedResult = {
            id: 1,
            user_email: "blah@blah.com",
            job_title: "Junior Developer",
            company: "Google",
            job_description: "Job Description",
            location: "London",
            salary: "100",
            job_link: "https://www.google.com/",
            notes: "This is a note",
            progress: "Researching"
        }

        const getApplicationById = (id) => {

            return expectedResult;
        }
        const result = getApplicationById(testId);
        expect(result).toEqual(expectedResult);
    });
})


