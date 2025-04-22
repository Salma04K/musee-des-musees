// Message de confirmation à l'envoi du formulaire
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Empêche l'envoi réel
            alert("Merci pour votre message ! Nous vous répondrons bientôt.");
            form.reset(); // Réinitialise les champs du formulaire
        });
    });
});

// Défilement fluide vers le formulaire de contact
document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.querySelector('nav a[href*="contact"]');
    const contactSection = document.querySelector('.contact-form');

    if (contactLink && contactSection) {
        contactLink.addEventListener("click", function (e) {
            e.preventDefault();
            contactSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});

