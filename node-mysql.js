const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'noodejs'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('SELECT * FROM noodejs', (err, rows) => {
  if (err) throw err;
  console.log('Data received from Db:\n');
  console.log(rows);
});

connection.end((err) => {
  if (err) throw err;
  console.log('Connection closed.');
});