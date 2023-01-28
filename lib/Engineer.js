const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(Name, Id, Email, Github) {
    super(Name, Id, Email);
    this.Github = Github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.Github;
  }
}

module.exports = Engineer;
