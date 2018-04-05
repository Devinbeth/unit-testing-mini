const functions = require('./functions.js');

test('returnTwo returns 2', () => expect(functions.returnTwo()).toBe(2));
test('greeting returns "Hello, Devin!"', () => expect(functions.greeting('Devin')).toBe('Hello, Devin!'));
test('greeting returns "Hello, Lindsey!"', () => expect(functions.greeting('Lindsey')).toBe('Hello, Lindsey!'));
test('add returns 2 + 3 = 5', () => expect(functions.add(2, 3)).toBe(5));
test('add returns 5 + 13 = 18', () => expect(functions.add(5, 13)).toBe(18));

describe('Math Tests', () => {
    test('multiply returns num1 * num2', () => {
        expect(functions.multiply(2, 4)).toBe(8);
        expect(functions.multiply(5, 6)).toBe(30);
    });
    test('sub return num1 - num2', () => {
        expect(functions.subtract(10, 3)).toBe(7);
    })
});
