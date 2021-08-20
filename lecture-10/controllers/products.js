const Product = require('../models/product');

module.exports = {
  all: async (req, res) => {
    const products = await Product.find();

    res.render('products', { products: products });
  },
  getCreate: (req, res) => {
    res.render('create')
  },
  getUpdate: async (req, res) => {
    const product = await Product.findById(req.params.id);

    res.render('update', { product: product })
  },
  postCreate: async (req, res) => {
    try {
      await Product.create(req.body);

      res.redirect('/products');
    } catch (error) {
      res.send(error)
      throw error
    }
  },
  postUpdate: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(req.params.id, req.body);

      res.redirect('/products');
    } catch (error) {
      res.send(error)
      throw error
    }
  }
}