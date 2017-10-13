let url = require('./config').url;
let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(url)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});