const Engineer = require('../lib/Engineer');


test('create an Engineer object', () => {
    const engineer = new Engineer ('brandon', 'brandondaws@gmail.com', '12345', 'SMU');
    expect(engineer.github).toBe('SMU');
});
test('get Engineer github', () => {
    const engineer = new Engineer ('brandon', 'brandondaws@gmail.com', '12345', 'SMU');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});
test('get Engineer role', () => {
    const engineer = new Engineer ('brandon', 'brandondaws@gmail.com', '12345', 'SMU');
    expect(engineer.getRole()).toBe('Engineer');
});




