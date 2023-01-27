const inquirer = require("inquirer");
const fs = require("fs");
const managerPrompt = require("./lib/Manager");
const engineerPrompt = require("./lib/Engineer");
const employeePrompt = require ("./lib/Employee");
const internPrompt = require ("./lib/Intern");



// Write HTML to file
fs.writeFileSync("./team.html", html, "utf8");


// Start the application
generateHTML();
