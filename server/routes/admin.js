import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router({ mergeParams: true });

router.get('/', (req, res)=>{
    res.status(200).send("Hello from the Admin!!");
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

export default router;