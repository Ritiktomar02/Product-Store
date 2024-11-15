const { default: mongoose } = require("mongoose");
const product_model=require("../model/product_model");


exports.createproduct=async(req,res)=>{

    try{

        const {name,price,image}=req.body;

        if(!name || !price || !image){
            return res.status(400).json({
                success:false,
                message:"Please Provide all the details"
            })
        }

        const result=await product_model.create({name,price,image});

        res.status(200).json({
            success:true,
            message:result
        })
    }
    catch(err){
       
        console.error(err.message);

        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

exports.deleteproduct=async(req,res)=>{

    try{
        
        const {id}=req.params;
        const result=await product_model.findByIdAndDelete({_id:id})

        res.status(200).json({
            success:true,
            message:result
        })
    }
    catch(err){

        console.error(err.message);

        res.status(400).json({
            success:false,
            message:err.message
        })
 

    }
}

exports.getproduct=async(req,res)=>{

    try{
      

        const response=await product_model.find({});

        res.status(200).json({
            success:true,
            message:response
        })
    }
    catch(err){
       
        console.error(err.message);

        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

exports.updateproduct=async(req,res)=>{

    try{
      
        const {id}=req.params
        const {name,email,age}=req.body
         
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({
                success:false,
                message:"Please Provide a valid id"
            })
        }

        const response=await product_model.findByIdAndUpdate({_id:id},{name:name,email:email,age:age},{new:true});

        res.status(200).json({
            success:true,
            message:response
        })
    }
    catch(err){
       
        console.log(err.message);

        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}