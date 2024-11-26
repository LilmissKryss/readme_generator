// TODO: Include packages needed for this application
import inquirer from "inquirer"; // Get user input and create prompts
import fs from "fs"; // File system module to  write to file
import generateMarkdown from "./utils/generateMarkdown"; // Create content for README
import path from "path"; // Handles file paths

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short description of your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "How is the project used?",
  },
  {
    type: "input",
    name: "features",
    message: "What are the features of the project?",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions.",
  },

  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to the project?",
  },
  {
    type: "input",
    name: "tests",
    message: "How can the project be tested?",
  },
  {
    type: "list",
    name: "license",
    message: "What license does the project use?",
    choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC"],
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username.",
  },
  {
    type: "input",
    name: "questions",
    message: "Please provide your email for project questions.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
