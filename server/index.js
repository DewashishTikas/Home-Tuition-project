import express from "express";
import 'dotenv/config';
import cors from "cors";
import cookieParser from "cookie-parser";
import adminRouter from "./routes/admin.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({ 
    origin: process.env.CLIENT_URL.split(" "),
    credentials: true,
}));
app.use(cookieParser());
console.log(process.env.CLIENT_URL.split(" "));
app.use(express.json());
app.use('/admin', adminRouter);

app.get('/', (req, res)=>{
    res.send("server is live!!");
});

app.listen(port, ()=>{
    console.log(`server is started in port ${port}!!`);
});