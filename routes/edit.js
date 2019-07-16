var express = require('express');
var router = express.Router();
var fs = require('fs');
const path = './routes/';


router.get('/', function(req, res, next) {
  res.render('edit/index', { title: 'SoEasy' });
});

router.get('/web', function(req, res, next) {
  var text=fs.readFileSync(path+'edit.js', 'utf8');
  res.render('edit/edit', { title: 'EDIT', edit:text});
});

router.get('/editor', function(req, res, next) {
  var text=fs.readFileSync(path+'edit.js', 'utf8');
  res.render('edit/editor', { title: 'EDITOR', edit:text});
});



module.exports = router;