// 1. Sum of two

function sum(a,b) {
    
    a = parseInt(prompt('Enter number'));
    b = parseInt(prompt('Enter number'));

    let result = a + b;

    if(isNaN(a) || isNaN(b)) {
        alert('entered values are not correct')
    }

    else {
        alert(`${a}+${b}=${result}`)
    }

}

// 2. Show even numbers between a and b

function showEvenNumbers(a,b) {

    a = parseInt(prompt('Enter number'));
    b = parseInt(prompt('Enter number'));

    if(isNaN(a) || isNaN(b)) {
        alert('entered values are not correct')
    }

    else {
        for(let n = a ; n <= b ; n++) {
            if (n%2 == 0) { 
                alert(n) 
            }
        }
    }

}

// 3. Show largest between three numbers

function showLargestNumber(a,b,c) {
    
    a = parseInt(prompt('Enter number'));
    b = parseInt(prompt('Enter number'));
    c = parseInt(prompt('Enter number'));
    
    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('entered values are not correct')
    }

    else if (a > c && c > b) {

		alert(a + ' is the largest number');

	} else if (b > a && b > c) {

		alert(b + ' is the largest number');
        
	} else {

		alert(c + ' is the largest number');
	}

}