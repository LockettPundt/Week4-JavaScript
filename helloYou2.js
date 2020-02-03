const userName = prompt("What is your name?");

function greet(name) {
  if (name === '') {
    console.log("Hello World");
  } else {
  console.log(`Hi there ${name}`);
  }
}


greet(userName);