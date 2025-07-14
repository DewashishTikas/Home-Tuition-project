import express from "express";
import VacancyModel from "../models/vacancy.js";
import ContactModel from "../models/contact.js";
import { uploadFiles } from "../middlewares/uploadFile.js";
import contact from "../models/contact.js";

const router = express.Router();

router.get('/', (req, res) => {
    return res.send("Hello from User");
});

router.get('/vacancy', async (req, res) => {
    try {
        let vacancies = await VacancyModel.find({}).select("name");
        vacancies = vacancies.map((vacancy) => {
            return { id: vacancy.id, name: vacancy.name };
        });
        return res.status(200).json({ data: vacancies });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Failed to load all vacancies!!" });
    }
});

router.post('/contact', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const newContact = new ContactModel(data);
        await newContact.save();
        return res.status(200).json({ message: "We will contact you soon !!" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to save your contact details. Please try again" })
    }
});

router.post('/joinApp', uploadFiles(["Signature", "Photo", "Resume", "Attach Original Marksheet"]), async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        return res.status(200).json({message: "Your application is saved successfully!!"});
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({error: ""})
    }
});

export default router;