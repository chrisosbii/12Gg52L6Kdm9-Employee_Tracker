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
            case 'add a departments':
                mainMenu();
                break;
            case 'add a roles':
                mainMenu();
                break;
            case 'add a employees':
                mainMenu();
                break;
            case 'update an employee role':
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
        console.log(results);
        console.log(fields);
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
        console.log(fields);
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
        console.log(fields);
    });
    return true;
}