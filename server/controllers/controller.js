DB = require('../../db/config.js');

module.exports.addUser = (req, res) => {
  DB.User.create({
    username: req.body.username,
    password: req.body.password,
    sandbox1: null,
    sandbox2: null,
    sandbox3: null,
  }).then((newUser) => {
    res.status(201).json(newUser);
  }).catch((err) => {
    res.status(404).json(err);
  });
};