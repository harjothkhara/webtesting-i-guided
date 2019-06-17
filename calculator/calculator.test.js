const calculator = require('./calculator.js')


describe('calculator.js', () => {
    describe('add() method', () => {
            // add two numbers
            it('should return the sum of two numbers', () => {
                                            
                // having more then one expect on the same thing is ok
                                           //matcher                            
                expect(calculator.add(2, 2)).toBe(4);
                expect(calculator.add(2, 1)).toBe(3);
                expect(calculator.add(0, 1)).toBe(1);
            });


    })
})