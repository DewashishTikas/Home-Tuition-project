import express from "express";

const router = express.Router({ mergeParams: true });

router.get('/', (req, res)=>{
    res.status(200).send("Hello from the Admin!!");
});

router.post('/login', (req, res)=>{
    try {
        const { adminUserName, adminPass } = req.body;
        console.log(req.cookies);
        if((adminUserName == process.env.ADMIN_USERNAME) && (adminPass == process.env.ADMIN_PASSWORD)){
            res.setHeader("Set-Cookie", "origin=server;HttpOnly;Domain=localhost;SameSite=None;Secure;");
            return res.status(200).send({message: 'ok'});
        }
        return res.status(400).send({error: "invalid cridentials !!"});
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({error: "try agian later !!"});
    }
});

export default router;