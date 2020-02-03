function leetSpeak(str) {
    let leet = '';
    str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
                leet += "4";
                break;
            case "e":
                leet += "3";
                break;
            case "g":
                leet += "6";
                break;
            case "i":
                leet += "1";
                break;
            case "o":
                leet += "0";
                break;
            case "t":
                leet += "7";
                break;
            case "s":
                leet += "5";
                break;
            default:
                leet += str[i];
                break;
        }

    }
    return leet;
}

console.log(leetSpeak("hi there. My Name is Lockett"))