
// TODO: Escribe pruebas unitarias para isPalindrome.
// Sugerencias: "radar" -> true; "anita lava la tina" -> true; "python" -> false; "" -> true; "Radar" -> true

const { isPalindrome } = require("../src/stringUtils");

test('ejemplo siembra', () => {
  expect(true).toBe(true);
});

test('radar palindromo', () => {
  expect(isPalindrome('radar')).toBe(true);
});

test('Radar palindromo', () => {
  expect(isPalindrome('Radar')).toBe(true);
});

test('anita palindromo', () => {
  expect(isPalindrome('anita lava la tina')).toBe(true);
});

test('python palindromo', () => {
  expect(isPalindrome('python')).toBe(false);
});

test('empty palindromo', () => {
  expect(isPalindrome(' ')).toBe(true);
});