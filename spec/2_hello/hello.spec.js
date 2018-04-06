describe("Hello World", function() {
	var HelloWorld = require('../../src/2_hello/HelloWorld');

	it('should say Hello World!', function() {
		const text = HelloWorld();
		expect(text).toEqual('Hello World!');
	});
});
