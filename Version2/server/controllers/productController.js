const Product = require('../models/Product');

const productController = {
  createProduct: async (req, res) => {
    try {
      if (!req.user.isSuperUser) {
        return res.status(403).json({ error: 'Not authorized' });
      }

      const product = new Product({
        ...req.body,
        createdBy: req.user._id
      });
      
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getMyProducts: async (req, res) => {
    try {
      await req.user.populate('purchasedProducts');
      res.json(req.user.purchasedProducts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  purchaseProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      if (!req.user.purchasedProducts.includes(product._id)) {
        req.user.purchasedProducts.push(product._id);
        await req.user.save();
      }

      res.json({ message: 'Purchase successful' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = productController;