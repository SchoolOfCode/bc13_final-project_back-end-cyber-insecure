import router from './routes/applicationRoutes.js'
import knowledgeRouter from './routes/knowledgeBankRoutes.js'
import uploadRouter from './routes/uploads.js';
import express from "express";
import morgan from "morgan";
import cors from 'cors'

const PORT = process.env.PORT;

const app = express();

app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static('public'));

app.use("/api/jobApplications", router);
app.use("/api/knowledgeBank", knowledgeRouter);
app.use("/api/files", uploadRouter);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});

export default app;