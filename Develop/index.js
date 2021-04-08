// Includes packages/files needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions.js');

// Creates the README file
const renderREADME = () => {
    
};

// Writes the README file
inquirer.prompt(questions)
    .then(responses => {
        const README = renderREADME(responses);
        fs.writeFile('README.md', README, err => {
            err ? console.error(err) : console.log('README.md has been generated successfully!')
        });
    });