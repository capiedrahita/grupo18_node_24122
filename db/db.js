const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'figuriando',
    port: 3307
});
connection.connect((err)=>{
    if(err){
        console.log('Error al conectar con la base de datos: ',err);
        return;
    }
    console.log('Conectado a la base de datos')
})

module.exports = connection;