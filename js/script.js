let modal = document.getElementById("email-modal");
let button = document.getElementById("email");
let span = document.getElementsByClassName("close")[0];

button.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

const toggle = document.getElementById("switch");
toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
    
    document.getElementById("avatar").classList.toggle("light-mode");
    document.getElementById("presentation").classList.toggle("light-mode");
    document.getElementById("twitter").classList.toggle("light-mode");
    document.getElementById("whatsapp").classList.toggle("light-mode");
    document.getElementById("spotify").classList.toggle("light-mode");
    document.getElementById("project-link").classList.toggle("light-mode");
    
    [...document.getElementsByClassName("text")].forEach(function(element){
        element.classList.toggle("light-mode");
    });
    [...document.getElementsByClassName("footer")].forEach(function(element){
        element.classList.toggle("light-mode");
    });
    [...document.getElementsByClassName("footer-text")].forEach(function(element){
        element.classList.toggle("light-mode");
    });
    [...document.getElementsByClassName("modal")].forEach(function(element){
        element.classList.toggle("light-mode");
    });
    [...document.getElementsByClassName("modal-content")].forEach(function(element){
        element.classList.toggle("light-mode");
    });
    [...document.getElementsByClassName("close")].forEach(function(element){
        element.classList.toggle("light-mode");
    });
});