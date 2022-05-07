const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
//empty array that each role will be pushed into
const Team = [];

//questions for each role type, 
const manQuestions = [
    { type: "input",
    name: "manName",
    message: "Please enter the managers name."
    },
    {
        type: 'input',
        name: 'manId',
        message: 'Please enter the managers ID number'
    },
    {
        type: 'input',
        name: 'manEmail',
        message: 'Please enter the managers email address'
    },
    {
        type: 'input',
        name: 'manOffice',
        message: 'Please enter the managers office number.'
    }
]

const engQuestions = [
    {
        type: 'input',
        name: 'engName',
        message: 'Please enter the engineers name.'
    },
    {
        type: 'input',
        name: 'endId',
        message: 'Please enter the engineers email address'
    },
    {
        type: 'input',
        name: 'engEmail',
        message: "Please enter the engineer's email address"
    },
    {
        type: 'input',
        name: 'engGithub',
        message: "Please enter the engineer's Github username"
    }
]
const intQuestions = [
    {
        type: 'input',
        name: 'intName',
        message: "What is your intern's name?"
    },
    {
        type: 'input',
        name: 'intEmail',
        message: "What is your intern's email address?"
    },
    {
        type: 'input',
        name: 'intSchool',
        message: 'What school did your intern attend?'
    }
]
function mainMenu() {
    inquirer.prompt({
        type: "list",
        name: "direction",
        message: "Type of employee you'd like to create",
        choices: ["Manager", "Engineer", "Intern", "Done"]
    })
        .then(answer => {
            console.log(answer)
            if (answer.direction === "Manager") {
                inquirer.prompt(manQuestions).then(answer => {
                    const manager = new Manager(answer.manName, answer.manId, answer.manEmail, answer.manOffice);
                   Team.push(manager);
                    return mainMenu();
                })
            } else if (answer.direction === "Engineer") {
                inquirer.prompt(engQuestions).then(answer => {
                    const engineer = new Engineer(answer.engName, answer.engId, answer.EngEmail, answer.engGithub);
                    Team.push(engineer);
                    return mainMenu()
                })
            }else if (answer.direction === "Intern") {
                inquirer.prompt(intQuestions).then(answer => {
                    const intern = new Intern(answer.intName, answer.intId, answer.intEmail, answer.intSchool);
                    Team.push(intern);
                    return mainMenu()
                })
            }else if (answer.direction === "Done");
        })
}
mainMenu()
.then (answer => {
    const answersData = 
})