var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
    model.pinmap.findAll().then(function(results){
        res.render('table/index', {
            title: 'TABLE',
            results: results
        });
    }).catch(function(err){
        console.log("NO DATA");
    });
});

router.get('/edit/:phy', function(req, res, next) {
    model.pinmap.findAll({
        where: {phy:req.params.phy}
    }).then(function(results){
        res.render('table/edit', {
            title: 'EDIT',
            results: result
        })
    }).catch(function(err){
        console.error("ERROR");
    })
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