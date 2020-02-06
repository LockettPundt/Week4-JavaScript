'use strict';
const inputList = document.querySelectorAll(".listInput");
const addToListButton = document.getElementById("addToListButton");
const clearButton = document.getElementById("clearButton");
const wrapper = document.getElementsByClassName("inputWrapper");
const removeButton = document.getElementById("removeButton");
let number = 1;

const removeLast = () => {
    let listDivs = document.querySelectorAll("div");
    let lastDiv = listDivs[listDivs.length - 1];
    lastDiv.parentNode.removeChild(lastDiv);
    number--;
}

removeButton.addEventListener("click", removeLast);

clearButton.addEventListener("click", () => {
    inputList.forEach(item => item.value = null)
});

addToListButton.addEventListener("click", () => {
    inputList.forEach(element => {
        if (element.value !== "") {
            let listDiv = document.createElement("div");
            document.body.appendChild(listDiv);
            listDiv.innerHTML += `${number}. ${element.value} </br>`;
            number++;
        }
    });
});