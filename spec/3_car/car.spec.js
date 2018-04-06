describe("Car", function() {
	const Car = require('../../src/3_car/Car');
	let car;

	beforeEach(function() {
		car = new Car();
	});

	it('brand is BMW', function() {
		expect(car.brand).toEqual('BMW');
	})

	it('brand is Audi', function() {
		car.setBrand('Audi');
		expect(car.brand).toEqual('Audi');
	});

	it('is not working by default', function() {
		expect(car.isWorking).toBe(false);
	});

	it('started engine', function() {
		car.startEngine();
		expect(car.isWorking).toBe(true);
	});

	it('stopped engine', function() {
		car.startEngine();
		car.stopEngine();
		expect(car.isWorking).toBe(false);
	});

	it('should throw an exception if car already stopped', function() {
		expect(function() {
			car.stopEngine();
		}).toThrowError('car engine is already stopped');
	});

	it('is going', function() {
		car.startEngine();
		car.go();
		expect(car.isGoing).toBe(true);
	});

	it('has stopped', function() {
		car.startEngine();
		car.go();
		car.stop();
		expect(car.isGoing).toBe(false);
	});
});
