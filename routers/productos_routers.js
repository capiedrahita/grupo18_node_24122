const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productos_controllers');


router.get('/', productoController.getAllProducts);
router.get('/:tipo', productoController.getProductByType);

module.exports = router;

