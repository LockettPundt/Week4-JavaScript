function tipAmount (bill, service) {
    const good = 0.20;
    const fair = 0.15;
    const bad = 0.10;
    let tip = 0;
    switch (service) {
        case "good":
            tip = bill * good;
            break;
        case "fair":
            tip = bill * fair;
            break;
        case "bad":
            tip = bill * bad;
            break;
    }
    return `Your tip amount is $${tip.toFixed(2)}.`
}

console.log(tipAmount(12.50, "good"));