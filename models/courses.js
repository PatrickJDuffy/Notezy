var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./util');

var coursesSchema = new Schema({
    college: {type: String},
    course_name: {type: String},
    course_code: {type: String},
    course_leader: {type: String},
    date_created: {type: Date, default: new Date()},
});

module.exports = mongoose.model('Course', coursesSchema);