// dependencies
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
// file imports
// const router = require('./router/router.js');
const db = require('../db/config.js');
// express instantiation
const app = express();
const port = process.env.PORT || 8080;
// middleware
app.use(parser.json());
app.use(parser.urlencoded());
app.use(cors());
// app.use('/api', router);
app.use(express.static(__dirname + '../client/static/index.html'));
// sync db, start a UNIX socket and listen for connections
db.User.sync({force: true}).then(() => app.listen(port, () => console.log("Listening on port " + port)));