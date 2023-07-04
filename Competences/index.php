<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio</title>
    <link rel="stylesheet" href="https://mohamedalmahmoud.github.io/portfolio/style.css">
</head>
<body>
    <!-- Votre contenu ici -->
    <center><h1>Mohamed ALMAHMOUD</h1><h4>Data scientist | Data analyst </h4><h6>Docteur en didactique des mathématiques</h6></center>
    <div class="slideshow-container">
        <div class="mySlides fade">
          <img src="../images/image1.png" style="width:100%">
        </div>
        <div class="mySlides fade">
          <img src="../images/image2.png" style="width:100%">
        </div>
        <div class="mySlides fade">
          <img src="../images/image3.png" style="width:100%">
        </div>
        </div>
        <br>
        <div style="text-align:center">
          <span class="dot"></span> 
          <span class="dot"></span> 
          <span class="dot"></span> 
        </div>
        <script>
        let slideIndex = 0;
        showSlides();
        
        function showSlides() {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          setTimeout(showSlides, 2000); // Change image every 2 seconds
        }
        </script>
    <header>
        <nav>
            <ul>
                <li><a href="../index.html">Accueil</a></li>
                <li><a href="../Projects/index.html">Projets</a></li>
                <li><a href="index.php">Compétences</a></li>
                <li><a href="../CV/index.html">CV</a></li>
            </ul>
        </nav>
    </header>
    <main>

        <section id="competences">
            <h2>Compétences</h2>
                <p>Depuis 2012, je cumule des compéténces polyvalents. En effet,
                     alors que je me suis concentré sur ma thèse à l'époque,
                      la création des sites internet, la création des applications,
                       l'apprentissage des languages de programmation, etc. se développaient 
                       en parallèle. Tout cela m'a permis de me reconvertir facilment en Data
                        science en début de 2021. C'est l'effet de boule de neige. Voici un apperçu
                         des mes compétences polyvalentes:</p>
                <pre>
                <?php
                $code = '<?php echo "Hello, World!"; ?>';
                highlight_string($code);
                ?>
                </pre>
                <ol class="c">
                    <li>Python</li>
                    <li>Wordpress</li>
                    <li>Applications</li>
                </ol>
        </section>

    </main>   

    <script src="script.js"></script>
</body>
</html>