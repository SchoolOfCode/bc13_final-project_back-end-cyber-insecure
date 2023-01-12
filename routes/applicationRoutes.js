import express from "express";
const router = express.Router();

import {
    getAllApplications,
    editApplication,
    editApplicationProgress,
    createApplication,
    deleteApplication
} from '../models/applicationModels.js'

router.get("/", async (req, res) => {
    const allApplications = await getAllApplications();
    return res.json({ success: true, payload: allApplications });
})

router.post("/", async (req, res) => {
    if (req.body.progress === null) {
        const createdApplication = await createApplication(req.body.user_email, req.body.job_title, req.body.company, req.body.job_description, req.body.location, req.body.salary, req.body.job_link, req.body.notes);
        return res.json({ success: true, payload: createdApplication });
    } else {
        const editedApplication = await editApplication(req.params.id, req.body.user_email, req.body.job_title, req.body.company, req.body.job_description, req.body.location, req.body.salary, req.body.job_link, req.body.notes);
        return res.json({ success: true, payload: editedApplication });
    }
}) 

// router.patch("/:id", async (req, res) => {
//     const editedApplication = await editApplication(req.params.id, req.body.user_email, req.body.job_title, req.body.company, req.body.job_description, req.body.location, req.body.salary, req.body.job_link, req.body.notes);
//     return res.json({ success: true, payload: editedApplication });
// })

router.patch("/:id", async (req, res) => {
    const editedProgress = await editApplicationProgress(req.params.id, req.body.progress);
    return res.json({ success: true, payload: editedProgress });
})

router.delete("/:id", async (req, res) => {
    const deletedApplication = await deleteApplication(req.params.id);
    return res.json({ success: true, payload: deletedApplication });
})

export default router;