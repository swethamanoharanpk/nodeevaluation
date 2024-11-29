const admin = require('../model/adminModel')
const argon = require('argon2')
const webtoken = require('jsonwebtoken')


const createAdmin = async(req,res)=>{
    req.body.password = await argon.hash(req.body.password)
    try{
        const adminRegister = await admin.create(req.body)
        console.log(adminRegister);
        return res.status(200).json({message:"admin registration successfull"})


    }catch(err){
        return res.status(500).json(err.message)
    }
    
}



const adminLogin = async(req,res)=>{
    try{
        const findAdmin = await admin.findOne({email:req.body.email})
        console.log("&&&&&",findAdmin)
        if(!findAdmin){
            return res.status(401).json({message:"admin is not found"})
        }
        if(await argon.verify(findAdmin.password,req.body.password)){
            const tokenGenerate = webtoken.sign({id:findAdmin._id},process.env.jwtSecretkey,{expiresIn:"1d"})
            return res.status(200).json({token:tokenGenerate,id:findAdmin._id,message:"login success"})
        }else{
            return res.status(401).json("admin not found")
        }
        
    }catch(err){
        return res.status(500).json(err.message)
    }
}

module.exports = {createAdmin,adminLogin}