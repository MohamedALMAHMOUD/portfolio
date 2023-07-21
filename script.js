// script.js

// Sélectionne l'élément avec la classe "type-machine"
const textElement = document.querySelector('.type-machine');

// Récupère le texte à afficher depuis le contenu de l'élément
const textToType = textElement.textContent;

let index = 0;

// Fonction pour simuler l'effet de machine à écrire
function typeWriter() {
  if (index < textToType.length) {
    // Ajoute le caractère courant au texte de l'élément
    textElement.textContent = textToType.substring(0, index + 1);
    index++;
    // Appelle la fonction typeWriter de manière récursive avec un délai de 50 millisecondes
    setTimeout(typeWriter, 50);
  }
}

// Appelle la fonction typeWriter pour démarrer l'effet de machine à écrire
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