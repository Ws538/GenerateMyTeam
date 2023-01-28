//creates the team
const generateTeam = (team) => {
  //create the manager in html
  console.log(team);
  const generateManager = (manager) => {
    return `
    <div class="card">
        <h1>
            ${manager.getName()}
        </h1>
        <h2>
            Manager
        </h2>
        <ul>
            <li>ID: ${manager.getId()}</li>
            <li>Email: ${manager.getEmail()} </li>
            <li>Office Number: ${manager.getOfficeNumber()} </li>
        </ul>
    </div>
            `;
  };

  //create the engineer in html
  const generateEngineer = (engineer) => {
    return `
<div class="card">
    <h1>
        ${engineer.getName()}
    </h1>
    <h2>
        ${engineer.getRole()}
    </h2>
    <ul>
        <li>ID: ${engineer.getId()}</li>
        <li>Email: ${engineer.getEmail()} </li>
        <li>GitHub: ${engineer.getGithub()} </li>
    </ul>
</div>
        `;
  };
  //create the intern in html
  const generateIntern = (intern) => {
    return `
<div class="card">
    <h1>
        ${intern.getName()}
    </h1>
    <h2>
        ${intern.getRole()}
    </h2>
    <ul>
        <li>ID: ${intern.getId()}</li>
        <li>Email: ${intern.getEmail()} </li>
        <li>School: ${intern.getSchool()} </li>
    </ul>
</div>
        `;
  };

  //push each role into html.
  const html = [];

  team.forEach((employee) => {
    let roleHtml = "";
    if (employee.getRole() === "Manager") {
      roleHtml = generateManager(employee);
    } else if (employee.getRole() === "Engineer") {
      roleHtml = generateEngineer(employee);
    } else if (employee.getRole() === "Intern") {
      roleHtml = generateIntern(employee);
    }
    if (roleHtml) html.push(roleHtml);
  });

  return html.join("");
};
//export
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .card {
          border: 1px solid #ccc;
          padding: 10px;
          margin: 10px;
          width: 300px;
        }
      </style>
    <title>Document</title>
</head>
<body>
<div>
    <h1>My Team</h1>

</div>
${generateTeam(team)}
</body>
</html>
    `;
};
