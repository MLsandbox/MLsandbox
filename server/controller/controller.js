// dependencies
const Promise = require('bluebird');
const bcrypt = require('bcrypt');
const session = require('express-session');
const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');
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
        const token = jwt.sign({
          id: newUser.dataValues.id,
          username: newUser.dataValues.username,
        }, process.env.JWTSECRET)
        res.status(201).send({ token })
      }).catch((err) => {
        res.status(404).send(err);
      });
    }
    else {
      console.log('user exists');
      res.status(201).send('exists');
    }
  }).catch((err) => {
    res.status(404).send(err);
  });
};
// looks for an existing user and, if one exists, adds user's uuid to session
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
          req.session.uuid = user.uuid;
          const token = jwt.sign({
            id: user.id,
            username: user.username,
          }, process.env.JWTSECRET)
          res.status(201).send({ token });
        } else {
          res.status(201).send('invalid');
        }
      }).catch((err) => {
        res.status(404).send(err);
      })
    } else {
      res.status(201).send('invalid');
    }
  }).catch((err) => {
    res.status(404).send(err);
  });
};

module.exports.deleteAccount = (req, res) => {
  DB.User.findOne({
    where: {
      username: req.body.username,
    },
    raw: true,
  }).then((user) => {
    if (user) {
      comparePasswords(req.body.password, user.password).then((correctPassword) => {
        if (correctPassword) {
          DB.User.destroy({
            where: {
              username: req.body.username,
            },
            raw: true,
          }).then((results) => {
            res.redirect('/');
          }).catch((err) => {
            res.status(404).send(err);
          })
        } else {
          res.status(404).send(err);
        }
      }).catch((err) => {
        res.status(404).send(err);
      })
    } else {
      res.status(404).send(err);
    }
  }).catch((err) => {
    res.status(404).send(err);
  });
};

module.exports.changePassword = (req, res) => {
  DB.User.findOne({
    where: {
      username: req.body.username,
    },
    raw: true,
  }).then((user) => {
    if (user) {
      comparePasswords(req.body.password, user.password)
        .then((correctPassword) => {
          if (correctPassword) {
            bcrypt.hash(req.body.newPassword, 10).then((password) => {
              DB.User.update({password},
                {where: {
                  username: req.body.username,
                },
                raw: true,}).then((results) => {
                res.redirect('/');
              }).catch((err) => {
                res.status(404).send(err);
              });
            }).catch((err) => {
              res.status(404).send(err);
            });
          } else {
            res.status(404).send(err);
          }})
        .catch((err) => {
        res.status(404).send(err);
      });
    } else {
      res.status(404).send(err);
    }
  }).catch((err) => {
    res.status(404).send(err);
  });
};

// logs out by destroying session
module.exports.logOut = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};
 
