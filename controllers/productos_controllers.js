const db = require('../db/db');

const getAllProducts = (req, res) => {
    const sql = `
        SELECT producto.tipo, publicaciones.publicacion_id, publicaciones.titulo, publicaciones.precio, publicaciones.cantidad, imagenes.nombre, imagenes.extension
        FROM publicaciones
        INNER JOIN imagenes ON publicaciones.publicacion_id = imagenes.referencia_id
        INNER JOIN producto ON publicaciones.producto_id = producto.producto_id
        WHERE publicaciones.estado = 0 AND imagenes.tipo_imagen_id = 2 AND imagenes.estado = 0 ;
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json(results);
    });
};

const getProductByType = (req, res) => {
    const titulo = req.params.tipo;
    const sql = 'SELECT producto.tipo, publicaciones.publicacion_id, publicaciones.titulo, publicaciones.precio, publicaciones.cantidad, imagenes.nombre, imagenes.extension FROM publicaciones INNER JOIN imagenes ON publicaciones.publicacion_id = imagenes.referencia_id INNER JOIN producto ON publicaciones.producto_id = producto.producto_id WHERE publicaciones.estado = 0 AND imagenes.tipo_imagen_id = 2 AND imagenes.estado = 0 AND producto.tipo = ?';
    db.query(sql, [titulo], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error en la base de datos');
            return;
        }
        res.json(results);
    });
};

const getUsuarioById = (req,res) =>{
    const id = req.params.id;
    const sql = 'select * from usuarios where usuarios.usuario_id = ?'
    db.query(sql,[id],(err,results) => {
        if(err) throw err;
        res.json(results)
    })

}

module.exports = {
    getAllProducts,
    getProductByType,
    getUsuarioById
};