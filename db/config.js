const Sequelize = require('sequelize');
const url = require('./url')
//this initializes the database.
const DB = new Sequelize(url);
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
});

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

User.hasMany(Sandbox, { onDelete: 'cascade' });
Sandbox.belongsTo(User, { onDelete: 'cascade' });
Model.belongsTo(Sandbox, { onDelete: 'cascade' });

User.sync().then(() => {
  Sandbox.sync().then(() => {
    Model.sync();
  });
});

module.exports = {
  DB,
  User,
  Sandbox,
  Model,
};