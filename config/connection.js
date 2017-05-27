// Setting up MySQL connection
var mysql = require('mysql');
var connection; 

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'fya7b23w',
		database: 'burgers_db'
	});
}

// Making the connection
connection.connect(function(err) {
	if (err) {
		throw err;
	}
	console.log("Connected as id " + connection.threadId);
});

// Making the connection available to the ORM via exports
module.exports = connection;