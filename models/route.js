var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RouteSchema = new Schema({
    name : String,
    zeit: Number,
    stations: []
});

module.exports = mongoose.model('Route', RouteSchema, 'routes');