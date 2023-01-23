import query from "../db/index.js";

async function getAllQuiz(user_email) {
    const allQuizzes = await query("SELECT * FROM quizzes WHERE user_email = $1", [user_email]);
    return allQuizzes.rows;
}

async function editQuiz(user_email, completed) {
    const editedApplication = await query("UPDATE quizzes SET completed = $2 WHERE user_email = $1 RETURNING *;", [user_email, completed]);
    return editedApplication.rows;
}

async function createQuizUser(user_email, completed) {
    const createdApplication = await query("INSERT INTO quizzes (user_email, completed) VALUES ($1, $2) RETURNING *;", [user_email, completed]);
    return createdApplication.rows; 
  }

export {
    getAllQuiz,
    editQuiz, 
    createQuizUser 
}