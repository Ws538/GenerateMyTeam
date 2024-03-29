const Manager = require('../lib/Manager');

test('Can set office number via constructor argument', () => {
const testValue = 12345;
const e = new Manager('William', 1, 'test@test.com', testValue);
expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
const testValue = "Manager";
const e = new Manager('William', 1, 'test@test.com', 12345);
expect(e.getRole()).toBe(testValue);
});

test('Can get office number via getOfficeNumber()', () => {
const testValue = 12345;
const e = new Manager('William', 1, 'test@test.com', testValue);
expect(e.getOfficeNumber()).toBe(testValue);
});