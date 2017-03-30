var mongoose = require('mongoose');
var Schema 	 = mongoose.Schema;
var Product  = require('./Product');

var DeptSchema = new Schema({
	category : {type: String, default: 'Jaldila'},
	name : {type : String, default:'', unique:true},
	sku : {type : String, default:'', unique:true},
	brands : [String],
	Product : [Product.Schema]
});

DeptSchema.index({name : 'text', 'Product.name': 'text'});
module.exports = mongoose.model('Dept', DeptSchema);