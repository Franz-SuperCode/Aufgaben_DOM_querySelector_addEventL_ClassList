let navElement = document.querySelectorAll(".nav");
let homeElement = navElement[0];
let buttonElement = navElement[navElement.length - 1];

buttonElement.addEventListener("click", () => {
    homeElement.style.backgroundColor = "purple";
})

