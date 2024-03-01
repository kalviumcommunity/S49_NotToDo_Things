import express from "express";
import mongoose from "mongoose";

let UserSchema=new mongoose.Schema({
       input:{
          type:String,
          required:true
       }})

let Data=mongoose.model("todo",UserSchema);


export default Data;