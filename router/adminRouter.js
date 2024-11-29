const adminRouter = require('express').Router()
const {createAdmin, adminLogin} = require('../controller/adminController')




adminRouter.post('/adminregister',createAdmin)
adminRouter.post('/adminlogin',adminLogin)


module.exports = adminRouter