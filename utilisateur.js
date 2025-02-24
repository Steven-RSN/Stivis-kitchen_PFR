import recueil from "./glossaire.js";


// Initialise les variables et récupère les élements HTML
// const titreR = document.getElementsByClassName('titreRecette');
// const titreRecetteTb = Array.from(titreR);
// const vignetteRecette = document.getElementsByClassName('img_recette');
// const auteur = document.getElementsByClassName('nomUtilisateur ')
// const vignetteRecetteTb = Array.from(vignetteRecette);  //convertit en tableau
//  console.log(auteur)




// Boucle pour afficher les titres et les images des recettes situées dans glossaire.js
// for(let i =0 ; i<vignetteRecetteTb.length; i++){
//     if(auteur[i].auteur ==='Helene Darroze'){
//         titreRecetteTb[i].innerText=`${recueil[i].titre}`;
//         auteur[i].innerText=`${recueil[i].auteur}`;                  
//         vignetteRecetteTb[i].style.background=`url(${recueil[i].img})`;
//         vignetteRecetteTb[i].style.backgroundSize=`cover`;
//     }else{
//         vignetteRecetteTb[i].display='none';
//     }
// }

// 'Alain Ducasse'
// 'Helene Darroze'

// Initialise les variables et récupère les élements HTML
const titreR = document.getElementsByClassName('titreRecette');
const titreRecetteTb = Array.from(titreR);
const vignetteRecette = document.getElementsByClassName('img_recette');
const auteurElements = document.getElementsByClassName('nomUtilisateur');
const vignetteRecetteTb = Array.from(vignetteRecette);  //convertit en tableau
const auteurTb = Array.from(auteurElements);

// Boucle pour afficher les titres et les images des recettes situées dans glossaire.js
// for(let i = 0 ; i < vignetteRecetteTb.length; i++){
//     if(recueil[i].auteur ==='Helene Darroze'){
//         titreRecetteTb[i].innerText=`${recueil[i].titre}`;
//         auteurElements[i].innerText=`${recueil[i].auteur}`;
//         vignetteRecetteTb[i].style.backgroundImage=`url(${recueil[i].img})`;
//         vignetteRecetteTb[i].style.backgroundSize=`cover`;
//     }else{
//         vignetteRecetteTb[i].style.display='none';
//     }
// }

const recettesContainer = document.querySelector('.itemPopulaire');
for (let i = 0; i < recueil.length; i++) {
    
    if (recueil[i].auteur === 'Alain Ducasse') {
        
         // Création de la div principale
         let divRecette = document.createElement('div');
         divRecette.classList.add('vigniette_recette');

         // Création de l'image et du titre
         let imgRecette = document.createElement('div');
         imgRecette.classList.add('img_recette');
         imgRecette.style.backgroundImage = `url(${recueil[i].img})`;
         imgRecette.style.backgroundSize='cover'

         let titreRecette = document.createElement('h6');
         titreRecette.classList.add('titreRecette');
         titreRecette.innerText = recueil[i].titre;

         
         let tempDiv = document.createElement('div');
         tempDiv.classList.add('temp');

         let imgUtilisateur = document.createElement('div');
         imgUtilisateur.classList.add('img-utilisateur');
         tempDiv.appendChild(imgUtilisateur);

         let nomUtilisateur = document.createElement('p');
         nomUtilisateur.classList.add('nomUtilisateur');
         nomUtilisateur.innerText = recueil[i].auteur ;
         tempDiv.appendChild(nomUtilisateur);

         
         divRecette.appendChild(imgRecette);
         imgRecette.appendChild(titreRecette);
         imgRecette.appendChild(tempDiv);

         
         let etoilsDiv = document.createElement('div');
         etoilsDiv.classList.add('etoils');
         divRecette.appendChild(etoilsDiv);

         // Clic pour rediriger vers la page de recette
         divRecette.addEventListener('click', function () {
             window.location.href = `recette.html?recette=${i}`;
         });

         
         recettesContainer.appendChild(divRecette);
        }
}