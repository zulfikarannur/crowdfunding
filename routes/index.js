var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Testing associations 1
// router.get('/',function (req,res,next) {
//   db.
// })

module.exports = router;
