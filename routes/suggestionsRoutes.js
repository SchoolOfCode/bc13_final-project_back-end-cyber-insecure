import express from 'express';
const suggestionsRouter = express.Router();

import { postSuggestions } from '../models/suggestions.js';

suggestionsRouter.post('/', async (req, res) => {
  const postedSuggestion = await postSuggestions(req.body.cv_link, req.body.interview_question_type, req.body.interview_question, req.body.interview_answer, req.body.knowledge_topic, req.body.knowledge_concept, req.body.github_link, req.body.portfolio_link, req.body.quiz_topic, req.body.quiz_question);
  return res.json({ success: true, payload: postedSuggestion });
});

export default suggestionsRouter;
