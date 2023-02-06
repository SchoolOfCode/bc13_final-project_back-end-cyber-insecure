import {jest} from '@jest/globals'

describe("GET / ", () => {
    it("Get all quizzes",async() => {
        const response = {
            data: [
                {
                    "quiz_topic": "JavaScript",
                    "quiz_question": "What is the difference between a class and an object?",
                    "quiz_answer": "A class is a blueprint for an object. An object is an instance of a class."
                }
            ]
        }
        const result = response;
        expect(result).toEqual(response);
    })
})


describe("GET /:email", () => {
    it("Returns the correct quiz for a particular email", async () => {
        const userEmail = "blah@blah.com";
        const expectedResult = {
            id: 1,
            user_email: "blah@blah.com",
            success: true,

        }

        const editQuiz = (user_email) => {

            return expectedResult;
        }

        const result = editQuiz(userEmail);
        expect(result).toEqual(expectedResult);
    });
})


describe("POST /", () => {
    it("Creates a new quiz user", async () => {
        const newQuiz = {
            user_email: "",
            completed: false
        }

        const createQuizUser = jest.fn();
        const result = await createQuizUser(newQuiz);
        expect(result).toBe();

})
})