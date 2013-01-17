var Args = require('../index.js');

var test_func = function() {
	return new Args(arguments);
}
var test_callback = function() { return true; };

exports['no arguments'] = function(test) {
	var args = test_func();

	test.equal(args.length, 0, 'length zero')

	test.equal(typeof args.all, 'object');
	test.equal(args.all.length, 0);

	test.equal(args.first, undefined);

	test.equal(args.last, undefined);

	test.equal(args.hasCallback, false);
	test.equal(typeof args.callback, 'function');
	test.equal(args.callback(), undefined);

	test.done();
}

exports['one argument'] = function(test) {
	var args = test_func('string');

	test.equal(args.length, 1, 'length zero')

	test.equal(typeof args.all, 'object');
	test.equal(args.all.length, 1);

	test.equal(args.first, 'string');

	test.equal(args.last, 'string');

	test.equal(args.hasCallback, false);
	test.equal(typeof args.callback, 'function');
	test.equal(args.callback(), undefined);

	test.done();
}

exports['one argument, with callback'] = function(test) {
	var args = test_func('string', test_callback);

	test.equal(args.length, 1, 'length zero')

	test.equal(typeof args.all, 'object');
	test.equal(args.all.length, 1);

	test.equal(args.first, 'string');

	test.equal(args.last, 'string');

	test.equal(args.hasCallback, true);
	test.equal(typeof args.callback, 'function');
	test.equal(args.callback(), true);

	test.done();
}

exports['multiple arguments'] = function(test) {
	var obj = {test: 'test'}
	var args = test_func(obj, 123, 'string');

	test.equal(args.length, 3, 'length zero')

	test.equal(typeof args.all, 'object');
	test.equal(args.all.length, 3);

	test.equal(args.first, obj);

	test.equal(args.last, 'string');

	test.equal(args.hasCallback, false);
	test.equal(typeof args.callback, 'function');
	test.equal(args.callback(), undefined);

	test.done();
}

exports['multiple arguments, with callback'] = function(test) {
	var obj = {test: 'test'}
	var args = test_func(obj, 123, 'string', test_callback);

	test.equal(args.length, 3, 'length zero')

	test.equal(typeof args.all, 'object');
	test.equal(args.all.length, 3);

	test.equal(args.first, obj);

	test.equal(args.last, 'string');

	test.equal(args.hasCallback, true);
	test.equal(typeof args.callback, 'function');
	test.equal(args.callback(), true);

	test.done();
}
