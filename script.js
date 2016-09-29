function doThis(value){
	return value + 5;
}

function andThenThis(value){
	return value * value;
}

function andTHisLast(value){
	return value - 8;
}

console.log(andTHisLast(andThenThis(doThis(5))));