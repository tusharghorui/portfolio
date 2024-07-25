var typed = new Typed('#element', {
strings: ['Web Developer','Software Developer','Tech geek','Robotics Enthusiast','ML Enthusiast','Automobile Enthusiast','Student'],
typeSpeed: 85,
});
let slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
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

let Index = 1;
showSlide(Index);
function curslide(m) {
showSlide(Index = m);
}

function showSlide(m) {
let k;
let slide = document.getElementsByClassName("skill-slide");
let dot = document.getElementsByClassName("dotz");
if (m > slide.length) {Index = 1}
if (m < 1) {Index = slide.length}
for (k = 0; k < slide.length; k++) {
slide[k].style.display = "none";
}
for (k = 0; k < dot.length; k++) {
dot[k].className = dot[k].className.replace(" active", "");
}
slide[Index-1].style.display = "block";
dot[Index-1].className += " active";
}
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}