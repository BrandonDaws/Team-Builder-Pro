
const Intern = require('../lib/Intern.js');

test('creates an intern\'s object', () => {
    const intern = new Intern('brandon', 'brandondaws@gmail.com', '12345', 'SMU');
    // get intern information
    expect(intern.school).toBe('SMU');
});
test('get Intern\'s school name', () => {
    const intern = new Intern('brandon', 'brandondaws@gmail.com', '12345', 'SMU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
test('get Intern\'s role', () => {
    const intern = new Intern('brandon', 'brandondaws@gmail.com', '12345', 'SMU');
    expect(intern.getRole()).toBe('Intern');
});