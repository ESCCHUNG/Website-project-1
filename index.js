/* Navbar ///////////////////////////////////////////////////////////////////////*/
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
/* Navbar ///////////////////////////////////////////////////////////////////////*/

/* Darkmode /////////////////////////////////////////////////////////////////////*/
var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
       icon.src = "images/Moon.png";
    }else{
        icon.src = "images/Sun.png";
       } 
    }
/* Darkmode /////////////////////////////////////////////////////////////////////*/



/* Image Slideshow /////////////////////////////////////////////////////////////////////*/

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
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";

}





/* Image Slideshow /////////////////////////////////////////////////////////////////////*/

