import express from "express";
import jwt from "jsonwebtoken";
import VacancyModel from "../models/vacancy.js";

const router = express.Router({ mergeParams: true });

router.get('/', (req, res)=>{
    res.status(200);
});

router.post('/login', (req, res)=>{
    try {
        const { adminUserName, adminPass } = req.body;
        if((adminUserName == process.env.ADMIN_USERNAME) && (adminPass == process.env.ADMIN_PASSWORD)){
            const payload = {username: adminUserName, password: adminPass, role: "ADMIN"};
            const sessionToken = jwt.sign(payload, process.env.JWT_PRIVATE_KEY);
            res.setHeader("Set-Cookie", `sessionToken=${sessionToken};HttpOnly;Domain=${process.env.SERVER_DOMAIN};SameSite=None;Secure;expires=` + Date.toString(Date.now() + 60*60*60*24));
            return res.status(200).json({message: 'ok'});
        }
        return res.status(400).json({error: "invalid cridentials !!"});
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({error: "try agian later !!"});
    }
});

router.post('/vacancy', async (req, res)=>{
    try{
        const { post } = req.body;
        console.log(post);
        const newVacany = new VacancyModel({ name: post });
        await newVacany.save();
        return res.status(200).json({message: "Vacancy is added successfully!!"});
    }
    catch (err){
        console.log(err);
        return res.status(500).json({error: "Failed to save vacancy, please try it again later!!"});
    }
});

router.delete('/vacancy', async (req, res)=>{
    try{
        console.log(req.body);
        const { vacancyId } = req.body;
        if(vacancyId){
            await VacancyModel.deleteOne({ _id: vacancyId });
            return res.status(200).json({message: "Post is deleted successfully!!"});
        }
        else {
            return res.status(400).json({error: "Post ID is missing!!"});
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({error: "Failed to delete the post. Please try again later!!"});
    }
})

export default router;