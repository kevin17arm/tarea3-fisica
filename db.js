const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'enterprise'
});

conexion.connect(err => {
    if (err) throw err;
    console.log("Conexión exitosa a MySQL");
});

module.exports = conexion;
