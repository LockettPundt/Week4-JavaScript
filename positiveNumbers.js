// takes an array and returns a new array with only the positive numbers.

function postiveNumbers(arr) {
    return arr.filter(a => a > 0)
}

let a = [-1, -2, -3, -4, 5, 100];
console.log(postiveNumbers(a));