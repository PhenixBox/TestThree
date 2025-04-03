document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le choix de stockage depuis la sessionStorage
    const boxChoice = sessionStorage.getItem('storageChoice');
    const boxDetails = document.getElementById('boxDetails');

    // Vérifier que l'information est bien récupérée et afficher le choix de la box
    if (boxChoice) {
        boxDetails.textContent = `Vous avez choisi : ${boxChoice} (tarif mensuel).`;
    }

    // Sélectionner la case à cocher et le bouton
    const checkbox = document.getElementById('acceptCGU');
    const button = document.getElementById('accepterButton');

    // Fonction pour activer/désactiver le bouton en fonction de la case cochée
    function toggleButtonState() {
        button.disabled = !checkbox.checked;
    }

    // Ajouter un événement de changement sur la case à cocher pour activer/désactiver le bouton
    checkbox.addEventListener('change', toggleButtonState);

    // Ajouter un événement au bouton pour rediriger vers la page 3 lors du clic
    button.addEventListener('click', function() {
        if (checkbox.checked) {
            // Rediriger vers la page 3 pour le paiement
            window.location.href = 'page3.html';
        } else {
            alert('Vous devez accepter les CGU et CGV pour continuer.');
        }
    });
});
