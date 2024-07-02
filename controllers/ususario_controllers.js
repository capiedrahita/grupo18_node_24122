const db = require('../db/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Obtener usuario por ID
const getUsuarioById = (req, res) => {
    const usuarioId = req.params.id;
    const usuarioSql = `
        SELECT usuario_id, usuarios.nombre AS usuario_nombre, apellido, numero_documento, nacimiento, email, telefono, calle, numero, piso, departamento, localidad, provincia, codigo_postal, idImagen, imagenes.nombre AS imagen_nombre, imagenes.extension
        FROM usuarios 
        LEFT JOIN imagenes ON usuario_id = referencia_id 
        AND imagenes.estado = 0 
        AND tipo_imagen_id = 1 
        WHERE usuarios.estado = 0 
        AND usuario_id = ?`;

    const productosSql = `
        SELECT 
            producto.tipo, publicaciones.publicacion_id, publicaciones.titulo, publicaciones.precio, publicaciones.cantidad, imagenes.nombre, imagenes.extension 
        FROM publicaciones 
        LEFT JOIN imagenes ON publicaciones.publicacion_id = imagenes.referencia_id 
        AND imagenes.tipo_imagen_id = 2 
        AND imagenes.estado = 0
        INNER JOIN producto ON publicaciones.producto_id = producto.producto_id 
        WHERE publicaciones.estado = 0 
        AND publicaciones.usuario_id = ?`;

    db.query(usuarioSql, [usuarioId], (err, usuarioResults) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error en la base de datos al obtener usuario' });
        }

        db.query(productosSql, [usuarioId], (err, productosResults) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error en la base de datos al obtener productos' });
            }

            // Proveer una imagen por defecto si no hay imagen asociada
            if (usuarioResults.length > 0 && !usuarioResults[0].imagen_nombre) {
                usuarioResults[0].imagen_nombre = 'avatar-vacio'; // Nombre de la imagen por defecto
                usuarioResults[0].extension = '.png'; // Extensión de la imagen por defecto
            }

            res.json({
                usuario: usuarioResults[0],
                publicaciones: productosResults
            });
        });
    });
};

// Actualizar usuario por ID
const updateUsuarioById = (req, res) => {
    const usuarioId = req.params.id;
    const { nombre, apellido, email, telefono, calle, numero, piso, departamento, localidad } = req.body;
    const sql = 'UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, telefono = ? , calle = ?, numero= ?, piso= ?, departamento=?,localidad=?WHERE usuario_id = ?';

    db.query(sql, [nombre, apellido, email, telefono, calle, numero, piso, departamento, localidad, usuarioId], (err, result) => {
        if (err) throw err;
        res.json({ success: true, message: 'Perfil actualizado correctamente' });
    });
};

const register = async (req, res) => {
    const { nombre, apellido, email, contrasenia } = req.body;
    console.log(nombre,' ',apellido,' ',email,' ',contrasenia)
    const hashedPassword = await bcrypt.hash(contrasenia, 10);
    const estado=0;

    const query = 'INSERT INTO usuarios (nombre, apellido, email, contrasenia, estado) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nombre, apellido, email, hashedPassword,estado], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Usuario registrado' });
    });
};

const login = (req, res) => {
    const { correo, contrasenia } = req.body;

    const query = 'SELECT * FROM usuario WHERE correo = ?';
    db.query(query, [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        const user = results[0];
        const isPasswordValid = await bcrypt.compare(contrasenia, usuario.contrasenia);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' });
        res.json({ token });
    });
};

module.exports = {
    getUsuarioById,
    updateUsuarioById,
    login,
    register
};