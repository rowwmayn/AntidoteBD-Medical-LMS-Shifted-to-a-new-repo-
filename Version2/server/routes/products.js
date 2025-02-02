const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { auth, isSuperUser } = require('../middleware/auth');

router.post('/', auth, isSuperUser, productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/my-products', auth, productController.getMyProducts);
router.post('/:id/purchase', auth, productController.purchaseProduct);

module.exports = router;