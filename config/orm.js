// Requiring the MySQL database connection
var connection = require('./connection.js');

var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw(err);
			}
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table + " (" + cols + ") " + "VALUES (" + vals + ");";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		})
	},
	updateOne: function(table, cols) {

	}
}

// Making the ORM available via exports
module.exports = orm;