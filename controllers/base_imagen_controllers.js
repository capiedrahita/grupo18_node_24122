const db = require('../db/db');
const path = require('path');

const subirImagenUsuario = async (req, res) => {
    try {
        const { filename } = req.file;
        const usuarioId = req.params.id; // ID del usuario obtenido desde los parámetros de la ruta
        const extension = path.extname(filename);
        const tipoImagenId = 1; // 1 para imagen de usuario
        const estado = 0; // Puedes definir el estado según tus necesidades

        // Actualiza el estado de la imagen anterior del usuario a 1
        await db.query('UPDATE imagenes SET estado = 1 WHERE referencia_id = ? AND tipo_imagen_id = ? AND estado = 0', [usuarioId, tipoImagenId]);

        // Inserta la nueva imagen en la base de datos
        const result = await db.query('INSERT INTO imagenes (nombre, referencia_id, estado, tipo_imagen_id, extension) VALUES (?, ?, ?, ?, ?)', 
                       [filename, usuarioId, estado, tipoImagenId, extension]);

        // Obtener el ID de la nueva imagen insertada
        const nuevaImagenId = result.insertId;

        // Actualizar el campo imagenes_id en la tabla usuarios
        await db.query('UPDATE usuarios SET imagenes_id = ? WHERE usuario_id = ?', [nuevaImagenId, usuarioId]);

        res.status(200).json({ message: 'Imagen de usuario subida y guardada en la base de datos' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al subir la imagen del usuario' });
    }
};


const subirImagenPublicacion = async (req, res) => {
    try {
        const { filename } = req.file;
        const { referencia_id } = req.body; // ID de la publicación
        const extension = path.extname(filename);
        const tipo_imagen_id = 2; // 2 para publicación
        const estado = 0

        await db.query('INSERT INTO imagenes (nombre, referencia_id, estado, tipo_imagen_id, extension) VALUES (?, ?, ?, ?, ?)', 
                       [filename, referencia_id, 0, tipo_imagen_id, extension]);

        res.status(200).json({ message: 'Imagen de publicación subida y guardada en la base de datos' });
    } catch (error) {
        res.status(500).json({ error: 'Error al subir la imagen de la publicación' });
    }
};

module.exports = {
    subirImagenUsuario,
    subirImagenPublicacion
};
