var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var goalActionsCollecton = new Schema({
	'goal_id': { type: String },
	'comment': [{
		'user_id': { type: mongoose.Schema.Types.ObjectId },
		'user_name': { type: String },
		'user_photo': { type: String },
		'text': { type: String } 
	}],
	'likes': [{
		'user_id': { type: mongoose.Schema.Types.ObjectId },
		'user_name': { type: String },
		'user_photo': { type: String }
	}],
	
	'created_date' : {type: Date},
	'updated_date' : {type: Date},

})

module.exports = mongoose.model('goalactions', goalActionsCollecton)