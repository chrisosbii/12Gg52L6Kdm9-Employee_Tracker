const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Employee model
class Employee extends Model {}

// create fields/columns for Employee model
Employee.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.VARCHAR(30),
        allowNull: false
    },
    last_name: {
        type: DataTypes.VARCHAR(30),
        allowNull: false
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    manager_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee'
  }
);

module.exports = Employee;