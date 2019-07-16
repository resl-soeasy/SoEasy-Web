var express = require('express');
var router = express.Router();

var mysqlDB = require('./mysql-db');

/* GET users listing. */
router.get('/', function (req, res, next) {
    mysqlDB.query('select * from pinmap', function (err, result) {
        if (!err) {
            if (result[0] != undefined) {
                res.render('table/index', {title: 'TABLE', results: result});
            } else {
                res.send('no data');
            }
        } else {
            res.send('error : ' + err);
        }
    });
});

router.get('/edit/:phy', function(req, res, next) {
    mysqlDB.query('select * from pinmap where phy = ?', [req.params.phy], function(err, result){
        if (!err) {
            if (result[0] != undefined) {
                res.render('table/edit', {title: 'EDIT', results: result});
            } else {
                res.send('no data');
            }
        } else {
            res.send('error : ' + err);
        }
    });
});

/* POST */
router.post('/update', function (req, res, next) {
    var id = req.body.id;
    var mode = req.body.mode;
    var value = req.body.value;
    console.log(mode);
    console.log(value);
    res.redirect('back');
});


module.exports = router;