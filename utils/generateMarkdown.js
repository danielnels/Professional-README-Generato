// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-${data.License}-blue.svg)
  ## description
  ${data.enterDescription}
  ## tableOfContents
  * [title](#title)
  ## description
  * [description](#)
  * [installation](#installation)
  * [usage](#usage)
  * [contributing](#contributing)
  * [tests](#tests)
  * [email](#email)
  * [github](#github)
  * [license](#license)
      
  ## installation
  ${data.Installation}
  ## usage
  ${data.Usage}node
  ## contributing
  ${data.Contributing}
  ## tests
  ${data.Tests}
  ## email
  ${data.enterYourEmail}
  ## github
  ${data.enterGitHubUsername}
  ## license
  ${data.License} 
  
`;
}

module.exports = generateMarkdown;
