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


