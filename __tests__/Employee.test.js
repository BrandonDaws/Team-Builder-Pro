const Employee = require('../lib/Employee.js');

test('create an Employee object', () => {
    // create a new Employee instance
    const employee = new Employee('Victor', 'vmlujanjr@outlook.com', '123456789012');
    // expect Employee to contain the following properties
    expect(employee.name).toBe('Victor');
    expect(employee.email).toBe('vmlujanjr@outlook.com');
    expect(employee.id).toBe('123456789012');
});
test('get Employee name', () => {
    // create a new Employee instance
    const employee = new Employee('Victor', 'vmlujanjr@outlook.com', '123456789012');
    expect(employee.getName()).toEqual(expect.any(String));
});
test('get Employee id', () => {
    // create a new Employee instance
    const employee = new Employee('Victor', 'vmlujanjr@outlook.com', '123456789012');
    expect(employee.getId()).toEqual(expect.any(String));
});
test('get Employee email', () => {
    // create a new Employee instance
    const employee = new Employee('Victor', 'vmlujanjr@outlook.com', '123456789012');
    expect(employee.getEmail()).toEqual(expect.any(String));
});
test('get Employee role', () => {
    // create a new Employee instance
    const employee = new Employee('Victor', 'vmlujanjr@outlook.com', '123456789012');
    expect(employee.getRole()).toEqual(expect.any(String));
});