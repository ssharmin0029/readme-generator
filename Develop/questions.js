// Exports an array of questions for user input
module.exports = [
    {
        name: 'title',
        type: 'input',
        message: 'Please enter the title of your project: '
    },
    {
        name: 'description',
        type: 'input',
        message: 'Here enter a description of your project: '
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Please provide instructions, telling other users how to install your project locally: '
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Here direct users how to use your project after the installation: '
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'Please enter contribution guidelines for other repository contributors: '
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Here give users explicit instructions on how to run necessary tests: '
    },
    {
        name: 'license',
        type: 'list',
        choices: ['Apache License', 'BSD 3-Clause License', 'GNU GPL v3 License', 'GNU AGPL v3 License', 'GNU LGPL v3 License', 'GNU FDL v1.3 License', 'IBM License', 'ISC License', 'MIT License', 'Mozilla Public License 2.0'],
        message: 'Please choose the type of license you would like to use for your project: '
    },
    {
        name: 'username',
        type: 'input',
        message: 'Please enter your GitHub username: '
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please provide your email address: '
    }
];