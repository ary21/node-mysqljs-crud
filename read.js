var db = require("./dbConfig");

db.connect(function(err) {
    if (err) throw err;

    let sql = 'SELECT * FROM user';

    db.query(sql, function (err, res) {
        if (err) throw err;
        // console.log(res);

        // pakai perulangan
        console.log('ID \t NAMA \t\t ALAMAT');
        res.forEach(val => {
            console.log(`${val.id} \t ${val.nama} \t\t ${val.alamat}`);
        });
    });
});