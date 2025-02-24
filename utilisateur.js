import recueil from "./glossaire.js";

// Récupère les "paramètres" de l'URL
let urlParams = new URLSearchParams(window.location.search);

//Récupère l'auteur
let auteurImport = urlParams.get("auteur");

console.log(auteurImport); // vérifier
if (auteurImport) {
    const recettesContainer = document.querySelector('.itemPopulaire');
    const nomUtilisateur = document.querySelector('h2');
    nomUtilisateur.textContent=auteurImport
    // Parcourir toutes les recettes et afficher uniquement celles de l’auteur sélectionné
    for (let i = 0; i < recueil.length; i++) {
        if (recueil[i].auteur.trim().toLowerCase() === auteurImport.trim().toLowerCase()) { //A simplifier
            let recette = recueil[i];

            let divRecette = document.createElement('div');
            divRecette.classList.add('vigniette_recette');

            let imgRecette = document.createElement('div');
            imgRecette.classList.add('img_recette');
            imgRecette.style.backgroundImage = `url(${recette.img})`;
            imgRecette.style.backgroundSize = 'cover';

            let titreRecette = document.createElement('h6');
            titreRecette.classList.add('titreRecette');
            titreRecette.innerText = recette.titre;

            let tempDiv = document.createElement('div');
            tempDiv.classList.add('temp');

            let imgUtilisateur = document.createElement('div');
            imgUtilisateur.classList.add('img-utilisateur');
            tempDiv.appendChild(imgUtilisateur);

            let nomUtilisateur = document.createElement('p');
            nomUtilisateur.classList.add('nomUtilisateur');
            nomUtilisateur.innerText = recette.auteur;
            tempDiv.appendChild(nomUtilisateur);

            divRecette.appendChild(imgRecette);
            imgRecette.appendChild(titreRecette);
            imgRecette.appendChild(tempDiv);

            let etoilsDiv = document.createElement('div');
            etoilsDiv.classList.add('etoils');
            divRecette.appendChild(etoilsDiv);

            // Clic pour rediriger vers la page de recette
            divRecette.addEventListener('click', function () {
                window.location.href = `recette.html?titre=${encodeURIComponent(recette.titre)}`;
            });

            recettesContainer.appendChild(divRecette);
        }
    }
}