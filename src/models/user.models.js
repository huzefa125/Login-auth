import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user",
    }
}, { timestamps: true });

const userModel = mongoose.model("User", userSchema);

export default userModel;