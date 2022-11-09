// Schreibe eine Funktion, die beim Anklicken des Button die Werte in der Konsole ausgibt.
let allInputs = document.querySelectorAll("input");
let buttonElement = allInputs[allInputs.length - 1];
let selectElement = document.querySelector("select");

buttonElement.addEventListener("click", () => {
    //Von Jedem Inputfeld das Value rausgeben
    allInputs.forEach(input => {
        console.log(input.value);
    });

    console.log(selectElement.value);
})
