import mongoose  from "mongoose";

export const dbConnect = async()=>{
    try {
        mongoose.connect(process.env.DB_URL);
        console.log("mongoose connected sucessfully");
    } catch (error) {
        console.log(error);
        console.log("error while connecting mongoose");
    }
}