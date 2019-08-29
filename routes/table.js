var express = require('express');
var router = express.Router();
var model = require('../models/index');
var dgram = require('dgram');

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

router.post('/pin', function (req, res, next) {
    var client = dgram.createSocket('udp4');
    console.log(req.body["index"]);
    client.send(JSON.stringify({index:req.body["index"]}), 0, JSON.stringify({index:req.body["index"]}).length, 9980, "localhost", function(err, bytes) {
        if (err) {
            res.status(500).send({result:"error"});
        }
        console.log('UDP message sent to');
        res.send('success');
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