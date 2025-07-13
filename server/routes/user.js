import express from "express";
import VacancyModel from "../models/vacancy.js";
import vacancy from "../models/vacancy.js";

const router = express.Router();

router.get('/', (req, res)=>{
    return res.send("Hello from User");
});

router.get('/vacancy', async (req, res)=>{
    try {
        let vacancies = await VacancyModel.find({}).select("name");
        vacancies = vacancies.map((vacancy)=>{
            return { id: vacancy.id, name: vacancy.name};
        });
        return res.status(200).json({ data: vacancies });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Failed to load all vacancies!!"});
    }
});

export default router;