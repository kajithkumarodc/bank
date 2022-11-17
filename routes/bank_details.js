var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function (request, response, next) {

	response.render('bank_details', { title: ' Unique Bank Details' });

});

router.post("/action", function (request, response, next) {

	var action = request.body.action;

	if (action == 'fetch') {
		var query = "select * from sample_data ";

		database.query(query, function (error, data) {

			response.json({
				data: data
			});

		});
	}

});







module.exports = router;