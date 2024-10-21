import mongoose from "mongoose";

const userAccountSchema= new mongoose.Schema({
    balance :{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
}) 

export const userAccountModel = mongoose.model("Account", userAccountSchema)