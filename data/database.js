const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'Localhost',
    database: 'blog',
    user: 'root',
    password: 'Wael@0007'
})

module.exports = pool;