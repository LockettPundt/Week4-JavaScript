function longVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newStr += " ";
        } else if (vowels.includes(str[i].toLowerCase()) && vowels.includes(str[i - 1].toLowerCase())) {
            newStr += str[i].repeat(5);
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(longVowels("good"))
console.log(longVowels("THATS A COOL LABRADOODLE."))