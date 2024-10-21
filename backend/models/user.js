import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength :4,
        maxLength :30
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    firstName: {
        type:String,
        required:true,
        trim:true,
        maxLength:10
    },
    lastName: {
        type:String,
        required:true,
        trim:true,
        maxLength:10
    },
})

export const userModel = mongoose.model("User", userSchema);