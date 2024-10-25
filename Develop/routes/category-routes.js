const router = require('express').Router();
const { Category } = require('../models');

// GET all categories
router.get('/', async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
});

// GET category by ID
router.get('/:id', async (req, res) => {
    const category = await Category.findByPk(req.params.id);
    res.json(category);
});

// POST create a new category
router.post('/', async (req, res) => {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
});

// PUT update a category
router.put('/:id', async (req, res) => {
    const updatedCategory = await Category.update(req.body, {
        where: { id: req.params.id }
    });
    res.json(updatedCategory);
});

// DELETE category
router.delete('/:id', async (req, res) => {
    await Category.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Category deleted' });
});

module.exports = router;
