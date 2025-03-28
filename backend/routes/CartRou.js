const express = require('express');
const router = express.Router();
const {
    getCart,
    addToCart,
    deleteItem 
} = require('../controllers/CartCtrl');

router.get('/:userId', getCart)
router.post('/add', addToCart)
router.post('/delete', deleteItem)


module.exports = router;