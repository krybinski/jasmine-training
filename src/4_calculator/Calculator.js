class Calculator {
	add(a, b) {
		return a + b;
	}

	subtract(a, b) {
		return a - b;
	}

	multiply(a, b) {
		return a * b;
	}

	divide(a, b) {
		return a / b;
	}

	power(a, pow) {
		return Math.pow(a, pow);
	}
}

module.exports = Calculator;
