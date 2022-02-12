

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ![GitHub license](https://img.shields.io/badge/license-${data.License}-blue.svg)
  ## Description
  ${data.enterDescription}
  ## TableOfContents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Email](#email)
  * [Github](#github)
  * [License](#license)
  * [Qestions](#qestions)
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}node
  ## Contributing
  ${data.Contributing}
  ## Tests
  ${data.Tests}
  ## Qestions
  Please e-mail me if you have any questions
  ## Email
  ${data.enterYourEmail}
  ## Github
  ${data.enterGitHubUsername}
  ## License
  ${data.License} 
  
`;
}

module.exports = generateMarkdown;

