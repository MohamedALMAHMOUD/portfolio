// script.js

// Ajoutez votre code JavaScript ici
const textElement = document.querySelector('.type-machine');
const textToType = "Je suis fasciné par l'informatique, autodidacte et je me forme en permanence en Python, SQL et Machine Learning. J'aime le nouveau chalenge et je suis ouvert à toute proposition dans le domaine de la data. Je suis quelqu'un très motivé et force de propositions, j'aime l'échange et le travail en équipe.";
let index = 0;

function typeWriter() {
  if (index < textToType.length) {
    textElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Vitesse de défilement du texte (en millisecondes)
  }
}

typeWriter();
// Fonction pour copier le contenu de l'éditeur de code dans le presse-papiers
function copyCode() {
  var codeEditor = document.getElementById("code-editor");
  codeEditor.select();
  document.execCommand("copy");
  alert("Le code a été copié !");
}

// Ajoute un gestionnaire d'événements au bouton "Copier le code"
var copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", copyCode);