const router = require('express').Router()

const {updateProduct, deleteProduct, addProduct} = require('../controller/productController')
const { verifyToken } = require('../jwtverify')

router.put('/updateproduct/:id',verifyToken, updateProduct)
router.delete('/delete/:id',verifyToken, deleteProduct)
router.post('/add/:id',addProduct)



module.exports = router