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

function addDepartment() {
    inquirer.prompt([{
        type: 'input',
        message: 'Enter department name',
        name: 'departmentname'
    }])
    .then(response => {
        db.query('INSERT INTO departments (department_name) VALUES(?);',
        response.departmentname,
         function(err, data){
            if(err)
            throw err;
            console.table(data)
            displayOptions();
        })
    })
}

function addRoles() {
    inquirer.prompt([
        {
        type: 'input',
        message: 'Enter title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter salary',
        name: 'salary'
    },
    {
        type: 'input',
        message: 'Enter department ID',
        name: 'departmentid'
    },
])
    .then(response => {
        db.query('INSERT INTO roles (title, salary, department_id) VALUES(?,?,?);',
        [response.title, response.salary, response.departmentid],
         function(err, data){
            if(err)
            throw err;
            console.table(data)
            displayOptions();
        })
    })
}






displayOptions();
