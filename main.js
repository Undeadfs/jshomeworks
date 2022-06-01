// 1. Sum of two

function getSum(a,b) {

    return a + b;

}

// 2. Show even numbers between a and b

function showEvenNumbers(a,b) {

    for(let n = a ; n <= b ; n++) {
        if ( n % 2 === 0) {
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

// 4. isEmpty function for checking object properties

let objectWithProp = {a:1};
let emptyObject = {};

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
} 

console.log(isEmpty(objectWithProp));

// 5. Show firstName and lastName

let avenger = {
    firstName : 'Tony',
    lastName : 'Stark'
}

console.log(`Avenger's name is : ${avenger.firstName} ${avenger.lastName}`);