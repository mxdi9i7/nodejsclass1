var express = require('express');
var router = express.Router();
var Comments = require('../models/Comments.js');



router.get('/', function(req, res, next) {
    Comments.find({
        author: "James"
    }).sort({
        _id: -1
    }).limit(1).exec((err, data) => {
        console.log(data)
        res.render('posts', { 
            title: 'posts title',
            name: 'Peter ZHeng',
            age: 20
        });
    })
});
router.get('/initializePage', (req, res) => {
    Comments.find().exec((err, data) => {
        res.json(data)
    })
})

// router.post('/editComment', (req, res) => {
//     const id = req.body.id;
//     Comments.findById(id, (err, comment) => {
//         Comments = 
//     })
// })
router.post('/deleteComment', (req, res) => {
    const id = req.body.id;
    Comments.remove({_id: id})
    .exec((err, data) => {
        res.json(data)
    })
})
router.post('/addNewComment', (req, res, next) => {
    var newComment = new Comments({
        author: req.body.author,
        body: req.body.comment,
        created_at: new Date()
    })
    newComment.save((err, data) => {
        res.json(newComment)
    })
})
module.exports = router;