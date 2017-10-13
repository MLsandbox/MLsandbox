let url = require('./config').url;
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = mongoose.createConnection(url, { config: {autoIndex: false} }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to db')
  }
});

module.exports = { db }