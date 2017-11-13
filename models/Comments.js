var mongoose = require('mongoose');
var db = require('../config.js').connection;

var commentSchema = mongoose.Schema({
    author: String,
    body: String,
    created_at: Date
})

var Comments = mongoose.model('Comments', commentSchema);

// commentSchema.methods.bombify = () => {
//     var newBomb = this.body + "bombb";
//     console.log(newBomb)
// }
module.exports = Comments