// Includes packages/modules needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions.js');

// Creates the README file
const renderREADME = ({title, description, installation, usage, contributing, tests, license, username, email}) => {`
    # ${title}

    ## License
    ${license}

    ## Badges

    ## Description
    ${description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [License](#license)
    - [Questions](#questions)

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## How to Contribute
    ${contributing}

    ## Tests
    ${tests}

    ## Questions
    Please reach out to me with any queries, using either my GitHub Profile or Email (links) below: 
    <a href="https://www.github.com/${username}" target="_blank">GitHub</a>
    <a href="mailto:${email}" target="_blank">Email</a>
`};

// Writes the README file using inquirer prompt and taking questions as its parameter 
inquirer.prompt(questions)
    .then(responses => {
        const README = renderREADME(responses);
        console.log(README);
        fs.writeFile('Generate-README.md', README, err => {
            err ? console.error(err) : console.log('README.md has been generated successfully!')
        });
    });