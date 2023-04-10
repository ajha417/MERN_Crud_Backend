const express = require('express')
const mongoose = require('mongoose')
const FoodModel = require('./models/Food.js')
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crudoperation",{
    useNewUrlParser:true
})

app.get("/",async (req,res)=>{
    const food = new FoodModel({
        foodName:"Burger",
        foodDesc:"Very tasty",
        itemNum:5
    });
    await food.save();
    res.send('data inserted successfully');
})

app.listen(3001,()=>{
    console.log(`app listening on port 3001`);
})

