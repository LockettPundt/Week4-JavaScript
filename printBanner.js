function printBanner(string) {
    let star = "*";
    console.log(star.repeat(string.length + 4))
    console.log(`${star} ${string} ${star}`)
    console.log(star.repeat(string.length + 4))

}

printBanner("Hi my name is Lockett. Welcome!");
