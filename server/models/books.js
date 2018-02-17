	var mongoose = require('mongoose')
	var Book = function (){

		var courseSchema = mongoose.Schema({
			title:{
				type: String,
				required: true
			},
			description:{
				type: String
			},
		},{ _id : false });

		var bookSchema = mongoose.Schema({
			title:{
				type: String,
				required: true
			},
			description:{
				type: String
			},
			author:{
				type: String,
				required: true
			},
			image_url:{
				type: String
			},
			courses: [courseSchema], 
			userid: {
				type: mongoose.Schema.ObjectId,
				required: true,
			},
			create_date:{
				type: Date,
				default: Date.now
			}
		});
		this.Books = mongoose.model('Book', bookSchema);
		return this;
	}
	// Get Books 
	Book.prototype.getBooks = function(callback, limit) {
		this.Books.find(callback).limit(limit);
	}

	Book.prototype.addBook = function(book, callback){
		this.Books.create(book, callback);
	}

	Book.prototype.getBookByUser = function (id, callback) {
		var query = {userid: mongoose.Types.ObjectId(id)};
		console.log(query);
		this.Books.find(query, callback).limit();
	}

	module.exports = Book;
