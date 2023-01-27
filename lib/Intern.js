// Prompt for intern information
const internPrompt = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Enter intern name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Enter intern ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter intern email: ",
      },
      {
        type: "input",
        name: "school",
        message: "Enter intern school: ",
      },
    ]);
  };

  module.exports = internPrompt