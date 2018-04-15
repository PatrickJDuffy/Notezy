var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./util');

var modulesSchema = new Schema({
    course_code: {type: String},
    module_name: {type: String},
    module_code: {type: String},
    lecturer: {type: String},
    date_created: {type: Date, default: new Date()},
});

module.exports = mongoose.model('Module', modulesSchema);