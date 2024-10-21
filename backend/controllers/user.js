import bcrypt from "bcryptjs"
import zod, { ZodError } from "zod";
import { resetDetails, signin, signup } from "../inputSchemas/user.js";
import { userModel } from "../models/user.js";
import jsonwebtoken from "jsonwebtoken";
import { userAccountModel } from "../models/account.js";


// -----------------------------------------------------------------------------------------------------------------------------------------

// signup handler
export const signupHandler = async (req, res) => {
    try {

        const inputVelidationRes = signup.parse(req.body);

        const userAlreadyRegistered = await userModel.findOne({ username: inputVelidationRes.username });

        if (userAlreadyRegistered) {
            return res.status(405).json({ sucess: false, message: "user already registered" })
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(inputVelidationRes.password, salt);

        const userData = await userModel.create({
            ...inputVelidationRes,
            password: hashedPassword
        });

        await userAccountModel.create({
            user: userData._id,
            balance: Math.random()*10000
        })

        return res.status(200).json({
            success: true,
            message: "user created successfully",
        })

    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                errors: error.issues.map(err => ({
                    path: err.path.join('.'),
                    message: err.message
                })),
            });
        }
        return res.status(500).json({
            sucess: false,
            message: error.message
        })
    }
}


// ------------------------------------------------------------------------------------------------------------------------------------------

// signin Handler
export const signinHandler = async (req, res) => {
    try {

        const inputVelidationRes = signin.parse(req.body);

        const userRegistered = await userModel.findOne({ username: inputVelidationRes.username }).select("+password");  

        if (!userRegistered) {
            return res.status(405).json({ sucess: false, message: "user not registered" })
        }

        if (!bcrypt.compareSync(inputVelidationRes.password, userRegistered.password)) {
            return res.status(400).json({
                sucess: false,
                message: "wrong password"
            })
        }

        const payload = {
            username : userRegistered.username
        }

        const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

        return res.status(200).json({
            sucess: false,
            message: "Sycessfully loggedin user",
            token: token
        })

    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                message: error.issues.map(err => ({
                    path: err.path.join('.'),
                    message: err.message
                }))
            })
        }

        return res.status(500).json({
            sucess: false,
            message: error.message
        })
    }
}




// ------------------------------------------------------------------------------------------------------------------------------------------

export const userDetailsHanlder = async (req, res) => {
    try {

        const userDetails = await userModel.findOne({ username: req.user.username });
        const accoutDetails = await userAccountModel.findOne({user: userDetails._id});
        res.status(200).json({
            sucess:false,
            message:"Sucessfully fatched UserDetails",
            data:{
                userDetails,
                accoutDetails
            }
        })
        
    } catch (error) {
        return res.status(500).json({
            sucess: false,
            message: error.message
        })
    }
}


// ------------------------------------------------------------------------------------------------------------------------------------------

export const updateDetailsHandler = async (req, res) => {
    try {
        const inputVelidationRes = resetDetails.parse(req.body);
        
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(inputVelidationRes.password, salt);

        inputVelidationRes.password = hashedPassword;
        const resData = await userModel.findOneAndUpdate({username: req.user.username}, inputVelidationRes, {new: true});

        if(!resData){
            return res.status(400).json({success: false, message: "user not found"})
        }

        return res.status(200).json({
            success: true,
            message: "user Details updated successfully"
        })

    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                message: error.issues.map(err => ({
                    path: err.path.join('.'),
                    message: err.message
                }))
            })
        }
        return res.status(500).json({ sucess: false, message: error.message })
    }
}




// ------------------------------------------------------------------------------------------------------------------------------------------

export const filterHandler = async (req, res) => {
    try {
        const filter = req.query.filter||""
        
        const userDetails = await userModel.find({
            $or: [
                {
                    firstName:{
                        $regex: filter,
                    }
                },
                {
                    lastName:{
                        $regex: filter,
                    }
                }
            ]
        })

        return res.status(200).json({
            success: true,
            message: "successfully fatched",
            data: userDetails
        })

    } catch (error) {
        return res.status(500).json({ sucess: false, message: error.message })
    }
}



