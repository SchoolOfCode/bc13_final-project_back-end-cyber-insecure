import express from "express";
const quizRouter = express.Router();

import {
    getAllQuiz,
    editQuiz, 
    createQuizUser
} from '../models/quizModels.js'

quizRouter.get("/:user_email", async (req, res) => {
    const allQuiz = await getAllQuiz(req.params.user_email);
    return res.json({ success: true, payload: allQuiz });
})

quizRouter.patch("/:user_email", async (req, res) => { 
    const editedQuiz = await editQuiz(req.params.user_email, req.body.completed);
    return res.json({ success: true, payload: editedQuiz });
})

quizRouter.post("/", async (req, res) => {
    const createdQuizUser = await createQuizUser(req.body.user_email, req.body.completed);
    return res.json({ success: true, payload: createdQuizUser }); 
})


export default quizRouter;