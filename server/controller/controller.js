// dependencies
const Promise = require('bluebird');
const bcrypt = require('bcrypt');
const session = require('express-session');
const uuid = require('uuid/v4');
// imports
const DB = require('../../db/config.js');
// password comparer
const comparePasswords = (inputPassword, storedPassword) => {
  return new Promise ((resolve, reject) => {
    bcrypt.compare(inputPassword, storedPassword, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};
// checks for an existing user and either creates a new user or redirects to root
module.exports.signUp = (req, res) => {
  DB.User.findOne({where: {
    username: req.body.username,
  }}).then((result) => {
    if (!result) {
      DB.User.create({
        username: req.body.username,
        password: req.body.password,
        uuid: uuid(),
      }).then((newUser) => {
        res.status(201).send(newUser)
      }).catch((err) => {
        res.status(404).send(err);
      });
    }
    else {
      res.redirect('/');
    }
  }).catch((err) => {
    res.status(404).send(err);
  })
};

 module.exports.logIn = (req, res) => {
  DB.User.findOne({
    where: {
      username: req.body.username,
    },
    raw: true,
  }).then((user) => {
    if (user) {
      comparePasswords(req.body.password, user.password).then((correctPassword) => {
        if (correctPassword) {
          req.session.uuid = user.id;
          console.log('====================================')
          console.log(req.session);
          console.log('====================================')
          res.status(201).send('successful login');
        } else {
          res.redirect('/');
        }
      }).catch((err) => {
        res.status(404).send(err);
      })
    } else {
      res.redirect('/');
    }
   }).catch((err) => {
    res.status(404).send(err);
  })
 };

 module.exports.logOut = (req, res) => {

 };
 
