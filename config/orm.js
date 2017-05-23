// Requiring the MySQL database connection
var connection = require('./connection.js');

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

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
		var queryString = "INSERT INTO " + table + " (" + cols + ") " + "VALUES (" + printQuestionMarks(vals.length) + ");";
		console.log(queryString);
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	updateOne: function(table, objColsVals, condition, cb) {
		var queryString = "UPDATE " + table + " SET " + objColsVals + " WHERE " + condition;
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
}

// Making the ORM available via exports
module.exports = orm;