// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GIThub?',
            name: 'username',
        }
        {
            type: 'input',
            message: 'What is your Email address?',
            name: 'email',
        }
        {
            type: 'input',
            message: 'What is your GIThub?',
            name: 'username',
        }
        {
            type: 'input',
            message: 'Whats your project name?',
            name: 'project',
        }
        {
            type: 'input',
            message: 'Please write a short description about your project.',
            name: 'description',
        },

        {
            type: 'list',
            message: 'What kind of license should your project have?',
            choices: ['SIL Open Font License 1.1', 'MIT', 'ISC', 'Microsoft Public License'],
            name: 'license',
        },

        {
            type: 'list',
            message: 'What command should be run to install dependencies?',
            choices: ['npm i'],
            name: 'dependencies',
        },

        {
            type: 'list',
            message: 'What command should be run to run text?',
            choices: ['npm test'],
            name: 'command',
        },

        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'repo info',
        },

        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contributing to repo',
        },
    ])
];

// TODO: Create a function to write README file
function writeToFile(questions) {
    fs.writeToFile('README.md', 'data',)
    if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("books.txt", "utf8"));
  }
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
