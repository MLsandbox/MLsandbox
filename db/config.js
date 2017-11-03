// dependencies
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
require('dotenv').config();
// import db credentials
// instantiate ORM
const DB = new Sequelize(process.env.NAME, process.env.OWNER, process.env.PASSWORD, {
  host: process.env.HOST,
  port: process.env.RDS_PORT,
  dialect: 'postgres',
});
//initialize and authenticate db
DB.authenticate().then(() => {
  console.log('Connection to database has been established');
}).catch((err) => {
  console.error('Unable to connect to the database', err);
});
// define User model
const User = DB.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  uuid: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});
// hash password with bcrypt
User.beforeCreate((user, options) => {
  return bcrypt.hash(user.password, 10)
    .then(hash => {
      user.password = hash;
    }).catch(err => {
      throw new Error();
    });
});
// export db
module.exports = {
  DB,
  User
};