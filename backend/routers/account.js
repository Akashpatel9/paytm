import express from "express";
import { auth } from "../middlewares/auth.js";
import { getBalance, transectionHndler } from "../controllers/account.js";

const accountRouter = express.Router();

accountRouter.get("/balance", auth,  getBalance);
accountRouter.put("/transaction", auth,  transectionHndler);

export {accountRouter};