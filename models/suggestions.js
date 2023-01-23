import query from '../db/index.js';

async function postSuggestions(cv_link, interview_question_type, interview_question, interview_answer, knowledge_topic, knowledge_concept, github_link, portfolio_link, quiz_topic, quiz_question) {
  const suggestions = await query('INSERT INTO suggestions (cv_link, interview_question_type, interview_question, interview_answer, knowledge_topic, knowledge_concept, github_link, portfolio_link, quiz_topic, quiz_question) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;', [cv_link, interview_question_type, interview_question, interview_answer, knowledge_topic, knowledge_concept, github_link, portfolio_link, quiz_topic, quiz_question]);
  return suggestions.rows;
}

export { postSuggestions };
