// Prompt for engineer information
const employeePrompt = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Employee's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Employee's ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter Employee's email: ",
      },
      {
        type: "input",
        name: "github",
        message: "Enter Employee's role: ",
      },
    ]);
  };

  module.exports = employeePrompt