const Department = require('./Department');
const Employee = require('./Employee');
const Role = require('./Role');

Role.hasOne(Department, {
    foreignKey:
});

Employee.hasOne()
module.exports = { Department, Employee, Role };