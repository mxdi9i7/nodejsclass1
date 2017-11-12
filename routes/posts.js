var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds259305.mlab.com:59305/class2', {useMongoClient: true})
var db = mongoose.connection;
mongoose.Promise = global.Promise;
var cat = mongoose.model('cat', {name: String});
console.log(db)
router.get('/', function(req, res, next) {
    commentsCollection.find((data) => {
        console.log(data, db)
        res.render('posts', { 
            title: 'posts title',
            name: 'Peter ZHeng',
            age: 20
        });
    })
});
router.get('/:username/:password', function(req, res, next) {
    var { username } = req.params;
    var { password } = req.params;

    trumpify = (x) => {
        return x + "trump"
    }
    addTwo = (y) => {
        return y + 2
    }

    var peter = {
        username: trumpify(username),
        password: trumpify(password),
        age: addTwo(30),
        married: false
    }
    res.json(peter)
})

router.post('/addNewComment', (req, res, next) => {
    
    console.log(req.body)
    res.json(req.body)
})
module.exports = router;