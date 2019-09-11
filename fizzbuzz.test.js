const fizzBuzz = require('./fizzbuzz');

test('returns Invalid when one of the inputs is a string', () => {
    expect(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8], "fixxsft")).toBe('Invalid input.');
});

test('returns Invalid when one of the inputs is a number', () => {
    expect(fizzBuzz(234,[1, 2, 3, 4, 5, 6, 7, 8])).toBe('Invalid input.');
});

test('returns Fizzbuzz when sum of length is divisible by 3 and 5 ', () => {
    expect(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7])).toBe('Fizzbuzz');
});

test('returns Fizz when sum of length is divisible by 3 and 5 ', () => {
    expect(fizzBuzz([1, 2, 3], [])).toBe('Fizz');
});

test('returns fizz when sum of length is divisible by 3 and 5 ', () => {
    expect(fizzBuzz([1, 2, 3], [1, 2])).toBe('Buzz');
});

test('returns sum of lengths if it is not divisible by 3 and 5 ', () => {
    expect(fizzBuzz([1, 2, 3], [1])).toBe(4);
});
