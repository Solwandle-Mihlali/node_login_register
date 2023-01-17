
const { connect } = require('http2');
var mysql = require('mysql');

let connection = mysql.createConnection(

    {
        host: "localhost",
        user: "root",
        password: "",
        database: "testdb"
    }
);

connection.connect(function(err)
 
 {
    if(err) throw err;
    console.log("connected succesfully")

    var query = "INSERT INTO tbl_test (Name,Surname,Email,Password) Values('Mihlali','Solwandle','mihlali@factsa.co.za','Scalds*Fred1')";

    connection.query(query,function(err,result)
         
        {
            if(err) throw err;
            console.log('1 entry added')
        }
    
     )
 } 
)