// const mongoose =  require('mongoose')

// var db =  mongoose.connect('mongodb://localhost/myNewDB');
// var mySchema= mongoose.Schema

var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var goalCollecton = new Schema({
	"goal_title":{ type: String },
	"goal_subtitle":{ type: String },	
	'user_id': { type: String },
	'category_id': { type: String },

	'description': { type: String },
	'secret': { type: String, enum: ['public', 'private', 'friends'] },
	'comments_count': { type: Number },
	'likes_count': { type: Number },
	'goel_location': { type: String },
	'goel_deadline_days': { type: Number },


	'created_date' : {type: Date},
	'updated_date' : {type: Date}

})

module.exports = mongoose.model('goal',goalCollecton)