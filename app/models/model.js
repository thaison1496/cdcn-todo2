var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = Schema({
	todo: {
		type: String
	},
	completed: {
		type: Boolean,
		default: false
	}
});

var TodoModel = mongoose.model('todo', TodoSchema);
module.exports = TodoModel;

 