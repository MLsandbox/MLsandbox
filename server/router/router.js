const path = require('path');
const url = require('url');
const utils = require('../utils/http-helpers.js');
const DB = require('../../db/config.js');

const actions = {

  POST: (req, res) => {
    
    let parsedUrl = url.parse(req.url);
    let endPoint = parsedUrl.pathname === '/' ? '/index.html' : parsedUrl.pathname;

    let data = utils.prepareResponse(req, (data) => {
      
      console.log('====================================')
      console.log(data.username);
      console.log('====================================')

      DB.User.create({
        username: data.username,
        password: data.password,
        sandbox1: null,
        sandbox2: null,
        sandbox3: null,
      }).then((newUser) => {
        utils.respond(res, newUser, statusCode);
      }).catch((err) => {
        utils.send404(res);
      });
      
    });

  },

}; 

exports.handleRequest = function(req, res) {
  var action = actions[req.method];
  action ? action(req, res) : utils.send404(res);
};
