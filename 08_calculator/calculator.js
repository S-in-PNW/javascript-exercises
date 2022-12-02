const add = function(first, second) {
	//first = parseInt(first);
  //second = parseInt(second);
  const add = first + second;
  return add;
};

const subtract = function(first, second) {
	const subtract = first - second;
  return subtract;
};

const sum = function(number) {
  const sum = number.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
};

const multiply = function(num) {
  const multiply = num.reduce((ps,a) => ps * a, 1);
  return multiply
};

const power = function(num, exp) {
	const answer = num ** exp;
  return answer;
};

const factorial = function(num) {
	let array = [];
  while (num > 1){
    array.push(num);
    num--;
  }
  const facc = array.reduce((ps, a) => ps * a, 1);
  return facc;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
