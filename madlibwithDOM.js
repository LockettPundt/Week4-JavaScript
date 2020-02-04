const fear = document.getElementById("fearInput");
const food = document.getElementById("foodInput");
const name = document.getElementById("nameInput");
const place = document.getElementById("placeInput");
const years = document.getElementById("yearInput");
const verb = document.getElementById("verbInput");
const goButton = document.getElementById("goButton");
const spans = document.getElementsByTagName("span");
const paragraph = document.getElementById("madlibText");
const title = document.getElementById("title");
const inputWrapper = document.getElementById("wrapper");
const refreshWrapper = document.getElementById("refreshButton");
const refreshPage = () => window.location.reload();
const refreshButton = document.getElementById("newMadLibButton");

const printIt = () => {
    document.getElementById("name1").innerHTML = name.value;
    document.getElementById("name2").innerHTML = name.value;
    document.getElementById("name3").innerHTML = name.value;
    document.getElementById("place").innerHTML = place.value;
    document.getElementById("years").innerHTML = years.value;
    document.getElementById("fear").innerHTML = fear.value;
    document.getElementById("food").innerHTML = food.value;
    document.getElementById("verb").innerHTML = verb.value;
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