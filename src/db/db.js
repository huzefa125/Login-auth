import mongoose from "mongoose";

function connectionDB(){
    const mongoUrl = process.env.MONGO_URL;
    if(!mongoUrl){
        console.error("Missing MONGO_URL environment variable");
        process.exit(1);
    }
    mongoose.connect(mongoUrl)
    .then(()=>{
        console.log("✅ Database connected");
    })
    .catch((err)=>{
        console.error("Mongo connection error", err.message);
        process.exit(1);
    })
}
export default connectionDB;