var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var photosCollecton = new Schema({
	'goal_id': { type: String },
	'photo_url': { type: String },
	'photo_description': { type: String }
})

module.exports = mongoose.model('photos',photosCollecton)