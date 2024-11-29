const user = require('../model/userModel')
const argon2 = require('argon2')

const postData = async(req,res)=>{
    req.body.password = await argon2.hash(req.body.password)
    try{
        const postedData = await user.create(req.body)
        return res.status(200).json({message:"signup success"})

    }catch(err){
        return res.status(500).json(err.message)
    }

}

const showProfile = async(req,res)=>{
    try{

        const profile = await user.findOne({_id:req.params.id})
        console.log(profile)
        return res.status(200).json(profile)

    }catch(err){
        return res.status(500).json(err.message)
    }
}


const updateUser = async(req,res)=>{
    console.log("haiiiiiiiiiiiiiiiii",req.body)
    req.body.password= argon2.hash(req.body.password)
    try{
        const update = user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        return res.status(200).json(update)

    }catch(err){
        return res.status(500).json(err.message)
    }
}
module.exports = {postData,showProfile,updateUser}