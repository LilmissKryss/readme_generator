// TODO: Include packages needed for this application
import inquirer from "inquirer"; // Get user input and create prompts
import fs from "fs"; // File system module to write to file
import generateMarkdown from "./utils/generateMarkdown.js"; // Create content for README
import path from "path"; // Handles file paths

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
    validate: (input) => (input ? true : "Project title is required"),
  },
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: (input) => (input ? true : "Name is required"),
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
    validate: (input) => (input ? true : "Project description is required"),
  },
  {
    type: "input",
    name: "usage",
    message: "How is the project used?",
    validate: (input) => (input ? true : "Project usage is required"),
  },
  {
    type: "input",
    name: "features",
    message: "What are the features of the project?",
    validate: (input) => (input ? true : "Project features is required"),
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions.",
    validate: (input) => (input ? true : "Installation instructions required"),
  },
  {
    type: "input",
    name: "requirements",
    message: "What are the project requirements?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any project contributors.",
    validate: (input) => (input ? true : "Contributors required"),
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "How can others contribute to the project?",
  },
  {
    type: "input",
    name: "tests",
    message: "How can the project be tested?",
  },
  {
    type: "input",
    name: "issues",
    message: "How can issues be reported?",
  },
  {
    type: "list",
    name: "license",
    message: "What license does the project use?",
    choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"],
    validate: (input) => (input ? true : "Project license is required"),
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username.",
    validate: (input) => (input ? true : "GitHub is required"),
  },
  {
    type: "input",
    name: "questions",
    message: "Please provide your email for project questions.",
    validate: (input) => (input ? true : "Email is required"),
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const projectName = answers.title.replace(/[^a-z0-9]/gi, "_"); // Generate project folder name
    const readmeContent = generateMarkdown(answers); // Generate README content

    console.log(`Creating folder and generating README.md file...`);
    createProjectFolder(projectName, readmeContent); // Create project folder and write README file
  });
}

function createProjectFolder(projectName, readmeContent) {
  const projectPath = path.join(process.cwd(), projectName);

  // Create the project directory if it doesn't exist
  if (!fs.existsSync(projectPath)) {
    fs.mkdirSync(projectPath);
  }

  // Define the path for the README file
  const readmePath = path.join(projectPath, "README.md");

  // Check if README already exists
  if (fs.existsSync(readmePath)) {
    console.log(`README.md already exists in "${projectName}". 
      Aborting...`);
    return;
  }

  // Write the README content to the file
  fs.writeFileSync(readmePath, readmeContent);

  console.log(
    `README.md has been successfully created in the "${projectName}" folder.`
  );
}

// Function call to initialize app
init();
