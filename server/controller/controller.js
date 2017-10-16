DB = require('../../db/config.js');

module.exports.signUp = (req, res) => {
  DB.User.findOne({where: {
    username: req.body.username,
  }})
  .then((result) => {
    if (!result) {
      DB.User.create({
        username: req.body.username,
        password: req.body.password,
      }).then((newUser) => {
        res.status(201).send(newUser)
      }).catch((err) => {
        res.status(404).send(err);
      });
    }
    else {
      res.end('that user already exists!');
    }
  })
  .catch((err) => {
    res.status(404).send(err);
  })
};

 