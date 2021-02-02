'use strict';
document.addEventListener("DOMContentLoaded", () => {
    //look up an element in the document hierarchy by id
    const hacker = document.getElementById("Hacker");
    const nstreet = document.getElementById("nStreet");
    const npet = document.getElementById("nPet");
    const ncolor = document.getElementById("nColor");
    const street = getInput("Please Enter Your Street Name: ");
    const pet = getInput("Please Enter Your Pet's Name: ");
    const color = getInput("Which Color Is Better, Blue, Green, Red: ");
    const language = getInput("What Is Your Favorite Programming Language");
    //extract only the first character from both strings and combine
   
;
    hacker.textContent = language;
    npet.textContent = pet;
    nstreet.textContent = street;
    // ncolor.textContent = color;
    
});

function getInput(promptText) {
    let name = prompt(promptText);
    while(name === "") {
        name = prompt("I said: " + promptText);
    }
    return name;
}//end function getInput(promptText)