// script.js

// Ajoutez votre code JavaScript ici
const textElement = document.querySelector('.type-machine');
const textToType = textElement.getAttribute('data-text');
let index = 0;

function typeWriter() {
  if (textElement) {
    if (index < textToType.length) {
      textElement.textContent += textToType.charAt(index);
      index++;
      setTimeout(typeWriter, 50); // Vitesse de défilement du texte (en millisecondes)
    }
  }
}

typeWriter();

// carousel
let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
  }
  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


showSlides();