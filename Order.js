var mongoose = require('mongoose');
var Schema 	 = require.Schema;
var User 	 = require('./User');
var Dept	 = require('./Dept');
var Product  = require('./Product');

var OrderSchema = new Schema({
	OrderDate : {type : Date, default : Date.now()},
	userid : {type : Number, ref : 'User', default: '0'},
	totalPrice : {type : Number, default: '0'},
	totalQuantity: {type : Number, default : '0'},
	status : {type : Boolean, default : 'false'},
	items : [{
		_id : {type: Schema.Types.ObjectId, ref:'Product'},
		quantity : {type : Number, default : '0'}
	}]
}]

module.exports = mongoose.model('Orders', OrderSchema);