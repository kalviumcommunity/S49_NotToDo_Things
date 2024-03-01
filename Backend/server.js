import express from "express";
import Connection from "./Connection.js";
import Data from "./Schema.js";
import routes from "./Routes.js";
import bodyParser from 'body-parser';

let app=express();
app.use(bodyParser.json());
app.use("/endpoint",routes);

app.get("/ping",(req,res)=>{
       res.send("pong");
})



Connection().then(() => {
     app.listen(8080, () => {
         console.log("Server is running on localhost:8080");
     });
 });
 