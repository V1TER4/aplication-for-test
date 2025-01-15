function isFibonacci(num) {
    let a = 0, b = 1, temp;
    if (num === a || num === b) return true;
    while (b < num) {
        temp = b;
        b = a + b;
        a = temp;
    }
    return b === num;
}

const number = 21;
if (isFibonacci(number)) {
    console.log(`${number} pertence a sequencia de Fibonacci`);
} else {
    console.log(`${number} não pertence a sequencia de Fibonacci`);
}
