var db = require("./dbConfig");

db.connect(function(err) {
    if (err) throw err;

    // let sql = 'UPDATE user SET nama = "XXX" WHERE id = 1';
    let sql = 'UPDATE user SET nama = "XXX" WHERE id = ?';

    var id = '3';

    var set = ['nama', 'WWWW'];

    db.query(sql, id, function (err, res) {
        if (err) throw err;
        console.log('Updated id : ' + id + ' rows : ' + res.affectedRows);
    });
});