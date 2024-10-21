import jwt from "jsonwebtoken";

// auth middleware
export const auth = async (req, res, next) => {
    try {
        const token = req.headers["authorization"]?.split(" ")[1];
        
        if (!token) return res.status(401).json({ sucess: false, message: "token does not exist" })
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).json({ sucess: false, message: error.message })
    }
}