const { addProduct, getProducts, getVendorProducts, deleteProduct, handleUpdateProduct, getSingleProduct } = require('../controllers/productController')
const router = require('express').Router()

router.post('/addproduct', addProduct)
router.get('/products', getProducts)
router.get('/vendorproducts/:vendorId', getVendorProducts)
router.get('/:productId', getSingleProduct)
router.patch('/update', handleUpdateProduct)
router.delete('/delete/:productId', deleteProduct)

module.exports = router