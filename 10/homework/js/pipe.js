function isFunction(functionToCheck) {
	return {}.toString.call(functionToCheck) === '[object Function]';
}

const pipe = (value, ...funcs) => {
	let index = -1;
	let checkerVal = true;
	for (const iterator of funcs) {
		index++
			if (isFunction(iterator)===false){
				checkerVal = false;
				return 'Provided argument at position '+index+' is not a function!'
		}
	}
	if (checkerVal===true){
		return funcs.reduce((v,f) => f(v),value)
	} 
};

const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
const capitalize = (value) =>
	value
		.split(' ')
		.map((val) => val.charAt(0).toUpperCase() + val.slice(1))
		.join(' ');
const appendGreeting = (value) => `Hello, ${value}!`;

const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');

alert(error); // Provided argument at position 2 is not a function!

const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);

alert(result); // Hello, John Doe!
