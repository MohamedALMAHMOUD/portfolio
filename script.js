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
const $ = function (selector, bind) {
	var bind = bind === undefined ? document : bind;
	let nodes = bind.querySelectorAll.bind(bind)(selector);
	return nodes.length == 1 ? nodes[0] : nodes;
};
var textarea = $(".editor");
var editor = CodeMirror.fromTextArea(textarea, {
	theme: "berry-dark",
	autoRefresh: true,
	firstLineNumber: 1,
	lineNumbers: true,
	smartIndent: true,
	lineWrapping: true,
	indentWithTabs: true,
	refresh: true
});
editor.removeTag = CodeMirror.removeTag;
var cm = $(".CodeMirror");
cm.editor = editor;
editor.save();
editor.setOption("mode", "htmlmixed");

$(".copy-code-wrap").onclick = function (e) {
	if (e.which == 1) {
		// write the text to the clipboard
		navigator.clipboard.writeText(editor.getValue());

		// animate the button
		var copy = $(".copy-code", this);
		function quickadd() {
			copy.classList.add("animate");
			setTimeout(function () {
				copy.classList.remove("animate");
			}, 200);
		}
		quickadd();
	}
};
