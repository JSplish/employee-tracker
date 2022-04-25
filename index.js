const db = require("./config/connection");
const cTable = require("console.table");
const inquirer = require("inquirer");


function displayOptions() {


inquirer.prompt([{ 
    type: 'list',
    name: 'UserChoice',
    message: 'What would you like to do?',
    choices: ['view employee', 'view departments', 'view roles', 'add employee', 'add department', 'add roles', 'update roles', 'exit']

}])
.then(response => {
    switch(response.UserChoice) {
        case "view employee":
            viewEmployee()
            break;
        case "view departments":
            viewDepartments()
            break;
        case "view roles":
            viewRoles()
            break;
        case "add employee":
            addEmployee()
            break;
        case "add department":
            addDepartment()
            break;
        case "add roles":
            addRoles()
            break;
        case "update department":
            updateDepartment()
            break;
        default:
            db.end()
            process.exit(0)
    }
})
}

function viewEmployee() {
    db.query('SELECT * FROM employees;', function(err, data){
        if(err)
        throw err;
        console.table(data)
        displayOptions();
    })
}

function viewDepartments() {
    db.query('SELECT * FROM departments;', function(err, data){
        if(err)
        throw err;
        console.table(data)
        displayOptions();
    })
}

function viewRoles() {
    db.query('SELECT * FROM roles;', function(err, data){
        if(err)
        throw err;
        console.table(data)
        displayOptions();
    })
}






displayOptions();
