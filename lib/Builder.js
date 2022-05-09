const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const genTemplate = require('../src/htmlTemplate');
//empty array that each role will be pushed into
const team = [];

const managerPrompt = [
    { type: "input", name: "managerName", message: "Please enter your name" },
    { type: "input", name: "managerId", message: "Please enter your id" },
    { type: "input", name: "managerEmail", message: "Please enter your email" },
    { type: "input", name: "managerNumber", message: "Please enter your office number" },
]
const engineerPrompt = [
    { type: "input", name: "engineerName", message: "Please enter your name" },
    { type: "input", name: "engineerId", message: "Please enter your id" },
    { type: "input", name: "engineerEmail", message: "Please enter your email" },
    { type: "input", name: "engineerGithub", message: "Please enter your github username" },
]
const internPrompt = [
    { type: "input", name: "internName", message: "Please enter your name" },
    { type: "input", name: "internId", message: "Please enter your id" },
    { type: "input", name: "internEmail", message: "Please enter your email" },
    { type: "input", name: "internSchool", message: "Please enter your school name" },
]
class Builder {
    constructor() {
        //
    }
    initMenu() {
    console.log(`
    +++++++++++++++++
        Main Menu
    +++++++++++++++++
        `)
        return inquirer
            .prompt(
                {
                    type: 'list',
                    name: 'selection',
                    message: 'Who would you like to add?',
                    choices: ['Manager', 'Engineer', 'Intern', 'Finished']
                }
            )
            .then(selectionInput => {
                console.log(selectionInput);
                if (selectionInput.selection === "Manager") {
                    console.log(`
                    ++++++++++++++++++
                       Manager Info
                    ++++++++++++++++++
                        `)
                    inquirer.prompt(managerPrompt).then(selectionInput => {
                        const manager = new Manager( selectionInput.managerName, selectionInput.managerId, selectionInput.managerEmail, selectionInput.managerNumber);
                        team.push(manager)
                        return this.initMenu();
                    })
                }
                else if (selectionInput.selection === "Engineer") {
                    console.log(`
                    +++++++++++++++++++
                       Engineer Info
                    +++++++++++++++++++
                        `)
                    inquirer.prompt(engineerPrompt).then(selectionInput => {
                        const engineer = new Engineer(selectionInput.engineerName, selectionInput.engineerId, selectionInput.engineerEmail, selectionInput.engineerGithub);
                        team.push(engineer);
                        return this.initMenu()
                    })
                }
                else if (selectionInput.selection === "Intern") {
                    console.log(`
                    +++++++++++++++++
                       Intern Info
                    +++++++++++++++++
                        `)
                    inquirer.prompt(internPrompt).then(selectionInput => {
                        const intern = new Intern(selectionInput.internName, selectionInput.internId, selectionInput.internEmail, selectionInput.internSchool);
                        team.push(intern);
                        return this.initMenu()
                    })
                }
                else {
                    return this.writeTeamFile(team);
                }
            });
    }
    writeTeamFile(recieveTeamData) {
        const builtTeam = genTemplate(recieveTeamData);

        fs.writeFile('./dist/index.html', builtTeam, (err) => {
            if(err) throw new Error(err);
        })
    }
}

module.exports = Builder;