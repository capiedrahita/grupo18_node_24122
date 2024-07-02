const express = require('express');
const router = express.Router();
const { upload } = require('../controllers/imagenes_controllers');
const imagenesControllers = require('../controllers/base_imagen_controllers')

router.post('/upload/usuario', upload.single('file'), imagenesControllers.subirImagenUsuario);
router.post('/upload/publiacion', upload.single('file'), imagenesControllers.subirImagenPublicacion);


module.exports = router;

