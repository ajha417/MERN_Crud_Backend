const express = require('express')
const mongoose = require('mongoose')
const FoodModel = require('./models/Food.js')
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/crudoperation",{
    useNewUrlParser:true
})

app.post("/insert",async (req,res)=>{
    const foodName = req.body.foodName;
    const foodDesc = req.body.foodDesc;
    const itemNum = req.body.itemNum;
    const food = new FoodModel({
        foodName:foodName,
        foodDesc:foodDesc,
        itemNum:itemNum
    });
    await food.save();
    res.send('data inserted successfully');
})

app.get("/read",(req,res)=>{
    FoodModel.find({}).then(response=>{
        res.send(response);
    })
})
app.put("/update",async(req,res)=>{
    const newFoodName = req.body.foodName;
    const newFoodDesc = req.body.foodDesc;
    const newItemNum = req.body.itemNum;
    const id = req.params.id;
    try{
      await FoodModel.findById(id,(err,updatedFood)=>{
        if(err){
            console.log(err)
        }
            updatedFood.foodName = newFoodName;
            updatedFood.foodDesc = newFoodDesc;
            updatedFood.itemNum = newItemNum;
            updatedFood.save();
            res.send("update");
        })
    }catch(err){

    }

})
app.listen(3001,()=>{
    console.log(`app listening on port 3001`);
})

