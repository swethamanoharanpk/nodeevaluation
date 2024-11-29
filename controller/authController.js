const user = require('../model/userModel')
const argon = require('argon2')
const token = require('jsonwebtoken')

const loginData = async(req,res)=>{
    try{
        const login = await user.findOne({email:req.body.email})
        if(!login){
            return res.status(401).json({message:"email not found"})
        }
        if(await argon.verify(login.password,req.body.password)){
            const generateToken = token.sign({id:login._id},process.env.jwtSecretkey,{expiresIn:"1d"})
            return res.status(200).json({token:generateToken,id:login._id,message:"login success"})
        }
        else{
            return res.status(401).json({messgae:"password is not match"})
        }

    }catch(err){
        return res.status(500).json(err.message)
    }

}
module.exports = {loginData}