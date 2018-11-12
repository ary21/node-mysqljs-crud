var db = require("./dbConfig");

db.connect(function(err) {
    if (err) throw err;

    // let sql = `CREATE TABLE customers 
    //     (
    //     id int NOT NULL AUTO_INCREMENT,
    //     name VARCHAR(255), 
    //     address VARCHAR(255),
    //     PRIMARY KEY (id)
    //     )`;

    let sql = 'CREATE TABLE user (id int NOT NULL AUTO_INCREMENT, nama varchar(255), alamat varchar(255), PRIMARY KEY (id))';
    db.query(sql, function (err, res) {
        if (err) throw err;
        console.log('Table Berhasil Dibuat');
    });
});