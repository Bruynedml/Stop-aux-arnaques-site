document.addEventListener("DOMContentLoaded", function() { const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    alert("Votre message a bien été envoyé ! Nous vous répondrons sous peu.");
    form.reset();
});

});

