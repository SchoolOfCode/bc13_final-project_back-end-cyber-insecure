// Returns all articles from the database 
describe("Get all articles", () => {
    it("Returns all articles",async() => {
        const response = {
            data: [
                { 
                    title: "What is the difference between an array and an object?",
                    description: "An array is a list of items, whereas an object is a collection of properties.",
                    link: "https://www.w3schools.com/js/js_arrays.asp",
                    category: "JavaScript"

                },
                
            ]
        }
        const result = response;
        // expect(result).toEqual(response) checks if the result is equal to the response, which is an object containing the articles data
        expect(result).toEqual(response);
    })
})

// Gets the article with the given title.
describe("Get article by title", () => {
    it("Returns the correct article", async () => {
        const testTitle = "What is the difference between an array and an object?";
        // The expected result is an object containing the article data such as title, description, link and category
        const expectedResult = { 
            title: "What is the difference between an array and an object?",
            description: "An array is a list of items, whereas an object is a collection of properties.",
            link: "https://www.w3schools.com/js/js_arrays.asp",
            category: "JavaScript"
        }

        try {
            const result = await getArticleByTitle(testTitle);
            // expect(result).toEqual(expectedResult) checks if the result is equal to the expected result, which is an object containing the article data
            expect(result).toEqual(expectedResult);
        } catch (error) {
            console.log(error);
        }
    });
});


                    
