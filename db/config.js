const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const aws = require('./aws');
//this initializes the database.
const DB = new Sequelize(aws.name, aws.username, aws.password, {
  host: aws.host,
  port: aws.port,
  dialect: 'postgres',
});
//This initializes and authenticates the database
DB.authenticate()
.then(() => {
  console.log('Connection to database has been established');
})
.catch((err) => {
  console.error('Unable to connect to the database', err);
});

const User = DB.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sandbox1Id: {
    type: Sequelize.INTEGER,
    model: 'sandbox',
    key: 'id',
  },
  sandbox2Id: {
    type: Sequelize.INTEGER,
    model: 'sandbox',
    key: 'id',
  },
  sandbox3Id: {
    type: Sequelize.INTEGER,
    model: 'sandbox',
    key: 'id',
  },
}, );

const Sandbox = DB.define('sandbox', {
  name: {
    type: Sequelize.STRING,
  },
  model: {
    type: Sequelize.INTEGER,
    model: 'model',
    key: 'id',
  },
  data: {
    type: Sequelize.STRING,
  }
});

const Model = DB.define('model', {
  type: {
    type: Sequelize.STRING,
  },
  params: {
    type: Sequelize.STRING,
  }
})

User.beforeCreate((user, options) => {

  return bcrypt.hash(user.password, 10)
    .then(hash => {
      user.password = hash;
    })
    .catch(err => { 
      throw new Error(); 
    });
    
});

User.hasMany(Sandbox, { onDelete: 'cascade' });
Sandbox.belongsTo(User, { onDelete: 'cascade' });
Model.belongsTo(Sandbox, { onDelete: 'cascade' });

User.sync({force: true}).then(() => {
  Sandbox.sync({force: true}).then(() => {
    Model.sync({force: true});
  });
});

module.exports = {
  DB,
  User,
  Sandbox,
  Model,
};