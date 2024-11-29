const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


const userRouter = require('./router/userRouter')
const productRouter = require('./router/productRouter')
const adminRouter = require('./router/adminRouter')



mongoose.connect(process.env.mongoValue).then(()=>{
    console.log("database connected")}).catch((err)=>{console.log(err.message)})


    app.use(express.json())
    app.use('/user', userRouter)
    app.use('/product',productRouter)
    app.use('/admin',adminRouter)













app.listen(5000,()=>{console.log("port is connected")})