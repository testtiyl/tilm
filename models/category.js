var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var categoryCollecton = new Schema({
	'category_name': {type: String },
	'description': { type: String },
	'is_active': { type: Boolean },
	'number_of_goals': { type: Number }
})

module.exports = mongoose.model('category',categoryCollecton)