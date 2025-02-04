// Tableau des clients
const clients = [
    { id: 1, nom: 'Aliou', email: 'aliou@example.com', telephone: '77 123 4567', categorie: 'Fidèle', dettes: [] },
    { id: 2, nom: 'Moussa', email: 'moussa@example.com', telephone: '76 987 6543', categorie: 'Solvable', dettes: [] },
    { id: 3, nom: 'Awa', email: 'awa@example.com', telephone: '70 654 3210', categorie: 'Nouveau', dettes: [] },
    { id: 4, nom: 'Fatou', email: 'fatou@example.com', telephone: '78 321 9876', categorie: 'Non Solvable', dettes: [] },
    { id: 5, nom: 'Bamba', email: 'bamba@example.com', telephone: '77 555 8888', categorie: 'Fidèle', dettes: [] }
];

let clientActuel = null;

// Fonction pour afficher la liste des clients
function afficherClients() {
    const clientTable = document.getElementById("clientTable");
    clientTable.innerHTML = ""; // Réinitialisation de la table

    clients.forEach(client => {
        const row = `<tr onclick="afficherFicheClient(${client.id})">
            <td>${client.nom}</td>
            <td>${client.email}</td>
            <td>${client.telephone}</td>
            <td>${client.categorie}</td>
        </tr>`;
        clientTable.innerHTML += row;
    });
}

// Fonction pour afficher la fiche d'un client
function afficherFicheClient(id) {
    clientActuel = clients.find(client => client.id === id);
    if (!clientActuel) return alert("Client non trouvé !");

    document.getElementById("ficheNom").textContent = clientActuel.nom;
    document.getElementById("ficheTelephone").textContent = clientActuel.telephone;
    document.getElementById("ficheCategorie").textContent = clientActuel.categorie;
    document.getElementById("ficheEmail").textContent = clientActuel.email;
    
    document.getElementById("ficheClient").classList.remove("hidden");
    afficherDettes(clientActuel.dettes);
}

// Fonction pour afficher les dettes du client
function afficherDettes(dettesFiltrees) {
    const dettesTable = document.getElementById("dettesTable");
    dettesTable.innerHTML = ""; 

    dettesFiltrees.forEach(dette => {
        let row = `<tr>
            <td>${dette.article}</td>
            <td>${dette.montant} CFA</td>
            <td>${dette.statut}</td>
        </tr>`;
        dettesTable.innerHTML += row;
    });
}

// Fonction pour filtrer les dettes
function filtrerDettes() {
    if (!clientActuel) return;

    const statutChoisi = document.getElementById("statutFilter").value;
    const dettesFiltrees = statutChoisi ? clientActuel.dettes.filter(d => d.statut === statutChoisi) : clientActuel.dettes;
    afficherDettes(dettesFiltrees);
}

// Fonction pour ajouter un nouveau client
function ajouterClient() {
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const categorie = document.getElementById("categorie").value;

    // Vérifier si tous les champs sont remplis
    if (!nom || !email || !telephone || !categorie) {
        alert("Tous les champs sont obligatoires !");
        return;
    }

    // Vérifier l'unicité de l'email et du téléphone
    if (clients.some(client => client.email === email)) {
        alert("Cet email est déjà utilisé !");
        return;
    }
    if (clients.some(client => client.telephone === telephone)) {
        alert("Ce numéro de téléphone est déjà utilisé !");
        return;
    }

    // Ajouter le nouveau client
    const nouveauClient = {
        id: Date.now(),
        nom,
        email,
        telephone,
        categorie,
        dettes: []
    };
    clients.push(nouveauClient);

    // Mettre à jour l'affichage
    afficherClients();

    // Réinitialiser le formulaire
    document.getElementById("clientForm").reset();

    alert("Client ajouté avec succès !");
}

// Initialiser l'affichage des clients au chargement
document.addEventListener("DOMContentLoaded", afficherClients);
