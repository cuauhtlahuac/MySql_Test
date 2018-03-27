var connection = require('./modules/sqlconnections.js');
const express = require('express');
var ejs = require('ejs');
const app = express();

const nsconnection = connection.nsconnection;

let queryIdea = 'SELECT Folio, RutaImagen1, fechav3, CantGastada FROM sncideacapproc01 WHERE MID(sncideacapproc01.Folio,4,3) =';

nsconnection.connect(function(error, results, fields){
    if(error){
      throw error;
    }
    console.log(`mySql Conected ...`);
});

app.get('/newpost',function(req,res){
  let qFolio = '001';
  let query = nsconnection.query((queryIdea + qFolio),function(err, results){
    if(err) throw err;
  console.log(results);
  res.render('mysql.ejs',{sqldos: results})
  });
  });

app.post('/idTienda',(req,res) => {
  res.render('idTienda.ejs');
});


  app.get('/*', (req,res) => {
    res.send("page not found.\n Página no encontrada.")
  })

//connection.connect();

/*connection.query('SELECT * FROM sncfases AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});*/

//connection.end();

/*
template to create a Connection with any MySQL data base.

const nsconnection = mysql.createConnection({
host: '0000000',
user: 'any user',
password: '****',
database: 'anydb'
});

*/

app.listen('3000', () => {
  console.log('server conected in port 3000');
});
