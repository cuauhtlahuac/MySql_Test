const connection = require('./modules/sqlconnections.js');
const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
const nsconnection = connection.lhconnection;
app.set("view engine", "ejs");
let queryIdea = 'SELECT Folio, RutaImagen1, fechav3, CantGastada FROM sncideacapproc01 WHERE MID(sncideacapproc01.Folio,4,3) =';

var qFolio = "000";

nsconnection.connect(function(error, results, fields){
    if(error){
      throw error;
    }
    console.log(`mySql Conected ...`);
});

app.get('/newpost',function(req,res){
  if(qFolio == "000"){
    res.redirect('/id');
  };
  let query = nsconnection.query((queryIdea + qFolio),function(err, results){
  if(err) throw err;
  //console.log(results);
  res.render('mysql.ejs',{sqldos: results})
  });
  });


app.get('/id',function(req,res){
    res.render('idTienda.ejs');
  });

app.post('/id',function(req,res){
  qFolio = req.body.getidTienda;
  console.log(`${qFolio} ${typeof(qFolio)}`);
  res.redirect('/newpost');
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
let t = 0
app.listen('3000', () => {
  console.log('server conected in port 3000');
setInterval(function () {
  t++;
  console.log("init");
}, 1000);
setTimeout(function(){
  console.log("-10000-");},
  10000);
});
