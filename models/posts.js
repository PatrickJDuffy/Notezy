var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./util');

var postsSchema = new Schema({
    user_name: { type: String },
    post_title: { type: String },
    post_content: { type: String },
    post_file: { type: String },
    date_created: { type: Date, default: new Date() },
    up_votes: { type: Number, default: 0 },
    down_votes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Post', postsSchema);