// Référence au formulaire et à la table
const clientForm = document.getElementById('clientForm');
const clientTableBody = document.getElementById('clientTableBody');

// Gestionnaire d'événements pour le formulaire
clientForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const adresse = document.getElementById('adresse').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;

    // Création d'une nouvelle ligne dans le tableau
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nom}</td>
        <td>${prenom}</td>
        <td><img src="#" alt="Photo" width="50"></td>
        <td>${adresse}</td>
        <td>${telephone}</td>
        <td>${email}</td>
        <td>
            <button class="btn btn-warning btn-sm">Modifier</button>
            <button class="btn btn-danger btn-sm">Supprimer</button>
        </td>
    `;

    // Ajouter la ligne au tableau
    clientTableBody.appendChild(newRow);

    // Réinitialiser le formulaire et fermer la modale
    clientForm.reset();
    const clientModal = bootstrap.Modal.getInstance(document.getElementById('clientModal'));
    clientModal.hide();
});

// Suppression d'un client (exemple d'action)
clientTableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-danger')) {
        const row = e.target.closest('tr');
        row.remove();
    }
});
