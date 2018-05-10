var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StationSchema = new Schema({
    name: String,
    number: Number,
    expanded: Boolean,
    lat: Number,
    lng: Number,
    visible: Boolean
});

module.exports = mongoose.model('Station', StationSchema, 'stations');