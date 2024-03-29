const Intern = require("../lib/Intern");

it("Can set school via constructor", () => {
  const testValue = "USYD";
  const e = new Intern("William", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

it("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("William", 1, "test@test.com", "USYD");
  expect(e.getRole()).toBe(testValue);
});

it("Can get school via getSchool()", () => {
  const testValue = "USYD";
  const e = new Intern("William", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
