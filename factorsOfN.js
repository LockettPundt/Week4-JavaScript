function factorsOfN(num) {
    let i = 1;
    let numArray = [];
    while (i <= num) {
        if (num % i === 0) {
            numArray.push(i);
        }
        i++;
    }
    return numArray;
}


console.log(factorsOfN(200));