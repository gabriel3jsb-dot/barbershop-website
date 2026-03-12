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