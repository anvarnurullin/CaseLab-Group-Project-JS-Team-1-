import { QueryResult } from "pg";

var connection = require('./connection.js');
connection.connect()
if(connection){
    console.log('database connection')
}

/* connection.query(`
INSERT INTO shawarma."Orders" VALUES (DEFAULT, 'Иванов', '+795256987854'), (DEFAULT, 'Петров', '+795256987454');
      `, (err: Error, res: QueryResult) => {
      if (err) throw err;
      if(res) {
        console.log('Values was added');
      }
    }); */

    connection.query(`

    SELECT * FROM shawarma."Orders"
      `, (err: Error, res: QueryResult) => {
      if (err) throw err;
      if(res) {
        console.log(res.rows)
      }
    });