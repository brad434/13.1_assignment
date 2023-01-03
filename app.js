/*
const colors = [ 'teal', 'cyan', 'peach', 'purple' ];

function yell(val, i) {
	const caps = val.toUpperCase();
	console.log(`At index ${i}, ${caps}`);
}

colors.forEach(yell);

const prices = [ 30.99, 19.99, 2.5, 99.0 ];
let total1 = 0;
prices.forEach(function(price) {
	total1 += price;
});
console.log(total1);

let total2 = 0;
for (let price of prices) {
	total2 += price;
}
console.log(total2);

// Our own version of forEach:
function forEach(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}
}

forEach(colors, function(color, i) {
	console.log(color.toUpperCase(), 'at index of:', i);
});

colors.forEach(function(color, i) {
	console.log(color.toUpperCase(), 'at index of:', i);
});
*/

/*
function holler(){
	console.log("Hello Whoever This Is!")
}

const whisper = function(){
	console.log('I am WHISPERING!!');
}
// Callback Function Described Below  --------------------------------
function add(x,y){
	return x + y;
}
function subtract(x,y){
	return x - y;
}
function multiply(x,y){
	return x * y;
}
function divide(x,y){
	return x / y;
}
function power(x,y){
	return x ** y;
}

const mathFuncs = [add, subtract, multiply, divide, power];

function doAllMath(a,b, mathFuncs){
	for(let func of mathFuncs){
		console.log(func(a,b));
	}
}
*/

// for each array method ----------------------------------------

// example 1. 

/*
const colors = ['red', 'blue', 'green', 'orange', 'yellow', 'white'];

function allCaps(val, i) {
	const caps = val.toUpperCase();
	console.log(`At index ${i}, ${caps}`)
}

colors.forEach(allCaps);
*/

// const prices = [29.99, 21.98, 150.00, 8.99];
// let total = 0;
// prices.forEach(function(price){
// 	total += price;
// });

// console.log(total);
// or you can also use the "for Of"

/*
const prices = [29.99, 21.98, 150.00, 8.99];
let total = 0;
for(let price of prices){
	total += price;
}

console.log(total);
*/

const colors = ['red', 'blue', 'green', 'orange', 'yellow', 'white'];

colors.forEach(function(color, i){
	console.log(color.toUpperCase())
})

// or the long version of ForEach
/*
function forEach(arr, callback){
	for(let i = 0; i < arr.length; i++){
		callback(arr[i]);
	}
}

forEach(colors, function(color){
	console.log(color.toUpperCase())
});
*/

