//const Joi = require('joi');
const express = require('express');
const app = express();
//var db = require('./database');
var sql = require("mssql");


var config = {
    user: 'sa',
    password: '123456',
    server: 'localhost', 
    database: 'railway2' 
};

sql.connect(config, function (err) {
    if (err) console.log(err);
    // create Request object
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());


  //log in
app.post('/api/login', (req, res) => {
    const newlogin = {
      name: req.body.username,
      password: req.body.password
    };
    var request = new sql.Request();
    // query to the database and get the records
    request.query(`SELECT * FROM Passenger  WHERE PassName = '${req.body.username}' AND PassPassword = '${req.body.password}' ` , function (err, result) {
        // send records as a response
        if (result.rowsAffected == "0") {
          err = true ;
        }
        console.log(result);
        console.log(result.rowsAffected);
        if (err) return res.status(404).send('the username does not exist');
        res.status(200).send("success log in");
      });
    //console.log("sql code to make sure the user is existed");
  });

  //new sign up
app.post ('/api/signup', (req, res)=>{
  const newsignup = {
    name: req.body.username,
    password: req.body.password,
    email : req.body.email ,
    age : req.body.age,
    card : req.body.card,
    gender : req.body.gender
  };
  //let info = [newsignup.name ,newsignup.email, newsignup.password,newsignup.gender, newsignup.age, newsignup.card];
  var request = new sql.Request();
  request.query(`INSERT INTO Passenger (PassName , PassEmail ,PassPassword, PassGender , PassAge, passcard) VALUES ('${newsignup.name}' ,'${newsignup.email}','${newsignup.password}','${newsignup.gender}', '${newsignup.age}', '${newsignup.card}') `  , function (err, recordset) {
    if (err) return res.status(404).send("you can not sign up!");
    res.status(200).send("signed up successfully!");
    console.log(err);
    console.log(recordset);
  });
  //console.log("sql code to add user");
});



  //clerk
  //clerk log in 
  app.post('/api/clerklogin', (req, res) => {
    const newlogin = {
      name: req.body.username,
      password: req.body.password
    };
    var request = new sql.Request();
    // query to the database and get the records
    request.query(`SELECT * FROM Clerk  WHERE ClerkName = '${req.body.username}' AND ClerkPassword = '${req.body.password}' ` , function (err, recordset) {
        // send records as a response
        if (recordset.rowsAffected == "0") {
          err = true ;
        }
        if (err) return res.status(404).send('the username does not exist');
        res.status(200).send("success log in");
        console.log(recordset);
      });
    
    //console.log("sql code to make sure the user is existed");
  });
  //delete clerk
app.delete('/api/clerks/:password', (req, res) => {
  const clerk ={
    password : req.params.password 
  }
  console.log(req.params.password);
  var request = new sql.Request();
  request.query(`DELETE FROM Clerk WHERE ClerkPassword = '${req.params.password}'` , function (err, result) {
    if (err) return res.status(404).send('The clerk with the given ID was not found.');
    res.send(200).send("the clerk was deleted!");
  });
  //console.log("code to delete the clerk with given id ");
  });
//clerk update
app.put ('/api/clerks',(req,res) => {
  const clerk = {
    password : req.body.password ,
    name : req.body.username
  };
  var request = new sql.Request();
  request.query(`UPDATE Clerk SET ClerkName = '${clerk.name}' WHERE ClerkPassword ='${clerk.password}'`,function (err, result) {
    if (err) return res.status(404).send('The clerk with the given ID was not found.');
    res.send(200).send("the clerk updated!");
  });
  //console.log("code to find this clerk and update ");
});
//add clerk
app.post ('/api/clerks', (req, res)=>{
  const newclerk = {
    name: req.body.username,
    password : req.body.password 
  };
  var request = new sql.Request();
  //let clerkinfo = [newclerk.name ,newclerk.id];
  request.query(`INSERT INTO Clerk (ClerkName, ClerkPassword) VALUES ('${newclerk.name}' ,'${newclerk.password}')`, function (err, recordset) {
    if (err) return res.status(404).send("you can not be added!");
    res.status(200).send("added!");
  });
  //console.log("sql code to add clerk");
});



//train add train
app.post ('/api/train', (req, res)=>{
  const newtrain = {
    id : req.body.id ,
    name: req.body.name,
    sequence : req.body.sequence,
    coach : req.body.coach
  };
  //let traininfo = [newtrain.id ,newtrain.name,newtrain.sequence, newtrain.coach];
  var request = new sql.Request();
  request.query(`INSERT INTO Train (TID, TrainName,TrainSeq,CoachID) VALUES ('${newtrain.id}' ,'${newtrain.name}' ,'${newtrain.sequence}', '${newtrain.coach}')`, function(err, result) {
    //console.log(err);
    if (err) return res.status(404).send('the train can not be added');
    res.status(200).send("you added new train");
  });
});
  //delete train
app.delete('/api/train/:id', (req, res) => {
  const train ={
    id : req.params.id 
  };
  var request = new sql.Request();
  request.query(`DELETE FROM Train WHERE TID = ${train.id}` , function (err, result) {
    console.log(err);
    if (err) return res.status(404).send('The train with the given ID was not found.');
    res.send(200).send("the train was deleted!");
  });
  //console.log("code to delete the clerk with given id ");
  });
  //train update
app.put ('/api/train',(req,res) => {
  const train = {
    id : req.body.id ,
    name: req.body.name,
    sequence : req.body.sequence,
    coach : req.body.coach
  };
  var request = new sql.Request();
  request.query(`UPDATE Train SET TrainName = '${train.name}', TrainSeq = '${train.sequence}' , CoachID = '${train.coach}' WHERE TID ='${train.id}'`,function (err, result) {
    //console.log(err);
    if (err) return res.status(404).send('The train with the given ID was not found.');
    res.send(200).send("the train updated!");
  });
  //console.log("code to find this clerk and update ;
});




//booking 
app.post ('/api/booking', (req, res)=>{
  const booking = {
    fromstat: req.body.fromstat,
    tostat: req.body.tostat,
    traveldate:req.body.traveldate,
    traveltime : req.body.traveltime,
    class : req.body.class,
    bookdate: req.body.bookdate,
    booktime: req.body.booktime
  };
  //console.log(booking.class);
  //console.log(booking.traveldate);
  //console.log(booking.bookdate);
  var request = new sql.Request();
  //let bookinginfo = [booking.fromstat ,booking.tostat, booking.traveldate, booking.traveltime, booking.trainid, booking.class, booking.bookdate,booking.booktime];
  request.query(`INSERT INTO Booking (FromStat, ToStat, TravelDate, TravelTime, class, BookDate, BookTime) VALUES ('${booking.fromstat}' ,'${booking.tostat}', '${booking.traveldate}', '${booking.traveltime}', '${booking.class}', '${booking.bookdate}','${booking.booktime}')`, function(err, result) {
    //console.log(err);
    if (err) return res.status(404).send('you can not book!');
    res.status(200).send(" booked!");
  });
  //console.log("sql code to add new booking");
});

// to get all trains
app.get ('/api/train',(req,res)=>{
  var request = new sql.Request();
  request.query("SELECT * FROM travels", function (err, recordset) {
    if (err) console.log(err)
    // send records as a response
    res.status(200).send(recordset);
    //console.log(recordset);
  });
});

//admin log in 
app.post('/api/adminlogin', (req, res) => {
  const newlogin = {
    name: req.body.username,
    password: req.body.password
  };
  var request = new sql.Request();
  // query to the database and get the records
  request.query(`SELECT * FROM Adminn  WHERE AdminName = '${newlogin.name}' AND AdminPassword = '${newlogin.password}' ` , function (err, result) {
      // send records as a response
      if (result.rowsAffected == "0") {
        err = true ;
      }
      console.log(result);
      console.log(result.rowsAffected);
      if (err) return res.status(404).send('the username does not exist');
      res.status(200).send("success log in");
    });
  //console.log("sql code to make sure the user is existed");
});


app.listen(3000);