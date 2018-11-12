var db = require("./dbConfig");

db.connect(function(err) {
    if (err) throw err;

    let sql = `INSERT INTO user (nama, alamat)
        VALUES ('Budi', 'Sleman')`;

    db.query(sql, function (err, res) {
        if (err) throw err;
        console.log('Berhasil Insert');
    });
});