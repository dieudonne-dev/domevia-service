
  // Liste des images du slider
  const hero = document.querySelector('.hero');
  const images = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1581093588401-22d35dfeac89?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80"
  ];

  let index = 0;

  function changeBackground() {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url('${images[index]}')`;
  }

  // Démarrage du changement toutes les 5 secondes
  setInterval(changeBackground, 5000);



const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

// Afficher / cacher menu au clic sur hamburger
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});



// Scroll doux + fade-in
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 80; // hauteur du header fixe
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  });
});

// Fade-in au scroll
const sections = document.querySelectorAll('section');

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85; // déclenche à 85% de l'écran
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections); // pour afficher les sections déjà visibles au chargement

