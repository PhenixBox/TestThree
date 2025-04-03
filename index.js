document.getElementById('personalForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche la soumission du formulaire

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    const storageChoice = document.querySelector('input[name="storageChoice"]:checked').value;

    // Sauvegarder les données dans sessionStorage pour la page 2
    sessionStorage.setItem('nom', nom);
    sessionStorage.setItem('prenom', prenom);
    sessionStorage.setItem('telephone', telephone);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('storageChoice', storageChoice);

    // Rediriger vers la page 2
    window.location.href = 'page2.html';
});
