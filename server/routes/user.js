import express from "express";
import VacancyModel from "../models/vacancy.js";
import ContactModel from "../models/contact.js";
import { uploadFiles } from "../middlewares/uploadFile.js";
import ApplyModel from "../models/apply.js";

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

router.post('/apply', uploadFiles(["Signature", "Photo", "Resume", "Attach Original Marksheet"]), async (req, res) => {
    try {
        const formData = req.body;
        const files = req.files;
        console.log(req.files);
        const data = {
            name: formData["Name"],
            fatherName: formData["Father's Name"],
            motherName: formData["Mother's Name"],
            DOB: formData["Date of Birth"],
            mobileNum: formData["Mobile Number"],
            mobileNumAlt: formData["Mobile Number (Alternative)"],
            emailId: formData["Email"],
            qualification: formData["Qualification"],
            category: formData["Category"],
            mpDomicile: formData["MP Domicile"],
            address: formData["Address"],
            referenceName: formData["Reference Name"],
            anyQuestion: formData["Any Question"],
            selectedVacancy: formData["Selected Vacancy"],
            signatureUrl: files["Signature"][0].path,
            photoUrl: files["Photo"][0].path,
            resumeUrl: files["Resume"][0].path,
            marksheet: files["Attach Original Marksheet"][0].path,
        }
        const newApplication = new ApplyModel(data);
        await newApplication.save();
        console.log(data);
        return res.status(200).json({ message: "Your application is saved successfully!!" });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "" })
    }
});

export default router;