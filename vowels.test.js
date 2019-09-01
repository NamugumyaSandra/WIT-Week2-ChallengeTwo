const countVowels = require('./vowels');

test('returns ("a",3) when input string is "dahdah" ', () => {
    expect(countVowels('dahdah')).toBe('a',3);
});

test('returns ("iae",1) when input string is "drink water" ', () => {
    expect(countVowels('drink water')).toBe('iae',1);
});

test('returns ("a",3) when input string is "DAHDAH" ', () => {
    expect(countVowels('DAHDAH')).toBe('a',3);
});
// countVowels(‘dahdah’) # will return (‘a’, 3)
// countVowels(‘drink water’) # will return (‘iae’, 1)