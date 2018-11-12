var db = require("./dbConfig");

db.connect(function(err) {
    if (err) throw err;

    let sql = 'DELETE FROM user WHERE id = ?';

    var id = '2';

    db.query(sql, id, function (err, res) {
        if (err) throw err;
        console.log('Deleted id : ' + id + ' ,row : ' + res.affectedRows);
    });
});