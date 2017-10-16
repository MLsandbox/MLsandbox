// dependencies
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
// file imports
const router = require('./router/router.js');
const db = require('../db/config.js');
// express instantiation
const app = express();
const port = process.env.PORT || 8080;
// middleware
app.use(parser.json());
app.use(parser.urlencoded());
app.use(cors());
//routes
app.use(express.static(path.resolve(__dirname, '../client/static/')));
app.use('/api', router);
// sync db, start a UNIX socket and listen for connections
db.User.sync({force: true}).then(() => app.listen(port, () => console.log("Listening on port " + port)));