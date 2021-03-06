var express = require('express'),
  app = express();

var vegetables = [
        "Carrots",
        "Cucumber",
        "Peas"
         ];

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  // use res.render
  res.render('index', {name: "Elie"});
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/vegetables", function (req, res) {
  //send all the veggies
  res.send(vegetables.join(", "));
});

app.get("/hello/:name", function (req, res) {
  res.send( "Hello, " + req.params.name );
});

app.get("/hi", function (req, res) {
  var name = req.query.name;
  res.send("Hello, " + name);
});

app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});
