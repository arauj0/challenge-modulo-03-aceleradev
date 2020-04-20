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

    const is = sequence.find(number => number == num);

    if (typeof is == 'undefined') return false

    return true;
}

module.exports = {
    fibonacci,
    isFibonnaci
}
