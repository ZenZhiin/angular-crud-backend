const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user.model'); // For relationships

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0, // Ensure price cannot be negative
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0, // Default stock to 0
    validate: {
      min: 0, // Ensure stock cannot be negative
    },
  },
  createDate: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  updateDate: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE', // If a user is deleted, delete their items too
  },
}, {
  timestamps: false, // We manage the dates manually
  hooks: {
    beforeUpdate: (item) => {
      item.updateDate = new Date(); // Update the date whenever an item changes
    },
  },
});

User.hasMany(Item, { foreignKey: 'userId' });
Item.belongsTo(User, { foreignKey: 'userId' });

module.exports = Item;
