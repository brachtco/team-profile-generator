//packages
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./lib/generateHTML");

// const generateHTML = require("./generateHTML");

const initialQuestion = [
  {
    type: "list",
    name: "role",
    choices: ["Manager", "Engineer", "Intern", "Finished employee input"],
  },
];

const manager = [
  {
    type: "input",
    name: "name",
    message: "Please enter the name of the Manager.",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the ID of the Manager.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the email address of the Manager.",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter the office number of the Manager.",
  },
];

const enginner = [
  {
    type: "input",
    name: "name",
    message: "Please enter the name of the Engineer.",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the ID of the Engineer.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the email address of the Engineer.",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter the GitHub username of the Engineer.",
  },
];

const intern = [
  {
    type: "input",
    name: "name",
    message: "Please enter the name of the Intern.",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the ID of the Intern.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the email address of the Intern.",
  },
  {
    type: "input",
    name: "officeNumber",
    message:
      "Please enter the name of the school that Intern currently attends.",
  },
];

const questions = {
  manager,
  enginner,
  intern,
};

// Create a function to initialize app
function init() {
  inquirer.prompt(initialQuestion).then(({ role }) => {
    console.log({ role });
    inquirer.prompt(questions[role.toLowerCase()]).then((responses) => {
      fs.writeFile(
        "GeneratedHTML.html",
        generateHTML(responses),
        function (err, data) {}
      );
    });
  });
}

// Function call to initialize app
init();
