const capitalize = require('./script.js');
const reverseString = require('./script.js');

test('a should turn into A', ()=>{
    expect(capitalize('a')).toBe('A');
});

test('paul should be luap', ()=>{
    expect(reverseString('paul')).toBe('luap');
})