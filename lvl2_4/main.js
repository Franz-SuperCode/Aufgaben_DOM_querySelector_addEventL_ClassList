// Schreibe eine Funktion, die beim Anklicken des Buttons die ausgewählte Farboption auf den Hintergrund des bodys anwendet.

let bodyElement = document.querySelector("body");
let buttonElement = document.querySelector("#button");


buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    let selectElement = document.querySelector("#farbeAuswahlen").value;
    console.log(selectElement);
    let selectElementTrim = selectElement.replace(" ", "");
    console.log(selectElementTrim);
    bodyElement.style.backgroundColor = selectElementTrim;

})