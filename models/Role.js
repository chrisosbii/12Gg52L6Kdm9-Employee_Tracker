const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class Role extends Model {}

// create fields/columns for Location model
Role.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.VARCHAR(30),
        allowNull: false
    },
    salary: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role'
  }
);

module.exports = Role;