var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var userCollection = new Schema({
	'name': { type: String },
	'email': { type: String },
	'phone': { type: String },
	'device': [{
		'device_id' : {type: String},
		'device_name' : {type: String},
		'gcm_id' : {type: String},
		'apns_id' : {type: String},
	}],
	'last_log_date' : {type: Date},
	'created_date' : {type: Date},
	'updated_date' : {type: Date},
	'login_status' : {type: Boolean},
	'profile_pic' : {type: String},
	'fb_id' : {type: String}

})

module.exports = mongoose.model('user',userCollection)