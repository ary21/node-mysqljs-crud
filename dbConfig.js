var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'root123',
    database: 'test_node'
});

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

module.exports = db;