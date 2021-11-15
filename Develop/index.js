const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// init with questions
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
        type: 'confirm',
        name: 'confirmImg',
        message: 'Would you like to include an image or video of your deployed project?',
        default: false
    },
    {
        type: 'input',
        name: 'img',
        message: 'Provide a filename for the image or video',
        when: ({ confirmImg }) =>{
            if (confirmImg) return true;
            else return false;
        }
    },
    {
        type: 'confirm',
        name: 'confirmLink',
        message: 'Would you like to include a link to the deployed project?',
        default: false
    },
    {
        type: 'input',
        name: 'link',
        message: 'Provide a link to the deployed project',
        when: ({ confirmLink }) =>{
            if (confirmLink) return true;
            else return false;
        }
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
        type: 'list',
        name: 'license',
        message: 'What license does this project use?',
        choices: ['Apache_2.0', 'GNU_GPLv3', 'MIT', 'ISC', 'None']
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

// write README file
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

questions(); //init