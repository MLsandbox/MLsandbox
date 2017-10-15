DB = require('../../db/config.js');
utils = require('../utils/http-helpers');

module.exports.signUp = (req, res) => {
  utils.prepareResponse(req, (data) => {    
    let username = JSON.parse(data).username;
    let password = JSON.parse(data).password;
    DB.User.findOne({where: {username}})
    .then((result) => {
      if (!result) {
        DB.User.create({
          username,
          password,
        }).then((newUser) => {
          res.end('new user created!');
        }).catch((err) => {
          utils.send404(res);
        });
      }
      else {
        res.end('that user already exists!'); // needs to redirect to login
        // utils.redirector(res, '/login');
      }
    })
    .catch((err) => {
      console.log('====================================')
      console.log('nah')
      console.log('====================================')
      res.end()
    })
    // DB.User.create({
    //   username,
    //   password,
    // }).then((newUser) => {
    //   res.end('new user created!');
    // }).catch((err) => {
    //   utils.send404(res);
    // });
  })
};

// fs.readFile(path.resolve(__dirname, '../client/static/index.html'), 'utf8', (err, data) => {
//   if (err) console.log(err);
//   res.writeHead(200, headers);
//   res.write(data);
//   res.end();
// });


 