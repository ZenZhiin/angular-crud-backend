const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const DataItem = sequelize.define('Data', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = { DataItem, sequelize };
