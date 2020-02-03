// takes a string a decrypts it.

function caesarDecrypt(str, rot) {
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

console.log(caesarDecrypt('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13))