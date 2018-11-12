var db = require("./dbConfig");

db.connect(function(err) {
    if (err) throw err;
    
    let sql = "CREATE DATABASE test_node";
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});