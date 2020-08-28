'use strict';
const mysql = require('mysql');//local mysql db connection
const dbConn = mysql.createConnection({  
    host     : 'localhost',  
    user     : 'root',  
    password : '', // Use Your Password for connection DB      
    database : 'test-mkm'
});
dbConn.connect(function(err) {  
    if (err) throw err;  console.log("Database Connected!");
});
module.exports = dbConn;