var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');

let Opinion = require("../model/topics")
let Comment = require("../model/comment")

/* GET home page. */
router.get('/', function(req, res, next){
  Opinion.find({}, function(err, topics){
    if(err){
      console.log(err);
    } else {
      res.render("index", {
        'title':'Topics',
        topics:topics,
        
      })
    }
  });
});

router.post('/topic', function(req, res, next) {
  Opinion.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/comment', function(req, res, next) {
  Comment.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/balu', function(req, res, next) {
  res.render('index', { title: 'Balu' });
});



module.exports = router;
