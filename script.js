// script.js

// Ajoutez votre code JavaScript ici
const textElement = document.querySelector('.type-machine');
const textToType = 'Bonjour, je suis un texte de type machine à écrire !';
let index = 0;

function typeWriter() {
  if (index < textToType.length) {
    textElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Vitesse de défilement du texte (en millisecondes)
  }
}

typeWriter();

