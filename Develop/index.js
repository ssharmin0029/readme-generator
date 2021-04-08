// Includes packages/files needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions.js');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const renderREADME = () => {
    
};

inquirer.prompt(questions)
    .then(responses => {
        const README = renderREADME(responses);
        fs.writeFile('README.md', README, err => {
            err ? console.error(err) : console.log('README.md has been generated successfully!')
        });
    });