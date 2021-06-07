let mySlides = Array.from(document.querySelectorAll(".slider"));
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    if (n > mySlides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = mySlides.length}
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";  
    }
    mySlides[slideIndex-1].style.display = "block";  
}