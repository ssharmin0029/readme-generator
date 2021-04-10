// Includes packages/modules needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions.js');
const badgesLicenses = require('./badgesLicenses');

// Creates the README file
const renderREADME = ({title, description, installation, usage, contributing, tests, license, username, email}, licenseChoice) => (`

# ${title}


${licenseChoice}


## Description
${description}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#How-to-Contribute)
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


## License
Your project is covered under ${license}. Please click on the badge at the top of the README for more information.


## Questions
Please reach out to me with any queries, using either my GitHub Profile or Email (links) below: 
GitHub: [${username}](https://github.com/${username})
Email: [${email}](mailto:${email})

`);

// Chooses a license using switch statement 
const licenseOptions = (choice) => {
    switch(choice) {
        case 'Apache License':
            return badgesLicenses.Apache;
        case 'BSD 3-Clause License':
            return badgesLicenses.BSD;
        case 'GNU GPL v3 License':
            return badgesLicenses.GPLv3;
        case 'GNU AGPL v3 License':
            return badgesLicenses.AGPLv3;
        case 'GNU LGPL v3 License':
            return badgesLicenses.LGPLv3;
        case 'GNU FDL v1.3 License':
            return badgesLicenses.FDL;
        case 'IBM License':
            return badgesLicenses.IBM;
        case 'ISC License':
            return badgesLicenses.ISC;
        case 'MIT License':
            return badgesLicenses.MIT;
        case 'Mozilla Public License 2.0':
            return badgesLicenses.Mozilla;
    }
}

// Writes the README file using inquirer prompt and taking questions as its parameter 
inquirer.prompt(questions)
    .then(responses => {
        const licenseResult = licenseOptions(responses.license);
        const README = renderREADME(responses, licenseResult);
        fs.writeFile('Generate-README.md', README, err => {
            err ? console.error(err) : console.log('README.md has been generated successfully!')
        });
    });