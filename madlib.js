function madLib() {
    const name = prompt("Enter a name.");
    const place = prompt("Give me a place...");
    const verb = prompt("How about an infinitive verb...");
    const food = prompt("What's your favorite food?");
    const fear = prompt("What is your greatest fear?");
    const years = prompt("Enter a number.");

    return `Hi there ${name}, interesting seeing you in ${place}. What arew you doing here exactly? Well, nevermind. I've been ${verb} in place until your return. Are you hungry ${name}? I stole some ${food} for you. In regards to our last conversation, I too am afraid of ${fear}. Well, uh, great chat ${name}. See you again in ${years} years.....`;
}

console.log(madLib());