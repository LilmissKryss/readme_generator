// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
     Licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  * [Description](#description)
  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Features](#features)
  * [Installation](#installation)
  * [Contributers](#contributers)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Issues](#issues)
  * [License](#license)
  * [Questions](#questions)
  * [GitHub](#github)
  * [Email](#email)
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Requirements
  ${data.requirements}

  ## Usage
  ${data.usage}

  ## Features
  ${data.features}

  ## Installation
  ${data.installation}

  ## Contributers
  ${data.contributers}
  
  ## Contributing
  How to contribute:
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Issues
  ${data.issues}


## Contact Information
* Name: ${data.name}
* Email: ${data.questions}
* GitHub: ${data.github}
`;
}

export default generateMarkdown;
