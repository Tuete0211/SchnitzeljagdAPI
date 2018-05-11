var express = require('express');
var router = express.Router();
var Station = require('../models/station');
var Route = require('../models/route');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Schnitzeljagd' });
});

router.get('/stations', function (req, res) {
    Station.find({}, function (err, stations) {
        if(err){
          return console.error(err);
        }
        else{
          res.json(stations);
        }
    });
});

router.get('/routes', function (req, res) {
    Route.find({}, function (err, routes) {
        if(err){
            return console.error(err);
        }
        else{
            //res.toJSON(routes);
            //res.setHeader('Content-Type', 'application/json');
            res.json(routes);
        }
    });
});

router.get('/station/:number', function (req, res) {
    Station.find({number: req.params.number.toUpperCase()
    }, function (err, stations) {
        if (err) {
            return console.error(err);
        }
        else {
            res.json(stations);
        }
    });
})

module.exports = router;
