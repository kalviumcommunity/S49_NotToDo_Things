let express=require("express");
let app=express();

app.get("/ping",(req,res)=>{
       res.send("pong");
})

app.listen(8080,()=>{
     console.log("running localhost")
})