// Prompt for engineer information
const engineerPrompt = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter engineer name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter engineer ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter engineer email: ",
      },
      {
        type: "input",
        name: "github",
        message: "Enter engineer GitHub username: ",
      },
    ]);
  };

  module.exports = engineerPrompt;