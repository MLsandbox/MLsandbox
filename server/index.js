// dependencies
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
// imports
const router = require('./router/router.js');
const db = require('../db/config.js');
// express instantiation
const app = express();
const port = process.env.PORT || 8080;
// middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(session({
  secret: 'please dear god let me out of here',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    maxAge: 60000,
   },
}));

const restrict = function(req, res, next) {
  if (req.session.uuid || req.url === '/login') {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/');
  }
};

//app.get('*.js', function (req, res, next) {
//  req.url = req.url + '.gz';
//  res.set('Content-Encoding', 'gzip');
//  next();
//});
//routes
app.use(express.static(path.resolve(__dirname, '../static')));

app.use('/api', router);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../static/index.html'));
})
// sync db, start a UNIX socket and listen for connections
db.User.sync().then(() => app.listen(port, () => console.log("Listening on port " + port)));
