const express = require('express');
const controller = require('../controllers/category')
const router = express.Router();

router.get('/', controller.read);
router.get('/:id', controller.getById);
router.delete('/:id', controller.delete);
router.post('/', controller.create);
router.patch('/:id', controller.update);

module.exports = router;