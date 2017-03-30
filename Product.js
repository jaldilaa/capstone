var mongoose = require('mongoose');
var Schema 	 = mongoose.Schema;

var ProductSchema = new Schema({
	sku : {type: String, default: '', unique:true},
	name : {type : String, default:''},
	brand : {type : String, default:'Jaldila'},
	description : {type: String, default:'100gm'},
	price : {type : Number, default:''},
	sold : {type : Number, default: '0'},
	isFav : {type : Boolean, default: 'false'}
})

ProductSchema.index({name : 'text', '_id':'ObjectId'});
module.exports = mongoose.model('Product',ProductSchema);