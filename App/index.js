const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const createMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        name: "enterGitHubUsername",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "enterYourEmail",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "Title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "enterDescription",
        message: "What is the description of your project?"
    },
    {

        type: "list",
        name: "License",
        message: "What is your license?",
        choices: ["MIT", "Apache", "GNU", "GPL", "WTFPL", "UNLICENSED"]
    },
    {
        type: "input",
        name: "Installation",
        message: "How to install dependencies for the project"
    },
    {
        type: "input",
        name: "Usage",
        message: "What will the project be used for?"
    },
    {
        type: "input",
        name: "Contributing",
        message: "What will your project contribute?"
    },
    {
        type: "input",
        name: "Tests",
        message: "How do you run tests for the project?"
    }
]

function promptQuestions() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
        writeResponse("README.md", createMarkdown({
            ...responses
        }));
    })
}
promptQuestions();

function writeResponse(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}