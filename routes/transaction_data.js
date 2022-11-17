
var express = require('express');//include express module

 var router = express.Router();// create new router object

var database = require('../database');

router.get("/", function(request, response, next){

	response.render('transaction_data'/*view file name */ , {title : 'Unique Bank Customer Transaction Details '});

});

router.post("/details", function(request, response, next){

	 var details = request.body.details;

	if(details == 'fetch')
	{
		var query = "SELECT * FROM customer_data ORDER BY id desc";

		database.query(query, function(error, data){

			response.json({
				 data:data
			});

		});
	}

	if(details == 'Add')
	{
		var Bank_name = request.body.Bank_name;

		var Customer_id = request.body.Customer_id;

        var Name = request.body.Name;
        
		var Account_number = request.body.Account_number;

		var Contact_number = request.body.Contact_number;

		var Amount = request.body.Amount;

		var Date = request.body.Date;

		var Transaction_type = request.body.Transaction_type;

		var Location = request.body.Location;

		var query = `
		INSERT INTO customer_data 
		(Bank_name, Customer_id, Name, Account_number, Contact_number,  Amount, Date,Transaction_type,Location,id) 
		VALUES ("${Bank_name}", "${Customer_id}","${Name}", "${Account_number}","${Contact_number}","${Amount}","${Date}","${Transaction_type}", "${Location},"${id}")
		`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Added'
			});

		});
	}

	if(details == 'fetch_single')
	{
		var id = request.body.id;

		var query = `SELECT * FROM customer_data WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json(data[0]);

		});
	}

	if(details == 'Edit')
	{
		var Bank_name = request.body.Bank_name;

		var Customer_id = request.body.Customer_id;

        var Name = request.body.Name;
        
		var Account_number = request.body.Account_number;

		var Contact_number = request.body.Contact_number;

		var Amount = request.body.Amount;

		var Date = request.body.Date;

		var Transaction_type = request.body.Transaction_type;

		var Location = request.body.Location;

		var query = `
		UPDATE customer_data 
		SET Bank_name = "${Bank_name}", 
		Customer_id = "${Customer_id}", 
        Name = "${Name}" ,
		Account_number = "${Account_number}" 
		Contact_number = "${Contact_number}"
		Amount = "${Amount}"
		Date = "${Date}"
		Transaction_type = "${Transaction_type}"
		Location = "${Location}"
		WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			response.json({
				message : 'Data Edited'
			});
		});
	}

	if(details == 'delete')
	{
		var id = request.body.id;

		var query = `DELETE FROM customer_data WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Deleted'
			});

		});
	}

});

module.exports = router;

///run code ==> npm start