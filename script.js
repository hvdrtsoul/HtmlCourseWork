const hamburger = document.getElementById("bar");
const closeButton = document.getElementById("close_button");
const navBar = document.getElementById("navbar");

if(hamburger){
    hamburger.addEventListener("click", () => {
        navBar.classList.add("active");
    });
}

if(closeButton){
    closeButton.addEventListener("click", () => {
        navBar.classList.remove("active");
    });
}