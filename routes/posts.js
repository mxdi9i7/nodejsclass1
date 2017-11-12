var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://admin:admin@ds259305.mlab.com:59305/class2');
mongoose.Promise = global.Promise;
var cat = db.model('cat',{name: String});
var commentsModel = db.model('comments',new mongoose.Schema({_id:mongoose.Schema.Types.ObjectId,author: String,body:String,date:String}));
router.get('/', function(req, res, next) {
    commentsModel.find({},(err,data) => {
        if(err){
            throw err;
        }
        console.log(data)
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
    const stringify = req.body;
    console.log(req.body);
    const insert = new commentsModel ({_id:new mongoose.Types.ObjectId,author:stringify.author,body:stringify.comment,date:stringify.date})
    insert.save((err,docs)=>{
        if(err){
            res.json(err)
        }else{
            res.json(docs)
        }
    })
})
module.exports = router;
