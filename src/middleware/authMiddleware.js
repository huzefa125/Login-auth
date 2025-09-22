import jwt from "jsonwebtoken";
import userModel from "../models/user.models.js";

export async function authMiddleware(req, res, next){
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({ message: "Not authorized" });
        }

        const jwtSecretKey = process.env.JWT_SECRET || "fallback-secret-key-change-in-production";
        const decoded = jwt.verify(token, jwtSecretKey);
        const user = await userModel.findById(decoded.id).select("-password");
        if(!user){
            return res.status(401).json({ message: "User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: error?.name === 'TokenExpiredError' ? 'Token expired' : 'Invalid token' });
    }
}

export async function adminMiddleware(req,res,next){
    if(req.user.role !== "admin"){
        return res.status(403).json({message:"Access denied"})
    }
    next();
}