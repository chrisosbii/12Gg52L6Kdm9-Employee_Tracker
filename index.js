const inquirer = require('inquirer');

// print landing page:

// prompt the user for response
inquirer.prompt([
    {
        type: 'list',
        message: 'Please choose an action',
        name: 'option',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
]).then((data) => {

    // switch on choices
    switch(data.option){
        case 'view all departments':
            svg = new Circle();
            break;
        case 'triangle':
            svg = new Triangle();
            break;
        case 'square':
            svg = new Square();
            break;
        default:
            svg = new Shape();
            break;
    }
    // set the color of the shape to shapeColor
});

function printDB(database){

    return true;
}