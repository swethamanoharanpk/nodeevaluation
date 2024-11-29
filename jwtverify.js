const jwt = require('jsonwebtoken')
const verifyToken = (req,res,next)=>{
    console.log(req.headers.token)
    console.log(req.params.id)
    try{
        const getToken = req.headers.token

        if(getToken){
            jwt.verify(getToken,process.env.jwtSecretkey,(err,value)=>{
                console.log("*****************",value)
                if(err){
                    return res.status(401).json({message:"token not authorized"})
                }
                if(value.id==req.params.id){
                    next()
                }else{
                    return res.status(401).json({message:"token and id is not match"})
                }

            })

        }else{
            return res.status(401).json({response:"token not found"})
        }


    }catch(err){
        return res.status(500).json(err.message)

    }

}

module.exports = {verifyToken}