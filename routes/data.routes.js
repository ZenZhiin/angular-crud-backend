const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data.controller');

router.get('/', dataController.getAllData);
router.post('/', dataController.createData);
router.put('/:id', dataController.updateData);
router.delete('/:id', dataController.deleteData);

module.exports = router;
