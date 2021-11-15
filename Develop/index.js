const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function questions() {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (required)',
        validate: input =>{
            if (input) return true;
            else{
                console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        type: 'checkbox',
        name: 'liscense',
        message: 'What liscense does this project use?',
        choices: ['Apache 2.0', 'GNU GPLv3', 'MIT', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can a user contribute to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can a user test this project?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter an email where users can contact you with questions they may have (required)',
        validate: input =>{
            if (input) return true;
            else{
                console.log('Please enter an email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Finally, enter a github account where users can see your public repos (required)',
        validate: input =>{
            if (input) return true;
            else{
                console.log('Please enter a github account name');
                return false;
            }
        }
    }
    ])
    .then(data => {
        writeToFile("README", generateMarkdown(data));
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve,reject) =>{
        fs.writeFile('dist/' + fileName + '.md', data, error =>{
            if (error){
                reject(error);
                return;
            }
            resolve({
                ok: true,
                message: 'README created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
