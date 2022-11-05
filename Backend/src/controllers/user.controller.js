
var mysql = require('mysql');
const pool = require('../db/db');

function codigoUsuario(req, res) {
  var sql='select * from temporal'

    pool.query(sql, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
}


module.exports = {
  codigoUsuario,
};
