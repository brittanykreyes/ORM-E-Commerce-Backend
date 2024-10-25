const router = require('express').Router();
const { Product } = require('../models');

// GET all products
router.get('/', async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

// GET product by ID
router.get('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    res.json(product);
});

// POST create a new product
router.post('/', async (req, res) => {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
});

// PUT update a product
router.put('/:id', async (req, res) => {
    const updatedProduct = await Product.update(req.body, {
        where: { id: req.params.id }
    });
    res.json(updatedProduct);
});

// DELETE product
router.delete('/:id', async (req, res) => {
    await Product.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Product deleted' });
});

module.exports = router;
