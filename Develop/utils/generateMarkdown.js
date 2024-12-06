// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license !== "None"
    ? `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
    : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license !== "None" ? `\n* [License](#license)` : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== "None"
    ? `## License
    This application is covered under the **${license}** license. 
    For more information, see the [License]
    (https://choosealicense.com/licenses/${license.toLowerCase()}/).`
    : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  by ${data.name}

  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license)} 


  ## Table of Contents 📓
  * [Description](#description)
  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Features](#features)
  * [Installation](#installation)
  * [Contributors](#contributors)
  * [Contribution Guidelines](#contributinonGuidelines)
  * [Tests](#tests)
  * [Issues](#issues)
  * [License](#license)
  ${renderLicenseLink(data.license)}
  * [Questions](#questions)
  * [GitHub](#github)
  * [Email](#email)
  

  ## Description 📝
  ${data.description}

  ## Requirements 📋
  ${data.requirements}

  ## Usage 📖
  ${data.usage}

  ## Features 🔂
  ${data.features}

  ## Installation 📥
  ${data.installation}

  ## Contributers 👩🏾‍🤝‍👨🏻
  ${data.contributors}
  
  ## Contribution Guidelines 🗞️
  How to contribute:
  ${data.contributionGuidelines}

  ## Tests 📚
  ${data.tests}

  ## Issues 🐞
  ${data.issues}

## Contact Information 🖥️
* Name: ${data.name}
* Email: ${data.questions}
* GitHub: ${data.github}
`;
}

export default generateMarkdown;
