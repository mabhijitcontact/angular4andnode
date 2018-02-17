var express = require('express');
var authRouter = express.Router();

// Calling Mongoose Models 
User = require('../models/users');

authRouter.post('/login', function (req,res) {
	username = req.body.username;
	password = req.body.password;

	User.getUserByUsername(username, function(err, userObj){
		if(err) throw err;
		if(!userObj){
			res.send(404, {message: "Not Authorized"});
		}
 
		User.comparePassword(password, userObj.password, function(err, isMatch){
			if(err) throw err;
			if(isMatch){
				res.json({ user: userObj, isLoggedIn: true });
			} else {
				res.send(404, {message: "Not Authorized"});
			}
		});
	});
});

authRouter.post('/logout', function (req,res) {
	res.json({ user: '', isLoggedIn: false });
});

authRouter.post('/register', function(req, res) {
	console.log(req.body);
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	if(errors){
		res.send('error');
	} else {
		var newUser = new User({
			name: name,
			email:email,
			username: username,
			password: password
		});

		User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});
		res.send('success');
	}
});

module.exports = authRouter;
