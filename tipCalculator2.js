function tipCalc() {
    let bill = parseFloat(prompt("Enter the bill amount."));
    let service = prompt("How was your service good, fair, bad?").toLowerCase();
    // let people = parseInt(prompt("How many people are in your party?"));
    let total = 0;
    // while (people === 0) {
    //     alert('Sounds like an existential issue...');
    //     let people = parseInt(prompt("How many people are in your party?"));
    // }
    switch (service) {
        case "good":
            total += (bill * 0.20) + bill;
            break;
        case "fair":
            total += (bill * 0.15) + bill;
            break;
        case "bad":
            total += (bill * 0.10) + bill;
            break;
        
    }
    return `Your total is $${total.toFixed(2)} including tip for ${service} service.`
}

console.log(tipCalc());
