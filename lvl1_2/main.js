let exampleElements = document.querySelectorAll(".example");
console.log(exampleElements);
//Letzte Position vom QuerySelector holen
let lastPosition = exampleElements.length - 1;
console.log(lastPosition);
//Letztes Element vom QuerySelector holen
let buttonElement = exampleElements[lastPosition];
console.log(buttonElement);

buttonElement.addEventListener("click", () => {
    exampleElements.forEach(element => {
        element.style.backgroundColor = "green";
    });
})

