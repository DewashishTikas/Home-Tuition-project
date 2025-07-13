import jwt from "jsonwebtoken";

export const verifyAdminToken = (req, res, next) => {
    try {
        const { sessionToken } = req.cookies;
        const { username, password } = jwt.verify(sessionToken, process.env.JWT_PRIVATE_KEY);
        console.log(req.path);
        if((username == process.env.ADMIN_USERNAME) && (password == process.env.ADMIN_PASSWORD) && (req.path != "/login")){
            return next();
        }
        return res.status(400).json({message: "Unauthorized Request !!"});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({error: "some thing went wrong. please try agian later !!"});
    }
}