let language = "english";
function switchLang() {
  if (language == "german") {
    language = "english";
  } else {
    language = "german";
  }

  if (language == "german") {
    document.getElementById("welcomeBg").textContent = "Willkommen auf meinem Portfolio";
    welcomeText = 'Wilkommen';
    document.documentElement.style.setProperty('--welcome', '"' + welcomeText + '"');
    document.getElementById("aboutMe").textContent = "Über mich";
    document.getElementById("intro").textContent =
      "Hallo, mein Name ist Sophia. Ich mache gerade eine Ausbildung zur Fachinformatikerin. Im Moment lerne ich Python, Java und GDscript.";
    document.getElementById("skills").textContent = "Meine Fähigkeiten";
    document.getElementById("projects").textContent = "Projekte";
    document.getElementById("descSprite").textContent =
      "Ein einfaches 2D-Jump 'n' Run-Spiel um Godot zu lernen.";
    document.getElementById("descPY").textContent =
      "Ein gewöhnlicher Python-Passwort-Generator (aber niedlich)";
    document.getElementById("descRPS").textContent =
      "Stein-Papier-Schere-Spiel";
    document.getElementById("descSW").textContent = "Stoppuhr in JavaScript";
    document.getElementById("descKaplan").textContent =
      "Ein einfaches Adressbuch in Python mit customtkinter GUI.";
  } else if (language == "english") {
    document.getElementById("welcomeBg").textContent = "Welcome to my Portfolio";
    welcomeText = 'Welcome';
    document.documentElement.style.setProperty('--welcome', '"' + welcomeText + '"');
    document.getElementById("aboutMe").textContent = "About me";
    document.getElementById("intro").textContent =
      "Hi, my name is Sophia. I'm currently training to be an IT specialist. At the moment i'm learning Python, Java and GDscript.";
    document.getElementById("skills").textContent = "My Skills";
    document.getElementById("projects").textContent = "Projects";
    document.getElementById("descSprite").textContent =
      "A simple 2D Jump 'n' Run game to explore Godot.";
    document.getElementById("descPY").textContent =
      "An ordinary Python Password Generator (but cute)";
    document.getElementById("descRPS").textContent = "Rock Paper Scissors Game";
    document.getElementById("descSW").textContent = "Stopwatch in JavaScript";
    document.getElementById("descKaplan").textContent =
      "A simple Address Book in python with customtkinter GUI.";
  }
}

function jump() {
  document.getElementById("content").scrollIntoView();
}

function openBar() {
  document.getElementById("controlbar").style.display = "flex";
  document.getElementById("openbtn").style.display = "none";
}

function closeBar() {
  document.getElementById("controlbar").style.display = "none";
  document.getElementById("openbtn").style.display = "block";
}

let navbarOpen = false;
function openNav() {
  if (navbarOpen == false) {
    document.getElementById('mobileNav').style.display = "block";
    navbarOpen = true;
  } else if (navbarOpen == true) {
    document.getElementById('mobileNav').style.display = "none";
    navbarOpen = false;
  }
}

let slideIndex = 1;

window.addEventListener('load', () => {
  showSlides(slideIndex);
})

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
} 