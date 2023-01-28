const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateTeam = require("./src/template");
const fs = require("fs");

const staffData = [];
inquirer
  .prompt([
    {
      type: "input",
      name: "Name",
      message: "Enter the team manager's name:",
    },
    {
      type: "input",
      name: "Id",
      message: "Enter the team manager's employee ID:",
    },
    {
      type: "input",
      name: "Email",
      message: "Enter the team manager's email address:",
    },
    {
      type: "input",
      name: "OfficeNumber",
      message: "Enter the team manager's office number:",
    },
  ])
  .then((answers) => {
    let manager = new Manager(
      answers.Name,
      answers.Id,
      answers.Email,
      answers.OfficeNumber
    );
    staffData.push(manager);
    teamPrompt();
  });

const teamPrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberType",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I'm done"],
      },
    ])
    .then((answers) => {
      console.log(answers);
      switch (answers.memberType) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "I'm done":
          createTeam();
          break;
      }
    });
};

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Name",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "Id",
        message: "Enter the engineer's employee ID:",
      },
      {
        type: "input",
        name: "Email",
        message: "Enter the engineer's email address:",
      },
      {
        type: "input",
        name: "Github",
        message: "Enter the engineer's GitHub username:",
      },
    ])
    .then((answers) => {
      let engineer = new Engineer(
        answers.Name,
        answers.Id,
        answers.Email,
        answers.Github
      );
      staffData.push(engineer);
      teamPrompt();
    });
};

const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "Name",
        message: "Enter the intern's name:",
      },
      {
        type: "input",
        name: "Id",
        message: "Enter the intern's employee ID:",
      },
      {
        type: "input",
        name: "Email",
        message: "Enter the intern's email address:",
      },
      {
        type: "input",
        name: "School",
        message: "Enter the intern's school:",
      },
    ])
    .then((answers) => {
      let intern = new Intern(
        answers.Name,
        answers.Id,
        answers.Email,
        answers.School
      );
      staffData.push(intern);
      teamPrompt();
    });
};

function createTeam() {
  fs.writeFileSync("./dist/team.html", generateTeam(staffData), "utf-8");
}
