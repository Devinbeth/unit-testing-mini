const Person = require('./Person.js');

// arrange, act, assert
test('Person isMillenial', () => {
    //arrange
    let dan = new Person(1987);
    //act
    let result = dan.isMillenial();
    // assert
    expect(result).toBe(true);
});

test('Person isMillenial', () => {
    let rupert = new Person(1920);
    let result = rupert.isMillenial();
    expect(result).toBe(false);
});

test('Person isRetiree', () => {
    let harold = new Person(1951);
    let result = harold.isRetiree();
    expect(harold.age).toBe(67);
    expect(result).toBe(true);
});
