var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SoEasy' });
});

router.get('/testPage', function(req, res, next) {
  res.render('testPage', { title: 'SoEasy' });
});

module.exports = router;
