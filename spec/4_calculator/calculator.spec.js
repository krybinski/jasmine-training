describe('Calculator', () => {
	const Calculator = require('../../src/4_calculator/Calculator');
	let calculator;

	beforeEach(() => {
		calculator = new Calculator();
	});

	it('result of adding 4 and 5 is equal 9', () => {
		const result = calculator.add(4, 5);
		expect(result).toBe(9);
	});

	it('result of subtracting 10 and 25 is equal -25', () => {
		const result = calculator.subtract(10, 25);
		expect(result).toBe(-15);
	});

	it('result of multiplying 4 and 4 is equal 16', () => {
		const result = calculator.multiply(4, 4);
		expect(result).toBe(16);
	});

	it('result of dividing 100 and 10 is equal 10', () => {
		const result = calculator.divide(100, 10);
		expect(result).toBe(10);
	})
});
