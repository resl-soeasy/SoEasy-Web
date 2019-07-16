var express = require('express');
var router = express.Router();
const path = './backup';
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('setting/index', { title: 'SETTING' });
});

router.get('/main', function(req, res, next) {
  res.render('setting/main', {title: 'MAIN' });
});

router.get('/color', function(req, res, next) {
  res.render('setting/color', {title: 'COLOR' });
});

router.get('/timer', function(req, res, next) {
    res.render('setting/timer', {title: 'TIMER' });
});

router.get('/backup', function(req, res, next) { 
  var dirArr = fs.readdirSync(path, 'utf8');
  console.log(dirArr);
  res.render('setting/backup', {title: 'BACKUP', results: dirArr});
  dirArr = [];
});

/* POST */
router.post('/new_backup', function(req, res, next) {
  var name = req.body.name;
  console.log("## post request:" + name); 
  var exec = require('child_process').exec;

  var cmd = 'mysqldump -p soeasy > ' + path +'/'+ name + '.sql';

  console.log(cmd); 

  child = exec(cmd, function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('exec error: ' + error);
      }
  });
  res.redirect('back');
});

router.get('/first', function(req, res, next) {
  res.render('setting/first', {title: 'First Setting' });
});

router.get('/info', function(req, res, next) {
  res.render('setting/info', {title: 'INFO' });
});

module.exports = router;