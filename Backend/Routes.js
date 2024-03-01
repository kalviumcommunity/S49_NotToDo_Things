import express from "express";
import Data from "./Schema.js";

let routes=express.Router();

routes.get("/testing",(req,res)=>{
       res.send("Test Working...")
})


routes.get("/data",async (req,res)=>{
         let value=await Data.find()
         res.status(200).send({data:value,message:"getting data"})
})

routes.post("/postdata",async (req,res)=>{
    let value=req.body;
    let created=await Data.create(value)
    res.status(200).send({data:created,message:"created data"})
})


routes.patch("/updatedata/:id",async(req,res)=>{
    const { id } = req.params;
    const { input } = req.body;
      let update= await Data.findByIdAndUpdate(id,{input});
      console.log(update)
      res.status(200).send({data:update,message:"updated data"})
      
})

routes.delete("/deletedata/:id",async(req,res)=>{
    const { id } = req.params;
      let update= await Data.findByIdAndDelete(id);
      console.log(update)
      res.status(200).send({data:update,message:"deleted data"})
      
})



export default routes;




