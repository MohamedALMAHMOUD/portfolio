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
function copyCode() {
  // Récupérer le contenu de l'éditeur de code
  var code = document.getElementById("code-editor").value;

  // Créer un élément temporaire (input) pour copier le code dans le presse-papiers
  var tempInput = document.createElement("textarea");
  document.body.appendChild(tempInput);
  tempInput.value = code;
  tempInput.select();

  // Exécuter la commande de copie
  document.execCommand("copy");

  // Supprimer l'élément temporaire
  document.body.removeChild(tempInput);

  // Afficher un message pour informer que le code a été copié
  alert("Le code a été copié dans le presse-papiers.");
}
