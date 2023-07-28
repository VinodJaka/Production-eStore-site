require('dotenv').config()
const express= require('express');
const app= express();
const cors=require('cors');
const product = require('./Routes/product');
const path =require("path");


app.use(cors());

app.use("/",product);

//static files
app.use(express.static(path.join(__dirname,"./estore/build")));
app.get("*", function(req,res){
    res.sendFile(path.join(__dirname,"./estore/build/index.html"));
});

//port
const server=app.listen(process.env.PORT,()=>{
    console.log("app is running on 5001")
})