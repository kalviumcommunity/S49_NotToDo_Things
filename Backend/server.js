import express from "express";
import Connection from "./Connection.js";
import Data from "./Schema.js";

let app=express();

app.get("/ping",(req,res)=>{
       res.send("pong");
})

Connection().then(() => {
     app.listen(8080, () => {
         console.log("Server is running on localhost:8080");
     });
 });
 