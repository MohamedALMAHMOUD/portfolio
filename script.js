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

/* script button copy paste */
let HTMLBox = document.getElementById("HTMLBox");
      let HTMLButton = document.getElementById("HTMLButton");
      HTMLButton.onclick = function () {
        HTMLBox.select();
        document.execCommand("copy");
        HTMLButton.innerText = "Codes Copied";
      };
      // CSS Box Js Code
      let CSSBox = document.getElementById("CSSBox");
      let CSSButton = document.getElementById("CSSButton");
      CSSButton.onclick = function () {
        CSSBox.select();
        document.execCommand("copy");
        CSSButton.innerText = "Codes Copied";
      };
      // JavaScript BOx JS Code
      let JSBox = document.getElementById("JSBox");
      let JSButton = document.getElementById("JSButton");
      JSButton.onclick = function () {
        JSBox.select();
        document.execCommand("copy");
        JSButton.innerText = "Codes Copied";
      }; 