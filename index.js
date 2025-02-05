let clients = JSON.parse(localStorage.getItem("clients")) || [
    { id: 1, nom: 'Aliou', email: 'aliou@example.com', telephone: '77 123 4567', categorie: 'Fidèle' },
    { id: 2, nom: 'Moussa', email: 'moussa@example.com', telephone: '76 987 6543', categorie: 'Solvable' },
    { id: 3, nom: 'Awa', email: 'awa@example.com', telephone: '70 654 3210', categorie: 'Nouveau' },
    { id: 4, nom: 'Fatou', email: 'fatou@example.com', telephone: '78 321 9876', categorie: 'Non Solvable' },
    { id: 5, nom: 'Bamba', email: 'bamba@example.com', telephone: '77 555 8888', categorie: 'Fidèle' }
];

// Fonction pour afficher la liste des clients
function afficherClients() {
    const clientTable = document.getElementById("clientTable");
    if (!clientTable) return;
    clientTable.innerHTML = ""; // Réinitialisation de la table

    clients.forEach(client => {
        const row = `<tr>
            <td>${client.nom}</td>
            <td>${client.email}</td>
            <td>${client.telephone}</td>
            <td>${client.categorie}</td>
        </tr>`;
        clientTable.innerHTML += row;
    });
}

// Fonction pour filtrer les clients
function filtrerClients() {
    const categorieChoisie = document.getElementById("categorieFilter").value;
    const clientsFiltrés = categorieChoisie ? clients.filter(client => client.categorie === categorieChoisie) : clients;
    afficherClients(clientsFiltrés);
}

// Fonction pour ajouter un client
function ajouterClient() {
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const categorie = document.getElementById("categorie").value;

    if (!nom || !email || !telephone || !categorie) {
        alert("Tous les champs sont obligatoires !");
        return;
    }

    if (clients.some(client => client.email === email)) {
        alert("Cet email est déjà utilisé !");
        return;
    }
    if (clients.some(client => client.telephone === telephone)) {
        alert("Ce numéro de téléphone est déjà utilisé !");
        return;
    }

    const nouveauClient = { id: clients.length + 1, nom, email, telephone, categorie };
    clients.push(nouveauClient);

    // Sauvegarde des clients en localStorage
    localStorage.setItem("clients", JSON.stringify(clients));

    alert("Client ajouté avec succès !");
    window.location.href = "index.html"; // Redirection vers la liste des clients
}
