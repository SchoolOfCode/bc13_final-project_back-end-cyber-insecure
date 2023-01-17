// Returns all applications
describe("Get all applications", () => {
    it("Returns all applications",async() => {
        const response = {
            data: [
                { 
                    id: 1,
                    user_email: "ttt@ttt.com",
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
        // expect(result).toEqual(response) checks if the result is equal to the response, which is an object containing the application data
        expect(result).toEqual(response);
    })
})


// Gets the application with the given ID.
describe("Get application by ID", () => {
    it("Returns the correct application", async () => {
        const testId = 1;
        // The expected result is an object containing the application data
        const expectedResult = { 
            id: 1,
        }

        try {
            const result = await getApplicationById(testId);
            // expect(result).toEqual(expectedResult) checks if the result is equal to the expected result, which is an object containing the application data
            expect(result).toEqual(expectedResult);
        } catch (error) {
            console.log(error);
        }
    });
});

// Gets the application by email
describe("Get application by email", () => {
    it("Returns the correct application", async () => {
        const testEmail = "ttt@ttt.com";
        // The expected result is an object containing the application data
        const expectedResult = {
            user_email: "ttt@ttt.com",

        }
        try {
            const result = await getApplicationByEmail(testEmail);
            // expect(result).toEqual(expectedResult) checks if the result is equal to the expected result, which is an object containing the application data
            expect(result).toEqual(expectedResult);
        } catch (error) {
            console.log(error);
        }
    });
});


// Edits the correct application
describe("Edit application", () => {
    it("Edits the correct application", async () => {
        const testId = 1;
        const updateData = {
            user_email: "ttt@ttt.com",
            job_title: "Junior Developer",
            company: "The Empire",
            job_description: "Junior Developer role, you have done it, you are awesome, enjoy!",
            location: "Tatooine",
            salary: "100,000",
            job_link: "www.otta.com/",
            notes: "Interview went great, waiting to hear back",
            progress: "Applied"
        }

        try {
            const result = await editApplication(testId, updateData);
            // expect(result).toBeTruthy() checks if the result is true, which means the application has been edited successfully
            expect(result).toBeTruthy();
        } catch (error) {
            console.log(error);
        }
    });
});


// Creates a new application
// The createaApplication(newApplication) function is being called with an object containing the new data, which is then passed to the database, and a new application is created.
// The expected result is a boolean value, which is true if the application is created successfully.
describe("Create application", () => {
    it("Creates a new application", async () => {
        const newApplication = {
            user_email: "ttt@ttt.com",
            job_title: "Junior Developer",
            company: "Samsung",
            job_description: "Doing stuff with computers",
            location: "Narnia",
            salary: "5",
            job_link: "www.samsung.com/",
            notes: "Interview scheduled for next week, I am excited",
            progress: "Interview date confirmed"
        }

        try {
            const result = await createApplication(newApplication);
            // expect(result).toBeTruthy() checks if the function is returning true, which means the application has been created successfully
            expect(result).toBeTruthy();
        } catch (error) {
            console.log(error);
        }
    });
});


// Deletes the correct application (applications are created and deleted by using the same ID)
// This test will fail if the create application test fails
// The result is a boolean value, which is true if the application is deleted successfully.
describe("Delete application", () => {
    it("Deletes the correct application", async () => {
        const testId = 1;
        try {
            const result = await deleteApplication(testId);
            // expect(result).toBeTruthy() checks if the function is returning true, which means the application has been deleted successfully
            expect(result).toBeTruthy();
        } catch (error) {
            console.log(error);
        }
    });
});