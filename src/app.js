const express = require('express');
const path = require('path');
const productosRouters = require('../routers/productos_routers'); // Asegúrate de que las rutas son correctas
const usuarioRouters = require('../routers/usuario_routers');
const imagenRouters = require('../routers/imagenes_routers'); // Asegúrate de que las rutas son correctas

const app = express();

app.use(express.json());
app.use('/api/imagenes', imagenRouters); 
app.use('/repoImagenes', express.static(path.join(__dirname, '..', 'repoImagenes')));
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
app.use('/api/loguin', usuarioRouters);

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'productos.html'));
});

app.get('/productos/:tipo', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'product.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/contacto', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'contacto2.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'login.html'));
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'registro.html'));
});

app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'checkout.html'));
});

app.get('/perfilDeUsuario/:id/grilla', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'grilla2.html'));
});

app.get('/perfilDeUsuario/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'perfilDeUsuario.html'));
});

app.get('/terminosYcondiciones', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'terminosYcondiciones.html'));
});

app.use('/api/productos', productosRouters);
app.use('/api/perfilDeUsuario', usuarioRouters);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
