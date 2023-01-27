const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the team manager's name:",
    },
    {
      type: "input",
      name: "id",
      message: "Enter the team manager's employee ID:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the team manager's email address:",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter the team manager's office number:",
    },
  ])
  .then((answers) => {
    let manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    console.log(manager);
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
      switch (answers.memberType) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          exit();
          break;
      }
    });
};

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username:",
      },
    ])
    .then((answers) => {
      let engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      console.log(engineer);
      teamPrompt();
    });
};

const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's email address:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school:",
      },
    ])
    .then((answers) => {
      let intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      console.log(intern);
      teamPrompt();
    });
};
