const Department = require('./Department');
const Employee = require('./Employee');
const Role = require('./Role');

Role.hasOne(Department, {
    as: 'department_id'
});

Employee.hasOne(Role, {
    as: 'role_id'
});

Employee.hasOne(Employee, {
    as: 'manager_id'
});

module.exports = { Department, Employee, Role };