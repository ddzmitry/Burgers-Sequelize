var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var db = require("./models");

var app = express();

app.use(express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({
    extended: false
}));
// override 
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./routes/burgersRouts.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);


// listen on port 
var port = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
    app.listen(port);
});


console.log(module.exports);