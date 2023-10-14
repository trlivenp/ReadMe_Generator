const fs = require('fs');
const inquirer = require('inquirer');

// Questions to collect information for the README
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'Credits',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to generate the README content
function generateREADME(answers) {
  // Create a badge for the chosen license
  const licenseBadge =
    answers.license === 'None'
      ? ''
      : `![License](https://img.shields.io/badge/License-${encodeURIComponent(
          answers.license
        )}-brightgreen)`;

  return `
# ${answers.title}

${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This application is covered under the ${answers.license} license.

## Questions
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}
`;
}

// Prompt the user for information and generate the README
inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateREADME(answers);

  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error('Error writing README.md:', err);
    } else {
      console.log('README.md has been successfully generated!');
    }
  });
});

