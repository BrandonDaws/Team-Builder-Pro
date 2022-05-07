const Manager = require('../lib/Manager');

test('create manager object', () => {
    const manager = new Manager('brandon', 'brandondaws@gmail.com', '12345', '98765')
    expect(manager.officeNumber).toBe('98765');
})

test('get manger role', () => {
    const manager = new Manager('brandon', 'brandondaws@gmail.com', '12345', 'SMU')
    expect(manager.getRole()).toBe('Manager');
})