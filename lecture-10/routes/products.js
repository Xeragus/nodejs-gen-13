const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/products');

router.get('/', ProductsController.all)
      .get('/create', ProductsController.getCreate)
      .get('/:id', ProductsController.getUpdate)
      .post('/create', ProductsController.postCreate)
      .post('/:id', ProductsController.postUpdate)
      .delete('/:id', ProductsController.delete)

module.exports = router;