//ES5 version

function partApp(fn) {
	var args = Array.prototype.slice.call(arguments, 1);
	return function() {
		var fnArgs = Array.prototype.slice.call(arguments);
		return fn.apply(this, args.concat(fnArgs));
	};
}

//ES6 version

var partApp = (fn, ...args) => {
	(...fnArgs) => {
		fn(...[..args, ...fnArgs]);
	}
}