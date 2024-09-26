var mysql = require("mysql2");
const cheerio = require('cheerio');
const fs = require('fs');

String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};

// Load the DB file
var con= mysql.createConnection({
     host:"localhost",
     user : "root",
     password : "Sheru1974#",
     database : "adamms"
});

con.connect();

//User_Main
const user_main = fs.readFileSync('C:/Users/bhatn/Desktop/College/Hackathon/SIH2024-BU_Internal/Website/register.html', 'utf-8');
const d1 = cheerio.load(user_main);

//const user = d1('#username');
//const pwd = d1('#password');
//const mail = d1('#email');

//var sql = "INSERT INTO user_main * VALUES {}".format((cnt, user, pwd, mail));

con.query("select * from user_main", function(err, result, fields){
  if (err) throw err;
  console.log(result);
});

con.end();