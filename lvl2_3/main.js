let listElements = document.getElementsByTagName("li");

let buttonElement = document.querySelector("#navChange");

buttonElement.addEventListener("click", () => {
    listElements[0].style.backgroundColor = "red";
    listElements[1].style.backgroundColor = "green";
    listElements[2].style.backgroundColor = "blue";
    buttonElement.style.backgroundColor = "purple";
})