const functions = require('./functions.js');

test('returnTwo returns 2', () => expect(functions.returnTwo()).toBe(2));
test('greeting returns "Hello, name!"', () => expect(functions.greeting('Devin')).toBe('Hello, Devin!'));
test('add returns num1 + num2', () => expect(functions.add(2, 3)).toBe(5));
