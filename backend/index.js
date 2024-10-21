import express from 'express';
import { dbConnect } from './configs/db.js';
import { userRouter } from './routers/user.js';
import { accountRouter } from './routers/account.js';
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();

const app = express();

dbConnect();
app.use(express.json());
app.use(cors());


app.use("/api/v1/user",userRouter);
app.use("/api/v1/account",accountRouter);

app.get('/', (req, res) => { 
    res.send("hello world");
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})

app.get("*", (req, res) => {
    return res.status(404).json({
        success: false,
        message: "page not found",
    });
})

app.use((err, req, res, next) => {
    return res.status(500).json({
        success: false,
        message: errorMessage,
    });
})