const express = require('express')
const mongoose = require('mongoose')
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crudoperation",{
    useNewUrlParser:true
})

app.get("/",(req,res)=>{
    
})

app.listen(3001,()=>{
    console.log(`app listening on port 3001`);
})

