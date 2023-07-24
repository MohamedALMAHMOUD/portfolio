// script.js

// Sellection of the classe "type-machine"
const textElement = document.querySelector('.type-machine');

// Recovering text to show from the contenu of element
const textToType = textElement.textContent;

let index = 0;

// Effect of type machine 
function typeWriter() {
  if (index < textToType.length) {
    //Adding caracter by caracter
    textElement.textContent = textToType.substring(0, index + 1);
    index++;
    // Time of typing 50 ms
    setTimeout(typeWriter, 50);
  }
}

// Calling the fonction typeWriter
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

// Sending request Fonction
function sendRequest() {
  console.log("Function sendRequest() called");
  var password = document.getElementsByName("mdp")[0].value;
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://flask-ahaz.onrender.com/api/check_password", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      document.getElementById("responseDiv").innerText = response.result;
    }
  };
  xhr.send(JSON.stringify({ "mdp": password }));
}

// Calling the fonction sendRequest
//sendRequest();