/* Slider icin Fonksiyon */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot"); 
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); 
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"; 
}


/* Filter Menu OnClick icin Fonksiyon */
function myFunction() {
  var x = document.getElementById("dropdown-mobil-content");
  if (x.style.display === "block") {
    x.style.display = "none";
  } 
  else {
    x.style.display = "block";
  } 
}

/* Hamburger Menu icin Fonksiyon */
function myHFunction() {
  var menum = document.getElementById("myHamburger");
  if (menum.style.display === "block") {
    menum.style.display = "none";
  } else {
    menum.style.display = "block";
  }
}