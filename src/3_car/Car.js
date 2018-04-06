class Car {
	constructor() {
		this.brand = 'BMW';
		this.isWorking = false;
		this.isGoing = false;
	}

	setBrand(brand) {
		this.brand = brand;
	}

	startEngine() {
		if (this.isWorking) {
			throw new Error('car engine is already working');
		}
		this.isWorking = true;
	}

	stopEngine() {
		if (!this.isWorking) {
			throw new Error('car engine is already stopped');
		}
		this.isWorking = false;
	}

	go() {
		if (!this.isWorking) {
			throw new Error("car engine is not started yet");
		}
		this.isGoing = true;
	}

	stop() {
		if (!this.isGoing) {
			throw new Error('car is not going');
		}
		this.isGoing = false;
	}
}

module.exports = Car;
