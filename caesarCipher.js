
// encrypts a string in ROT13 ( or whatever rot number you assign)
function caesarEncrypt(str, rot) {
    let rotNum = rot;
    let message = '';
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let alphaSplit = alpha.split('');
    let i = 0;
    while (i < str.length) {
        if (str[i] === " ") {
            message += " ";
        } else {
            let index = alphaSplit.indexOf(str[i].toLowerCase());
            message += alphaSplit[(index + rotNum) % 26]
        }
        i++;
    }
    return message;

}

console.log(caesarEncrypt('Genius without education is like silver in the mine', 13))