// Animación al hacer scroll

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

const windowHeight = window.innerHeight;

reveals.forEach(section => {

const elementTop = section.getBoundingClientRect().top;
const elementVisible = 100;

if(elementTop < windowHeight - elementVisible){
section.classList.add("active");
}

});

}

window.addEventListener("scroll", revealSections);

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
link.addEventListener("click", () => {
navLinks.classList.remove("active");
});
});
document.addEventListener("click", (event) => {

if(!navLinks.contains(event.target) && !menuToggle.contains(event.target)){
navLinks.classList.remove("active");
}

});