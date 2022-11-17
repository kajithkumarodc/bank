const mysql = require('mysql'); // This code it will include MySQL under in this file

var connection = mysql.createConnection({
    host: "localhost",
    port: 9942,
    user: "root",
    password: "kumarodc",
    database: "bank"

});   // this function will make mysql database connection
connection.connect(function (error) { //this funtion used for ensure mysql connection
    if (error) {
        throw error;
    }
    else {
        console.log('mysql database connection success');
    }
});
module.exports = connection; // module dot expoort is equal to   connection variable   
