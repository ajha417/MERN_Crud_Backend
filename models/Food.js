const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    foodName:{
        type:String,
        required:true
    },
    foodDesc:{
        type:String,
        required:true
    },
    itemNum:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("FoodData",FoodSchema);
