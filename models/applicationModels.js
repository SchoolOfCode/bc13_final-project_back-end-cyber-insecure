import query from "../db/index.js";

async function getAllApplications() {
    const allApplications = await query("SELECT * FROM jobApplications");
    return allApplications.rows;
  }

  async function getApplicationByID(user_email) {
    const specificKnowledge = await query("SELECT * FROM jobApplications WHERE id = $1", [user_email]);
    return specificKnowledge.rows;
  }

  async function getApplicationByEmail(user_email) {
    const specificKnowledge = await query("SELECT * FROM jobApplications WHERE user_email = $1", [user_email]);
    return specificKnowledge.rows;
  }
  
  async function editApplication(id, user_email, job_title, company, job_description, location, salary, job_link, notes, progress) {
    const editedApplication = await query("UPDATE jobApplications SET user_email = $2, job_title = $3, company = $4, job_description = $5, location = $6, salary = $7, job_link = $8, notes = $9, progress = $10 WHERE id = $1 RETURNING *;", [id, user_email, job_title, company, job_description, location, salary, job_link, notes, progress]);
    return editedApplication.rows;
  }

  async function createApplication(user_email, job_title, company, job_description, location, salary, job_link, notes) {
    const createdApplication = await query("INSERT INTO jobApplications (user_email, job_title, company, job_description, location, salary, job_link, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;", [user_email, job_title, company, job_description, location, salary, job_link, notes]);
    return createdApplication.rows; 
  }
  
  async function deleteApplication(id) {
    const deletedApplication = await query("DELETE FROM jobApplications WHERE id = $1 RETURNING *;", [id]);
    return deletedApplication.rows; 
  }
  
  export {
    getAllApplications,
    editApplication,
    getApplicationByID,
    getApplicationByEmail,
    createApplication,
    deleteApplication
  }
