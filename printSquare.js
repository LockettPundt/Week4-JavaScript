function printSquare(num) {
    let string = "*";
    let i = 0;
    while (i <= num) {
        console.log(string.repeat(num));
        i++;
    }
}

printSquare(10);