var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'pi',
    password:'resl',
    database: 'soeasy'
});

module.exports = connection;