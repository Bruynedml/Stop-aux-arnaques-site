// script.js document.addEventListener("DOMContentLoaded", function() { // Gestion des boutons de navigation document.querySelectorAll("nav ul li a").forEach(link => { link.addEventListener("click", function(event) { event.preventDefault(); const targetId = this.getAttribute("href").substring(1); document.getElementById(targetId).scrollIntoView({ behavior: "smooth" }); }); });

// Gestion du formulaire de contact
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Votre message a bien été envoyé ! Nous vous répondrons sous peu.");
    this.reset();
});

});

