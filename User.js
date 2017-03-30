var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;
var Order         = require('./Order');

var UserSchema    = new Schema({
		userid: {type : Number, default: '', unique:true},
		address: {type : String, default: ''},
		orders : [{type: Schema.Types.ObjectId, ref:'Orders'}]   
})
// UserSchema.index({userid: 'Number'});
module.exports    = mongoose.model('Users', UserSchema);
