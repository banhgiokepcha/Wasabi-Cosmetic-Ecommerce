var express = require('express')
var router = express.Router()
var ProductCtrl = require('../controllers/ProductCtrl')

router.get('/search', ProductCtrl.SearchProduct)
router.post('/search', ProductCtrl.SearchProduct)
router.get('/:slug', ProductCtrl.ProductDetail)
router.get('/', ProductCtrl.ProductIndex) 
router.get('/update', ProductCtrl.GetProductToUpdate)
router.post('/update', ProductCtrl.UpdateProduct)
router.post('/add-product', ProductCtrl.AddNewProduct)


module.exports = router;