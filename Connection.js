import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

let url=process.env.DBLINK;

export default async function Connection(){
    try{
        await mongoose.connect(url)
        console.log("connected to DB")
    }catch{
         console.log("not able to connect to DB")
    }
}