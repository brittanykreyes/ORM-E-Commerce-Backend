const router = require('express').Router();
const { Tag } = require('../models');

// GET all tags
router.get('/', async (req, res) => {
    const tags = await Tag.findAll();
    res.json(tags);
});

// GET tag by ID
router.get('/:id', async (req, res) => {
    const tag = await Tag.findByPk(req.params.id);
    res.json(tag);
});

// POST create a new tag
router.post('/', async (req, res) => {
    const newTag = await Tag.create(req.body);
    res.json(newTag);
});

// PUT update a tag
router.put('/:id', async (req, res) => {
    const updatedTag = await Tag.update(req.body, {
        where: { id: req.params.id }
    });
    res.json(updatedTag);
});

// DELETE tag
router.delete('/:id', async (req, res) => {
    await Tag.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Tag deleted' });
});

module.exports = router;
