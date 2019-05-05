function sum(a, b){
	return +b + +a;
}

function sub(a, b){
	return +b - +a;
}

function mult(a, b){
	return +b * +a;
}

function div(a, b){
	return +b / +a;
}

function mod(a, b){
	return Math.round(+b / +a);
}

export * from CalculatorFunctions
