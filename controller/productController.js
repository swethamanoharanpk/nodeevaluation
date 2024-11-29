const product = require('../model/productModel')



const addProduct = async(req,res)=>{
    try{
        const addedProduct = await product.create(req.body)
        return res.status(200).json({product:addedProduct,message:"product added successfully"})

    }catch(err){
        return res.status(500).json(err.message)
    }
}


const updateProduct = async(req,res)=>{
    try{
        const updatedProduct = await product.findByIdAndUpdate(req.body._id,{$set:req.body},{new:true})
        return res.status(200).json({message:"update successfull",updated:updatedProduct})

    }catch(err){
        return res.status(500).json(err.message)
    }
}

const deleteProduct = async(req,res)=>{
    try{
        const deletedProduct = await product.deleteOne({_id:req.body._id})
        return res.status(200).json({message:"deleted"})

    }catch(err){
        return res.status(500).json(err.message)
    }
}


module.exports = {updateProduct,deleteProduct,addProduct}