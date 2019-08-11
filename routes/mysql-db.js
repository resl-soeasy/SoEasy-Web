var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'soeasy',
    password:'soeasy',
    database: 'soeasy'
});

module.exports = connection;