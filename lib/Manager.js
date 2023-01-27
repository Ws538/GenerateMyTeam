// Prompt for manager information
const managerPrompt = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter manager name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter manager ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter manager email: ",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter manager office number: ",
      },
    ]);
  };

  module.exports = managerPrompt;