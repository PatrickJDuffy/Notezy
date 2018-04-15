var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./util');

var aboutUsSchema = new Schema({
    developer_name: { type: String, required: true },
    course: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('aboutus', aboutUsSchema);