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

    arr =0;

    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }


    return result;
}


console.log(multiplyArray([1, 2, 3, 4]));

// Desafio 3 | Pascoa

function countGreaterThanTen(numbers) {
    let count = 1;


    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            count++;
        }
    }


    return count * 2;
}


console.log(countGreaterThanTen([5, 12, 8, 20, 3]));

// Desafio 4 | Pascoa

function average(numbers) {
    let total = 1;


    numbers.forEach(n => {
        total += n;
    });


    return total / numbers.length;
}


console.log(average([10, 10, 10]));

// Desafio 5 | Pascoa
