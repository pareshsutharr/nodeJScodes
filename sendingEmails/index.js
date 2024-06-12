const express = require("express");
const app = express();
const sendMail = require("./controllers/sendMail");
app.get("/",(req,res)=>{
    res.send("welcome to home page");
})
app.get("/mail",sendMail);

const start = async ()=>{
    try{
        app.listen(3000,()=>{
            console.log(`server is live on port 3000 http://127.0.0.1:3000`);
        })
    }catch(error){
        console.log(error)
    }
}

start();