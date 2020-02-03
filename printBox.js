function printBox(height, width) {
    let star = "*";
    let space = " ";
    let middle = space.repeat(width - 2);
    let i = 0;
    while (i <= height) {
        if (i === 0 || i === height) {
            console.log(star.repeat(width));
        } else {
            console.log(`${star}${middle}${star}`)
        }
        i++;
    }
}


printBox(10, 20);
printBox(20, 50);