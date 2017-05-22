var orm = require('../config/orm.js');

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},
	insertOne: function() {

	},
	updateOne: function() {
		
	}
}

module.exports = burger;