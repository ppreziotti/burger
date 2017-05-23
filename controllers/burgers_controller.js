var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

// Get home page
router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObj = {
			burgers: data
		};
		console.log(hbsObj);
		res.render('index', hbsObj);
	});
});

// Post route for creating a burger


// Put route for updating the devoured status of a burger

module.exports = router;