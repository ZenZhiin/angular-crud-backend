const express = require('express');
const router = express.Router();
const { createItem, getItems, updateItem, deleteItem } = require('../controllers/item.controller');
const authenticate = require('../middleware/auth.middleware');

router.post('/', authenticate, createItem);
router.get('/', authenticate, getItems);
router.put('/:id', authenticate, updateItem); 
router.delete('/:id', authenticate, deleteItem);

module.exports = router;
