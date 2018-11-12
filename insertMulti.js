var db = require("./dbConfig");

db.connect(function(err) {
    if (err) throw err;

    let sql = `INSERT INTO user (nama, alamat) VALUES ?`;

    var val = [
        ['Susi', 'Bantul'],
        ['Andi', 'Gunung Kidul'],
        ['Tono', 'Sleman'],
        ['Roni', 'Kulon Progo']
    ];

    db.query(sql, [val], function (err, res) {
        if (err) throw err;
        console.log('Berhasil Insert : ' + res.affectedRows);
    });
});