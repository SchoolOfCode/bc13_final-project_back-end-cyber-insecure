import express from "express";
const router = express.Router();

import {
    getAllApplications,
    editApplication,
    createApplication,
    deleteApplication, 
    getApplicationByEmail,
    getApplicationByID
} from '../models/applicationModels.js'

router.get("/", async (req, res) => {
    const allApplications = await getAllApplications();
    return res.json({ success: true, payload: allApplications });
})

router.get("/:user_email", async (req, res) => {
    const editedApplication = await getApplicationByEmail(req.params.user_email);
    return res.json({ success: true, payload: editedApplication });
})

router.get("/:id", async (req, res) => {
    const editedApplication = await getApplicationByID(req.params.id);
    return res.json({ success: true, payload: editedApplication });
})

router.post("/", async (req, res) => {
    const createdApplication = await createApplication(req.body.user_email, req.body.job_title, req.body.company, req.body.job_description, req.body.location, req.body.salary, req.body.job_link, req.body.notes);
    return res.json({ success: true, payload: createdApplication }); 
})

router.patch("/:id", async (req, res) => {
    const appById = await getApplicationByID(req.params.id);
    let data = await appById 
    if (req.body.user_email === undefined) {
        req.body.user_email = data[0].user_email
    } if (req.body.job_title === undefined) {
        req.body.job_title = data[0].job_title
    } if (req.body.company === undefined) {
        req.body.company = data[0].company
    } if (req.body.job_description === undefined) {
        req.body.job_description = data[0].job_description 
    } if (req.body.location === undefined) {
        req.body.location = data[0].location
    } if (req.body.salary === undefined) {
        req.body.salary = data[0].salary
    } if (req.body.job_link === undefined) {
        req.body.job_link = data[0].job_link
    } if (req.body.notes === undefined) {
        req.body.notes = data[0].notes
    } if (req.body.progress === undefined) {
        req.body.progress = data[0].progress  
    } 
    const editedApplication = await editApplication(req.params.id, req.body.user_email, req.body.job_title, req.body.company, req.body.job_description, req.body.location, req.body.salary, req.body.job_link, req.body.notes, req.body.progress);
    return res.json({ success: true, payload: editedApplication });
})

router.delete("/:id", async (req, res) => {
    const deletedApplication = await deleteApplication(req.params.id);
    return res.json({ success: true, payload: deletedApplication });
})

export default router;