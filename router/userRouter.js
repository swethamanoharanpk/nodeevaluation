const { loginData } = require('../controller/authController')
const {postData, showProfile, updateUser} = require('../controller/userController')
const { verifyToken } = require('../jwtverify')
const router = require('express').Router()


router.post('/register',postData)
router.post('/login',loginData)
router.get('/profile/:id',verifyToken,showProfile)
router.put('/update/:id',verifyToken,updateUser)


module.exports = router