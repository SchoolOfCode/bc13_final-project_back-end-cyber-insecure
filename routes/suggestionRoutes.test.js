import { jest } from '@jest/globals'


describe("POST /", () => {
    it("Posts a new suggestion", async () => {
        const newSuggestion = {
            cv_link: "",
            interview_question_type: "",
            interview_question: "",
            interview_answer: "",
            knowledge_topic: "",
            knowledge_concept: "",
            github_link: "",
            portfolio_link: "",
            quiz_topic: "",
            quiz_question: ""
        }

        const postSuggestions = jest.fn();
        const result = await postSuggestions(newSuggestion);
        expect(result).toBe();
    });
});


//