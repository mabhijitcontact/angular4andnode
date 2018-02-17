var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var NewBook = require('../models/books');

var newInstance = new NewBook();
router.get('/books/:_id', (req, res) => {
	var id = req.params._id;
    newInstance.getBookByUser(id, (err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

router.get('/books', (req, res) => {
    newInstance.getBooks((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});



router.post('/books',function(req, res){
	var book = req.body

	console.log(book);
	newInstance.addBook(book, function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

module.exports = router;