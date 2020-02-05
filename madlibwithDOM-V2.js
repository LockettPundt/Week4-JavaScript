//Removed all of the individual getElementById's and did querySelecAll on the inputs. 
//made arrays of the inputs and a seperated the name input since it's used miultiple times.
//I made the name input have it's own array of blank fields to forEach() over. 
const name = document.getElementById("nameInput");
const goButton = document.getElementById("goButton");
const paragraph = document.getElementById("madlibText");
const title = document.getElementById("title");
const inputWrapper = document.getElementById("wrapper");
const refreshWrapper = document.getElementById("refreshButton");
const refreshButton = document.getElementById("newMadLibButton");
const nameBlanks = [].slice.call(document.querySelectorAll("#name"));
const userInputs = [].slice.call(document.querySelectorAll(".userInput"));
const madlibBlanks = [].slice.call(document.querySelectorAll(".blankField"));
const refreshPage = () => window.location.reload();

const printIt = () => {
    nameBlanks.map( element => element.innerHTML = name.value);
    madlibBlanks.map((element, index) => element.innerHTML = userInputs[index].value);
    title.className = "neon";
    refreshWrapper.style.visibility = "visible";
    paragraph.className = "neon";
    document.getElementById("body").style.backgroundColor = "black";
    inputWrapper.style.visibility = "hidden";
    refreshButton.className += " neon";
    refreshButton.style.backgroundColor = "black";
}

goButton.addEventListener("click", printIt);
refreshButton.addEventListener("click",refreshPage);