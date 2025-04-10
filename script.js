// Initialisation d'AOS pour les animations au scroll
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
});

// Navigation fluide
document.querySelectorAll("nav ul li a, .footer-nav ul li a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Gestion améliorée du formulaire de contact
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  // Ici vous pouvez intégrer une requête AJAX ou fetch vers votre backend
  // Pour l'exemple, on affichera une modale de confirmation
  showConfirmation();
  this.reset();
});

function showConfirmation() {
  // Créer une modale simple
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <p>Votre message a bien été envoyé ! Nous vous répondrons sous peu.</p>
    </div>
  `;
  document.body.appendChild(modal);
  
  // Fermer la modale au clic sur la croix ou à l'extérieur
  modal.querySelector(".modal-close").addEventListener("click", () => {
    modal.remove();
  });
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
        }
