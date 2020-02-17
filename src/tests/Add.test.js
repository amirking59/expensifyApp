const add = (a, b) => a + b + 1;

test('should add 2 number', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});