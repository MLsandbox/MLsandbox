const path = require('path');
const url = require('url');
const utils = require('../utils/http-helpers.js');
const DB = require('../../db/config.js');
const controller = require('../controller/controller.js');

const actions = {

  POST: (req, res) => {
    let endPoint = url.parse(req.url).pathname;
    if (endPoint === '/api/signUp') {
      controller.signUp(req, res);
    }
  },

  GET: (req, res) => {
    let parsedUrl = url.parse
  }

}; 

exports.handleRequest = function(req, res) {
  var action = actions[req.method];
  action ? action(req, res) : utils.send404(res);
};
