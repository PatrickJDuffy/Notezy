var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./util');

var collegesSchema = new Schema({
    college_name: {type: String},
    address: {type: String},
    date_created: {type: Date, default: new Date()},
});

module.exports = mongoose.model('College', collegesSchema);