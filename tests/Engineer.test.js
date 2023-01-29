const Engineer = require("../lib/Engineer")

it("Can set Github username via constructor" , () => {
    const testValue = "testGithub"
    const e = new Engineer("William", 2, "test@test.com" , testValue);
    expect(e.Github).toBe(testValue);
});

it("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("William", 2, "test@test.com", "testGithub");
  expect(e.getRole()).toBe(testValue);
});

it("Can get Github username via getGithub()", () => {
  const testValue = "testGithub";
  const e = new Engineer("William", 2, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

