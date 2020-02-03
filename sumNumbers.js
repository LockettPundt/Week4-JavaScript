// takes an array and returns the sum of all the numbers within.
function sumNumbers(arr) {
    return arr.reduce((a, b) => a + b);
}

let a = [1, 2, 3, 4];
console.log(sumNumbers(a));