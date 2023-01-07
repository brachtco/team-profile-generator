const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");


//Input of Employee information
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },

    //Addtional input of Manager
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
    },
    //Additonal input of Engineer
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    //Additional input of Intern
    {
        type: "input",
        name: "school",
        message: "Where do you go to school?"
    },
];