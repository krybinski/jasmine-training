describe("Hello World", function() {
	var HelloWorld = require('../../src/2_hello/Hello');
	var text;

	beforeEach(function() {
		text = HelloWorld();
	});

	it('should say Hello World!', function() {
		expect(text).toEqual('Hello World!');
	});

	it('should contain World word', function() {
		expect(text).toContain('World');
	});
});
