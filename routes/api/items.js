const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET appi/items
// @description Get a Item
// @access Public
router.get('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// @route POST appi/items
// @description Create a Item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

// @route DELETE appi/items
// @description Delete a Item
// @access Public
router.delete('/:id', (req, res) => {
    // Fetch from URI
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
