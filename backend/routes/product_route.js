const express=require("express");
const router=express.Router();


const {createproduct,deleteproduct,getproduct,updateproduct}=require("../controller/product_controller")

router.post('/createproduct',createproduct)
router.delete('/deleteproduct/:id',deleteproduct)
router.get('/getproduct',getproduct)
router.put('/updateproduct/:id',updateproduct)

module.exports=router;