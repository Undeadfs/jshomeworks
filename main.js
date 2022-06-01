// 1. Sum of two

function getSum(a,b) {

    return a + b;
    
}

// 2. Show even numbers between a and b

function showEvenNumbers(a,b) {

    for(let n = a ; n <= b ; n++) {
        if ( n % 2 == 0) {
            console.log(n)
        }
    }

}

// 3. Show largest between three numbers

function showLargestNumber(a,b,c) {

    if (a > c && c > b) {
		console.log(a + ' is the largest number');
	} else if (b > a && b > c) {
		console.log(b + ' is the largest number');
	} else {
		console.log(c + ' is the largest number');
	}

}
