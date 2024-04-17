const { sum, divide, subtract, multiply } = require("../src/app.js");

describe('Initialize a Simple calculator methods', () => {
    it('should sum two numbers', () => {
        const value = sum(1, 3)
        expect(value).toBe(4)
    });


    it('should subtract two numbers', () => {
        const value = subtract(7, 3)
        expect(value).toBe(4)
    });


    it('should multiply two numbers', () => {
        const value = multiply(2, 3)
        expect(value).toBe(6)
    });

    it('should divide two numbers', () => {
        const value = divide(12, 3)
        expect(value).toBe(4)
    });
});