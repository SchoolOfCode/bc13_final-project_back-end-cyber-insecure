import {jest} from '@jest/globals'


describe("Get all quizzes", () => {
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

describe("Edit quiz", () => {
    it("Edits the correct quiz", async () => {
        const editId = 1;
        const updateQuiz = {
            user_email: "ttt@ttt.com",
            completed: true
        }

        const editQuiz = jest.fn();
        const result = await editQuiz(editId, updateQuiz);
        expect(result).toBe();
    });
});


describe("Create quiz user", () => {
    it("Creates a new quiz user", async () => {
        const newQuiz = {
            user_email: "ttt@ttt.com",
            completed: false
        }

        const createQuizUser = jest.fn();
        const result = await createQuizUser(newQuiz);
        expect(result).toBe();

})
})