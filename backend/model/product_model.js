
const mongoose=require("mongoose")

const product_model= new mongoose.Schema({


    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    image:{
        type:String,
        required:true
    }

},{timestamps:true})


module.exports=mongoose.model('product_model',product_model)