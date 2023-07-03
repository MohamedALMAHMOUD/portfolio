// script.js

// Ajoutez votre code JavaScript ici
const textElement = document.getElementById('typewriter-text');
const text = "Bienvenue sur mon portfolio.";
let index = 0;

function type() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 50); // Vitesse de frappe, ajustez-la selon vos préférences
  }
}

type();

