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
  var form_copier_coller = document.getElementById("form-copier-coller")
  // On sélectionne le <textarea>
  var textarea_texte = document.getElementById("texte")

  // Copier le texte
  copierTexte = (e) => {
      // On désactive l'action du formulaire
      e.preventDefault()
      // 1. Si le <textarea> n'est pas vide
      if (textarea_texte.value.length) {
          // 2. On copie le texte dans le presse-papier
          navigator.clipboard.writeText(textarea_texte.value).then(() => {
              // 3. On réinitialise le formulaire
              form_copier_coller.reset()
              // 4. On affiche l'alert
              alert("Texte copié !")
          })
      } else {
          alert("Veillez saisir le texte à copier")
      }
  }
  // Coller le texte sera inséré ici


