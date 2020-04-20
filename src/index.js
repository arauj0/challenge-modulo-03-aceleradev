'use strict'

const posFibonacci = (num) => {
    if (num <= 1) return num;

    return posFibonacci(num - 1) + posFibonacci(num - 2);
}

const fibonacci = () => {
    const sequence = [];

    for (let num = 0; num <= 14; num++) { 
       let result = posFibonacci(num);

       sequence.push(result);
    }
    
    return sequence;
}

const isFibonnaci = (num) => {
    const sequence = fibonacci();

    const is = sequence.find(number => number === num);

    if (!is) return false

    return true;
}

// const result = fibonacci();
// console.log(result);

// const result2 = isFibonnaci(0);
// console.log(result2);

module.exports = {
    fibonacci,
    isFibonnaci
}
