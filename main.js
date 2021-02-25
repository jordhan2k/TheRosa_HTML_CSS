// select element
const selectElement = function(element) {
    return document.querySelector(element);
};



const menuToggler = selectElement(".menu-toggle");
console.log()
const body = selectElement("body");

menuToggler.addEventListener("click", function() {
    body.classList.toggle("open");
});


//Scroll reveal 
window.sr = ScrollReveal();
sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 200
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 200
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 200
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 200
});