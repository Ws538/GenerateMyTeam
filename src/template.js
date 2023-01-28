//creates the team
const generateTeam = (myTeam) => {
//create the manager in html
    const generateManager = (manager) => {
        return `
    <div class="card">
        <h1>
            ${manager.getname()}
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
        ${engineer.getname()}
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
        ${intern.getname()}
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
}

  //push each html section when intern or engineer selected, Manger is always pushed 

//export
module.exports = (myTeam) => {
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
${generateTeam(myTeam)}
</body>
</html>
    `
}
