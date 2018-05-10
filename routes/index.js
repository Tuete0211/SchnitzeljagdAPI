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

/*
router.get('/all', function (req, res) {
   var MongoClient = mongodb.MongoClient;

   var url = 'mongodb://localhost:27017/shDB';

   MongoClient.connect(url, function (err, db) {
       if(err){
           console.log('Unable to connect to server', err);
       }else{
           console.log('Connection Established');
           var collection = db.collection('sh');
           collection.find({}).toArray(function (err, result) {
               if(err){
                   res.send(err);
               }else if (result.length){
                   res.json(result);
               }else {
                   res.send('No doc found');
               }
               db.close();
           });
       }
   })
});
*/

module.exports = router;
