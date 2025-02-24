import recueil from "./glossaire.js"; 


// Récupère les paramètres de l'URL

const params = new URLSearchParams(window.location.search); 
const recetteIndex = params.get('recette');  // Récupère l'index de la recette


if (recetteIndex !== null) { // Si l'index existe 
    const recette = recueil[recetteIndex]; // Récupère la recette ref index
    console.log(recette)

    const auteurRecette = document.getElementById('auteur');
    console.log(auteurRecette)
    if (auteurRecette && recette.auteur) {  // Vérifie que 'recette.auteur' existe
        auteurRecette.textContent = recette.auteur;  // Met à jour le nom de l'auteur
        auteurRecette.href = `utilisateur.html?auteur=${encodeURIComponent(recette.auteur)}`;  // Crée l'URL avec l'auteur
    } else {
        console.error("L'auteur de la recette est manquant dans l'objet recette.");
    }
}