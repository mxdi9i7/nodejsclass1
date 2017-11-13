var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@ds259305.mlab.com:59305/class2', {useMongoClient: true})
var x = 1;
module.exports = {
    connection: mongoose.connection
}