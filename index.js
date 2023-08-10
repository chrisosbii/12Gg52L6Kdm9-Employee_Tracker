const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: '3Beesbuzz!',
        database: 'employees_db'
    },
    console.log(`Connected to the eployees_db database.`)
);

// print intro
printIntro();
// load main menu
mainMenu();

function mainMenu(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please choose an action',
            name: 'option',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'exit']
        }
    ]).then((data) => {
    
        // switch on choices
        switch(data.option){
            case 'view all departments':
                viewDepartments();
                mainMenu();
                break;
            case 'view all roles':
                viewRoles();
                mainMenu();
                break;
            case 'view all employees':
                viewEmployees();
                mainMenu();
                break;
            case 'add a department':
                addDepartment();
                mainMenu();
                break;
            case 'add a role':
                addRole();
                mainMenu();
                break;
            case 'add an employee':
                addEmployee();
                mainMenu();
                break;
            case 'update an employee role':
                updateRole();
                mainMenu();
                break;
            case 'exit':
                break;
            default:
                mainMenu();
                break;
        }
        
    });
}

function viewDepartments(){
    console.log("in view departments");
    const sql = `SELECT id, name AS title FROM department`;
  
    db.query(sql, (err, results, fields) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        prettyDepartments(results);
        //console.log(fields);
    });
    return true;
}
function viewRoles(){
    console.log("in view roles");
    const sql = `SELECT id, title, salary, department_id AS department FROM role`;
  
    db.query(sql, (err, results, fields) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.log(results);
        //console.log(fields);
    });
    return true;
}
function viewEmployees(){
    console.log("in view employees");
    const sql = `SELECT id, first_name, last_name, department_id AS department, salary, manager FROM role`;
  
    db.query(sql, (err, results, fields) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.log(results);
        //console.log(fields);
    });
    return true;
}
function addDepartment(){
    console.log("in add department");

    inquirer.prompt([
        {
            type: 'input',
            message: 'Please input name of new department:',
            name: 'name'
        }
    ]).then((data) => {
        const sql = `INSERT INTO department (name)
         VALUES (?)`;
        const params = [data.name];

        db.query(sql, params, (err, results, fields) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({
                message: 'success',
                data: body
            });
        });
    });
    
    return true;
}
function addRole(){
    console.log("in add department");

    inquirer.prompt([
        {
            type: 'input',
            message: 'Please input name of new role:',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Please input salary of new role:',
            name: 'salary'
        },
        {
            type: 'input',
            message: 'Please input department:',
            name: 'department'
        },

    ]).then((data) => {
        const sql = `INSERT INTO role (name)
         VALUES (?)`;
        const params = [data.name];

        db.query(sql, params, (err, results, fields) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({
                message: 'success',
                data: body
            });
        });
    });
    
    return true;
}
function addEmployees(){
    console.log("in add employee");

    inquirer.prompt([
        {
            type: 'input',
            message: 'Please input first name of new employee:',
            name: 'first'
        },
        {
            type: 'input',
            message: 'Please input last name of new employee:',
            name: 'last'
        },
        {
            type: 'input',
            message: 'Please input role of new employee:',
            name: 'role'
        },
        {
            type: 'input',
            message: 'Please input manager of new employee:',
            name: 'manager'
        }
    ]).then((data) => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
         VALUES (?)`;
        const params = [data];

        db.query(sql, params, (err, results, fields) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json({
                message: 'success',
                data: body
            });
        });
    });
    return true;
}

function printIntro() {
    console.log(".___________________.");
    console.log("|                   |");
    console.log("| EMPLOYEE DATABASE |");
    console.log("|___________________|");
    console.log("");
}

function prettyDepartments(words){
    var temp = JSON.parse(words);
    console.log("id  department name");
    console.log("--  ---------------");
    for(var i = 0; i < temp.length; i++){
        console.log(temp[i].id + "   " + temp[i].name);
    }
    console.log()
    return true;
}