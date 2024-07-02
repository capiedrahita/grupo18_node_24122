const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/ususario_controllers');
const imagenController = require('../controllers/base_imagen_controllers');
const { upload } = require('../controllers/imagenes_controllers');
const authenticateToken = require('../middlewares/authMiddlewares');

router.get('/:id', usuarioController.getUsuarioById);
router.put('/:id', usuarioController.updateUsuarioById);
router.put('/:id/imagen', upload.single('imagen'), imagenController.subirImagenUsuario); 
router.post('/login', usuarioController.login);
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Acceso permitido a la ruta protegida', user: req.user });
});
router.post('/register', usuarioController.register);

module.exports = router;
