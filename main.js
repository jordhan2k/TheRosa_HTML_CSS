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