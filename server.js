var express = require('express');
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

global.mongoose = mongoose;
global.mObjectID = mongoose.Types.ObjectId;

var app = express();

//Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/bookstore");
var db = mongoose.connection;

//API file for interacting with MongoDB
var api = require('./server/routes/api');
//API file for Login and Registration
var auth = require('./server/routes/auth');

//parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Angular DIST output folder
app.use(express.static(path.join(__dirname, "dist")));

// API location 
app.use('/api', api);
app.use('/auth', auth);

// send all other request to the Angular app
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});