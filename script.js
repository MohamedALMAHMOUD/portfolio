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

  var editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    lineNumbers: true,  // Afficher les numéros de ligne
    mode: "text/html",  // Définir le mode de coloration syntaxique (HTML, CSS, JavaScript, etc.)
    theme: "default"  // Choisir un thème pour l'éditeur
    // Autres options que vous souhaitez configurer
  });

