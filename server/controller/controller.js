// DB = require('../../db/config.js');

// fs.readFile(path.resolve(__dirname, '../client/static/index.html'), 'utf8', (err, data) => {
//   if (err) console.log(err);
//   res.writeHead(200, headers);
//   res.write(data);
//   res.end();
// });


// module.exports.addUser = (req, res) => {
//   DB.User.create({
//     username: req.body.username,
//     password: req.body.password,
//     sandbox1: null,
//     sandbox2: null,
//     sandbox3: null,
//   }).then((newUser) => {
//     res.status(201).json(newUser);
//   }).catch((err) => {
//     res.status(404).json(err);
//   });
// };