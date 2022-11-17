var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function (request, response, next) {

    response.render('customer_details');

});

router.post("/action", function (request, response, next) {

    var action = request.body.action;

    if (action == 'fetch') {
        var query = "SELECT * FROM customer_details ";

        database.query(query, function (error, data) {

            response.json({
                data: data
            });

        });
    }

    

    if (action == 'fetch_single') {
        var id = request.body.id;

        var query = `SELECT * FROM user_data WHERE id = "${id}"`;

        database.query(query, function (error, data) {

            response.json(data[0]);

        });
    }

  

    
});

module.exports = router;