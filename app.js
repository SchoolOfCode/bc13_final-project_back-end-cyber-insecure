import router from './routes/applicationRoutes.js';
import knowledgeRouter from './routes/knowledgeBankRoutes.js';
import quizRouter from './routes/quizRoutes.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import suggestionsRouter from './routes/suggestionsRoutes.js';

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/jobApplications', router);
app.use('/api/knowledgeBank', knowledgeRouter);
app.use('/api/quizzes', quizRouter);
app.use('/api/suggestions', suggestionsRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
