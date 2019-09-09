const countVowels = require('./vowels');

it('returns ("a",3) when input string is "dahdah" ', () => {
    expect(countVowels('dahdah')).toBe('("a",3)');
});

test('returns ("a",3) when input string is "DAHDAH" ', () => {
    expect(countVowels('DAHDAH')).toBe('("a",3)');
});

test('returns ("a",3) when input string is "DAHDA4H" ', () => {
    expect(countVowels('DAHDA4H')).toBe('("a",3)');
});

test('returns ("a",3) when input string is "DAHDA$H" ', () => {
    expect(countVowels('DAHDA$H')).toBe('("a",3)');
});
// countVowels(‘dahdah’) # will return (‘a’, 3)
// countVowels(‘drink water’) # will return (‘iae’, 1)