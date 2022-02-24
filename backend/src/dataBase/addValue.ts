const conn=require('./connection.ts');
conn.connect()
if(conn){
    console.log('database connection')
}

conn.query(`
INSERT INTO shawarma."Orders" VALUES (DEFAULT, 'Иванов', '+795256987854'), (DEFAULT, 'Петров', '+795256987454');
      `, (err, res) => {
      if (err) throw err;
      if(res) {
        console.log('Table created')
      }
    });

    conn.query(`

    SELECT * FROM shawarma."Orders"
      `, (err, res) => {
      if (err) throw err;
      if(res) {
        console.log(res.rows)
      }
    });