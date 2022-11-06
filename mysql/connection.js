const mysql = require("mysql");

// create connection creates an object that contains credentials needed to talk to DB
const connection = mysql.createConnection({
  port: 3306,
  database: "accounts",
  user: "root",
  password: "",
  host: "localhost",
});

// initiate the connection
connection.connect();
// promise based on the query that is sent in - reusable
function asyncMySQL(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        console.log(
          "Connection to server failed, check server is running",
          error
        );
        reject("mySQL said no!");
      }

      resolve(results);
    });
  });
}

module.exports = asyncMySQL;
