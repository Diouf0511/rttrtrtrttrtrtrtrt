



function toggleForm() {
    document.getElementById('form-container').classList.toggle('d-none');
}

// Fonction pour ajouter un client
function addClient() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const photo = document.getElementById('photo').value;
    const adresse = document.getElementById('adresse').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;

    if (nom && prenom && photo && adresse && telephone && email) {
        const client = { nom, prenom, photo, adresse, telephone, email };
// Charger la liste des clients au démarrage
document.addEventListener('DOMContentLoaded', displayClients);

// Fonction pour afficher les clients
function displayClients() {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const tableBody = document.getElementById('client-list');
    tableBody.innerHTML = "";

    clients.forEach((client, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.nom}</td>
            <td>${client.prenom}</td>
            <td><img src="${client.photo || 'https://via.placeholder.com/50'}" width="50"></td>
            <td>${client.adresse}</td>
            <td>${client.telephone}</td>
            <td>${client.email}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteClient(${index})">Supprimer</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Fonction pour ajouter un client
function addClient() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const photo = document.getElementById('photo').value || "https://via.placeholder.com/50";
    const adresse = document.getElementById('adresse').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;

    if (nom && prenom && adresse && telephone && email) {
        const client = { nom, prenom, photo, adresse, telephone, email };
        const clients = JSON.parse(localStorage.getItem('clients')) || [];
        clients.push(client);
        localStorage.setItem('clients', JSON.stringify(clients));

        displayClients(); // Mettre à jour l'affichage
        document.getElementById('clientForm').reset(); // Réinitialiser le formulaire
        document.querySelector('.btn-close').click(); // Fermer le modal
    } else {
        alert('Tous les champs sont obligatoires');
    }
}


function deleteClient(index) {
    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.splice(index, 1);
    localStorage.setItem('clients', JSON.stringify(clients));
    displayClients();
}

       
        const clients = JSON.parse(localStorage.getItem('clients')) || [];
        clients.push(client);

        localStorage.setItem('clients', JSON.stringify(clients));

       
        displayClients();

       
        document.getElementById('clientForm').reset();

        // Cacher le formulaire
        toggleForm();
    } else {
        alert('Tous les champs sont obligatoires');
    }
}

// Fonction pour afficher la liste des clients depuis localStorage
function displayClients() {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const tableBody = document.getElementById('client-list');
    tableBody.innerHTML = ""; // Efface le contenu avant de le recharger

    clients.forEach((client, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.nom}</td>
            <td>${client.prenom}</td>
            <td><img src="${client.photo}" alt="Photo" width="50"></td>
            <td>${client.adresse}</td>
            <td>${client.telephone}</td>
            <td>${client.email}</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="deleteClient(${index})">Supprimer</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Fonction pour supprimer un client
function deleteClient(index) {
    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.splice(index, 1); // Supprimer l'élément du tableau
    localStorage.setItem('clients', JSON.stringify(clients));
    displayClients(); // Recharger la liste des clients
}

// Charger la liste des clients au démarrage
document.addEventListener('DOMContentLoaded', displayClients);
