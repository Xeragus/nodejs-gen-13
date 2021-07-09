const express = require('express');
const router = express.Router();

// simulirame povik do baza
const products = [
  {
    sku: 12312321,
    name: 'Arsenal T-Shirt',
    price: '55.69'
  },
  {
    sku: 43534543,
    name: 'Barcelona T-Shirt',
    price: '35.44'
  },
  {
    sku: 32423423,
    name: 'VMRO dress',
    price: '21.24'
  },
  {
    sku: 543543345,
    name: 'Red Rose on Orange Background',
    price: '31.43'
  }
]

router.get('/', (req, res) => {
  res.render('products', { products: products });
});

module.exports = router;