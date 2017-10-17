// dependencies
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
// imports
const router = require('./router/router.js');
const db = require('../db/config.js');
// express instantiation
const app = express();
const port = process.env.PORT || 8080;
// middleware
const restrict = function(req, res, next) {
  if (req.session.uuid || req.url === '/login') {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
};

app.use(session({
  secret: 'please dear god let me out of here',
  cookie: {
    secure: true,
    maxAge: 60000,
   },
}));

// app.use(restrict);
app.use(parser.json());
app.use(parser.urlencoded());
app.use(cors());
//routes
app.use(express.static(path.resolve(__dirname, '../client/static/')));
app.use('/api', router);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/static/index.html'));
})
// sync db, start a UNIX socket and listen for connections
db.User.sync().then(() => app.listen(port, () => console.log("Listening on port " + port)));