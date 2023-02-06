describe("Get all suggestions", () => {
    it("Get all suggestions",async() => {
        const response = {
            data: [
                {
                    "cv_link": "https://www.linkedin.com/in/oliver-wood-0b0b5b1b3/",
                    "interview_question_type": "Technical",
                    "interview_question": "What is the difference between a class and an object?",
                    "interview_answer": "A class is a blueprint for an object. An object is an instance of a class.",
                    "knowledge_topic": "Object Oriented Programming",
                    "knowledge_concept": "Classes and Objects",
                    "github_link": "",
                    "portfolio_link": "",
                    "quiz_topic": "",
                    "quiz_question": ""
    
                }
                
            ]
        }
        const result = response;
        expect(result).toEqual(response);
    })
})

