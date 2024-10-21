import mongoose from "mongoose";
import { userAccountModel } from "../models/account.js";
import { userModel } from "../models/user.js";

export const getBalance = async (req, res) => {
    try {
        
        const userDetails = await userModel.findOne({ username: req.user.username });

        if(!userDetails) {
           return res.status(404).json({ success: false, message: "user not found" });
       }
       
        const balance = await userAccountModel.findOne({user: userDetails._id});

        return res.status(200).json({ success: true, message:"Sucessfully fetched balance", balance });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}



// ------------------------------------------------------------------------------------------------------------------------------------------

export const transectionHndler = async (req, res) => {
    const session = await mongoose.startSession();
    await session.startTransaction();
    try {
        const {amount, to} = req.body;

        if(amount <= 0){
            await session.abortTransaction();
            return res.status(400).json({ success: false, message: "amount must be greater than 0" }); 
        }

        const revieverAccount = await userAccountModel.findOne({user: to}).session(session);

        if(!revieverAccount){
            await session.abortTransaction();
            return res.status(404).json({ success: false, message: "reciever account not found" });
        }

        const senderData = await userModel.findOne({ username: req.user.username }).session(session);

        const senderAcccount = await userAccountModel.findOne({user: senderData._id}).session(session);
 
        if(!senderAcccount){
            await session.abortTransaction();
            return res.status(404).json({ success: false, message: "sender account not found" });
        }

        if( senderAcccount.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({ success: false, message: "insufficient balance" });
        }

        await userAccountModel.updateOne({user:senderData._id},{$inc:{balance:-amount}}).session(session);
        await userAccountModel.updateOne({user:to},{$inc:{balance:amount}}).session(session);

        const recieverDetails = await userModel.findOne({ _id: to }).session(session);

        await session.commitTransaction();

        return res.status(200).json({ success: true, message: "transaction successfull" , data:{
            amount,
            toUser: recieverDetails
        }});

    }catch (error) {
        await session.abortTransaction();
        return res.status(500).json({ success: false, message: error.message });
    }finally{
        session.endSession();
    }
}