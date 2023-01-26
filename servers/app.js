const exp = require("express");
const mycon = require("mysql2");
const cors = require("cors");


const app = exp();
app.use(cors());
app.use(exp.json());

app.use((req,res,next)=>{
    res.status(200).json({
        message:"It works"
    });
});
module.exports=app;

const c = mycon.createConnection({
    host : "localhost",
    user:"root",
    password:"Sam@12345",
    database:"employe"
});

c.connect(function(err){
    if(err){console.log(err);}
    else{console.log("Database Connected")}
})