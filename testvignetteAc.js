import recueil from "./glossaire.js";


console.log(recueil); // Affichera toutes les recettes du glossaire
console.log(recueil[0].titre); // Affichera "boeuf bourguignon"

const titreR = document.getElementsByClassName('titreRecette');
const titreRecetteTb = Array.from(titreR);

const vignietteRecette = document.getElementsByClassName('img_recette');
const vignietteRecetteTb = Array.from(vignietteRecette);


for(let i =0 ; i<vignietteRecetteTb.length; i++){
    titreRecetteTb[i].innerText=`${recueil[i].titre}`;
    console.log(`${recueil[i].titre}`)

    vignietteRecetteTb[i].style.background=`url(${recueil[i].img})`;
    vignietteRecetteTb[i].style.backgroundSize=`cover`;
    
}

vignietteRecetteTb.forEach(function(recette,index) {
    
    recette.addEventListener('click',function(){
        window.location.href = `recette.html?recette=${index}`;
    })
    
});



const params = new URLSearchParams(window.location.search);
const recetteIndex = params.get('recette'); // Récupère l'index de la recette

// si l'index existe et si c'est bien un nombre valide
if (recetteIndex !== null && !isNaN(recetteIndex)) {

    const index = parseInt(recetteIndex)

    // Récupérer l'image de la recette en fonction de l'index
    const recette = recueil[index]

    const titre=document.querySelector('h1')
    console.log(titre)
    titre.innerText=recette.titre.charAt(0).toUpperCase() + recette.titre.slice(1)

 
    const imgGrandeRecette = document.querySelector('.grandeImage');
    imgGrandeRecette.src= recette.img;

    const imgPetiteRecette = document.querySelectorAll('.petiteImage')
    const imgPetiteTb = Array.from(imgPetiteRecette)
    for(let img of imgPetiteTb){
        img.src= recette.img;
      
    }

    const h4=document.querySelector('.articleRecetteGrisIngrédiant h4')
    h4.innerText=`Ingrédient pour ${recette.nbPersonne} personnes :`

    const ulIngre = document.querySelector('#ingrédientsUl')
    const listeIngredient = document.querySelectorAll('#ingrédientsUl li')
    const listeIngredientTb = Array.from(listeIngredient)

    for(let i=0; i<recueil[index].ingredients.length;i++){
       // console.log('taille de la liste ingré',recueil[index].ingredients.length)
       // console.log('taille de la liste li',listeIngredientTb.length)
        let result = recueil[index].ingredients.length - listeIngredientTb.length
        console.log(result)
        if(result>0){
            for(let j=0; j<result;j++){
                const newLi= document.createElement('li')
                ulIngre.appendChild(newLi)
                listeIngredientTb.push(newLi)
                console.log(listeIngredientTb)
            }
        }else if(result<0){
            while(result<0){
                const supLi= listeIngredientTb.pop()
                supLi.remove()
                result++
            }
           // console.log('ici',listeIngredientTb.splice(result))
           // listeIngredientTb = listeIngredientTb.splice(result)
           

        }

        listeIngredientTb[i].innerText= `${recette.ingredients[i].quantité || ''} ${recette.ingredients[i].unité || ''} ${recette.ingredients[i].nom}`;

    }

    const ulEtape = document.querySelector('#etapeUl');
   
    const listeEtape = document.querySelectorAll('#etapeUl li')
    const listeEtapeTb= Array.from(listeEtape)

    for(let i=0; i<recueil[index].corps.length;i++){
         console.log('taille de la liste corps',recueil[index].corps.length)
         console.log('taille de la liste li',listeEtapeTb.length)
         let result = recueil[index].corps.length - listeEtapeTb.length
         console.log(result)
        
        if(result>0){

            for(let j=0; j<result;j++){
                const newLi= document.createElement('li')
                ulEtape.appendChild(newLi)
                listeEtapeTb.push(newLi)
                console.log(listeIngredientTb)
            }

        }else if(result<0){

            while(result<0){
                const supLi= listeEtapeTb.pop()
                supLi.remove()
                result++
            }
            // console.log('ici',listeIngredientTb.splice(result))
            // listeIngredientTb = listeIngredientTb.splice(result)
            
 
        }
 
        listeEtapeTb[i].innerText= `${recette.corps[i]}`;
 
    }
    


} else {
    console.error('Recette non trouvée.');
}









































/*



Pour trouver des listes d'ingrédients bien structurées comme celle que vous construisez, voici quelques sources utiles :

1. Bases de données d'API pour la cuisine
Des API fournissent des données bien structurées sur des recettes, ingrédients, quantités, et unités. Voici quelques-unes des meilleures options :

a. Spoonacular API
Fournit une vaste base de données de recettes et d'ingrédients.
Vous pouvez rechercher des recettes, obtenir des listes d'ingrédients, des informations nutritionnelles, etc.
Lien : Spoonacular API
Exemple d'utilisation : Vous pouvez rechercher des recettes de "boeuf bourguignon" et obtenir la liste complète des ingrédients.
b. TheMealDB API
Une API gratuite contenant des recettes du monde entier.
Les ingrédients et instructions sont organisés proprement.
Lien : TheMealDB API
c. Edamam Recipe API
Fournit des recettes détaillées avec des informations nutritionnelles et des listes d'ingrédients.
Lien : Edamam Recipe API
d. Tasty API (non officiel)
Certaines ressources non officielles permettent d'accéder aux recettes du site Tasty.
Cherchez des projets open source sur GitHub ou via des API communautaires.*/