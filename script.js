
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");

  const showAll = () => {
    elements.forEach(el => el.classList.add("visible"));
  };

  // Test si IntersectionObserver est disponible
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    // Sécurité : forcer l'affichage après 2s au cas où IntersectionObserver échoue
    setTimeout(showAll, 2000);
  } else {
    // Si pas supporté, tout afficher direct
    showAll();
  }
});
