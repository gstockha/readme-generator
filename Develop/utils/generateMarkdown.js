// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license) {
  if (license !== "None"){
    return `[![${license}](https://img.shields.io/badge/license-${license}-green)](https://img.shields.io/badge/license-${license}-green)`;
  }
  if (license === "None") return ``;
}

// If there is no license, return an empty string
function renderLicense(license) {
  if (license === "None") return ``;
  if (license === "Apache_2.0") return `[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
  if (license === "GNU_GPLv3") return `[GNU GLPv3](https://choosealicense.com/licenses/gpl-3.0/)`;
  if (license === "MIT") return `[MIT](https://choosealicense.com/licenses/mit/)`;
  if (license === "ISC") return `[ISC](https://choosealicense.com/licenses/isc/)`;
}

function generateLink(link){
  if (!link) return ``;
  if (link){
  return ` 
  ${link}
   `;
  }
}

function generateImg(img,title){
  if (!img) return ``;
  if (img){
    return (`![${title}](assets/${img})
    
    `);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${licenseBadge(data.license)}
  ## Description

  ${data.description}
  ${(generateLink(data.link))}
  ${(generateImg(data.img,data.title))}
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicense(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Reach out to me via email with any questions you may have ${data.email}
  
  You can view my github repos on [github.com](https://github.com/${data.github}?tab=repositories)
`;
}

module.exports = generateMarkdown;
