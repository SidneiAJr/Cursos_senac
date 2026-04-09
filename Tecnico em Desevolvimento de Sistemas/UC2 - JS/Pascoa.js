// Desafio 1  | Pàscoa
function sumEven(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {  
            sum += numbers[i];
        }
    }

    return sum;
}

console.log(sumEven([1, 2, 3, 4, 5, 6])); 

// Desafio 2 | Pascoa

var result = 1; 

function multiplyArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];  
    }

    return result;
}

console.log(multiplyArray([1, 2, 3, 4]));  

// Desafio 3 | Pascoa

function countGreaterThanTen(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {  
            count++;
        }
    }

    return count;  
}

console.log(countGreaterThanTen([5, 12, 8, 20, 3]));  

// Desafio 4 | Pascoa

function average(numbers) {
    let total = 0;

    numbers.forEach(n => {
        total += n;  
    });

    return total / numbers.length;  
}

console.log(average([10, 10, 10]));  

// Desafio 5 | Pascoa

function findMax(arr) {
    let max = arr[0];  

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {  
            max = arr[i];  
        }
    }

    return max;  
}

console.log(findMax([10, 20, 5, 30]));  


// Exericio 6 | Pascoa

function factorial(n) {
    if (n === 0) {
        return 1;  
    }

    return n * factorial(n - 1);  
}

console.log(factorial(4));  

// Exercicio 7 | Pascoa

function factorial(n) {
    if (n === 0) {
        return 1;  
    }

    return n * factorial(n - 1);  
}

console.log(factorial(4));  

// Exercicio 8 | Pascoa

function sumUntil(limit) {
    let sum = 0;
    let i = 1;

    while (i < limit) {
        sum += i;
        i++; 
    }

    return sum;
}

console.log(sumUntil(5)); 

// Exercicio 9 | Pascoa
function power(base, exp) {
    let result = 1; 

    for (let i = 0; i < exp; i++) {
        result *= base;
    }

    return result;
}

console.log(power(9, 2)); 

// Exercicio 10 | Pascoa

function sumUnique(numbers) {
    let unique = [];

    
    for (let i = 0; i < numbers.length; i++) {
        if (!unique.includes(numbers[i])) {
            unique.push(numbers[i]);
        }
    }

    let sum = 0;
    for (let i = 0; i < unique.length; i++) {
        sum += unique[i];
    }

    return sum;
}

console.log(sumUnique([1, 2, 2, 3, 3, 4])); 


