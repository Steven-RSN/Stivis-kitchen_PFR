import recueil from "./glossaire.js";


// Initialise les variables et récupère les élements HTML
const titreR = document.getElementsByClassName('titreRecette');
const titreRecetteTb = Array.from(titreR);
const vignetteRecette = document.getElementsByClassName('img_recette');

const vignetteRecetteTb = Array.from(vignetteRecette);  //convertit en tableau





// Boucle pour afficher les titres et les images des recettes situées dans glossaire.js
for(let i =0 ; i<vignetteRecetteTb.length; i++){

    titreRecetteTb[i].innerText=`${recueil[i].titre}`;                  
    vignetteRecetteTb[i].style.background=`url(${recueil[i].img})`;
    vignetteRecetteTb[i].style.backgroundSize=`cover`;
    
}

// Applique un écouteur d'événements à chaque vignette 
vignetteRecetteTb.forEach(function(recette,index) {
    
    recette.addEventListener('click',function(){
        window.location.href = `recette.html?recette=${index}`; // Renvoie vers la page recette correspondante
    })
    
});



const params = new URLSearchParams(window.location.search); // Récupère les paramètres de l'URL
const recetteIndex = params.get('recette'); // Récupère l'index de la recette

// Si l'index existe et si c'est bien un nombre valide, affiche la page recette correspondante
if (recetteIndex !== null && !isNaN(recetteIndex)) {

    const recette = recueil[recetteIndex]// Récupère la recette correspondante dans le tableau recueil


    // Initialise les variables pour récuperer des éléments HTML pour les modifier : titres et images (boucle pour les images)
    const titre=document.querySelector('h1')
    titre.innerText=recette.titre.charAt(0).toUpperCase() + recette.titre.slice(1)

 
    const imgGrandeRecette = document.querySelector('.grandeImage');
    imgGrandeRecette.src= recette.img;

    const imgPetiteRecette = document.querySelectorAll('.petiteImage')
    const imgPetiteTb = Array.from(imgPetiteRecette)

    for(let img of imgPetiteTb){
        img.src= recette.img;
      
    }

    const h4=document.querySelector('.nombre')
    h4.innerText=`${recette.nbPersonne} `

    // Initialise les variables pour récuperer des éléments HTML pour les modifier : ul et li.
    // Chaque li (ingrédient de la liste) va être remplacé par les ingredients de la nouvelle recette , 
    // On compare si la liste initiale et plus grande que la nouvelle (nouveaux ingredient), si elle est plus petite on rajoute des li
    // sinon on les supprime 
    const ulIngre = document.querySelector('#ingrédientsUl')
    const listeIngredient = document.querySelectorAll('#ingrédientsUl li')
    const listeIngredientTb = Array.from(listeIngredient)

    for(let i=0; i<recueil[recetteIndex].ingredients.length;i++){
        let result = recueil[recetteIndex].ingredients.length - listeIngredientTb.length

        if(result>0){
            for(let j=0; j<result;j++){

                const newLi= document.createElement('li')
                ulIngre.appendChild(newLi)
                listeIngredientTb.push(newLi)
            }
            
        }else if(result<0){
            while(result<0){

                const supLi= listeIngredientTb.pop()
                supLi.remove()
                result++
            }     
        }

        listeIngredientTb[i].innerText= `${recette.ingredients[i].quantité || ''} ${recette.ingredients[i].unité || ''} ${recette.ingredients[i].nom}`;

    }




    // Même chose que pour la liste d'ingrédients mais pour les étapes de la recette
    const ulEtape = document.querySelector('#etapeUl');
   
    const listeEtape = document.querySelectorAll('#etapeUl li')
    const listeEtapeTb= Array.from(listeEtape)

    for(let i=0; i<recueil[recetteIndex].corps.length;i++){
         let result = recueil[recetteIndex].corps.length - listeEtapeTb.length
        
        if(result>0){

            for(let j=0; j<result;j++){
                const newLi= document.createElement('li')
                ulEtape.appendChild(newLi)
                listeEtapeTb.push(newLi)
            }

        }else if(result<0){

            while(result<0){
                const supLi= listeEtapeTb.pop()
                supLi.remove()
                result++
            }         
 
        }
 
        listeEtapeTb[i].innerText= `${recette.corps[i]}`;
 
    }




   // Produit en croix afin de permettre d'incrémenter ou de décrémenter 
   // les quantités des ingrédients en fonction du nombre de personnes sélectionné.
   // Initialise les variables pour récuperer des éléments HTML : boutons et le nombre de personne
   // Initialise la variable memory et newNbPersonne 
   // Initialise les écoutes des boutons 
   //
    const btnIncrDecr= document.querySelectorAll('.decr, .incr');
    const tableauBtn = Array.from(btnIncrDecr);

  //  let memory=[];
    let nbPersonne=recette.nbPersonne;
    let newNbPersonne=recette.nbPersonne;

    tableauBtn.forEach(function(btn){
        btn.addEventListener('click',function(){
           
            // Condition pour identifier le bouton sur lequel on clique
            if (btn.classList=='incr'){             // Incrémentation 
                console.log('click: incr')
          
                newNbPersonne=newNbPersonne+1;
                h4.innerText=`${newNbPersonne} `;

                for(let i=0; i<recueil[recetteIndex].ingredients.length;i++){

                    let quantité=recueil[recetteIndex].ingredients[i].quantité;
                    let result=quantité*(newNbPersonne/nbPersonne);
             
                 //   memory.push(result);

                    listeIngredientTb[i].innerHTML=`${result||''} ${recette.ingredients[i].unité || ''} ${recette.ingredients[i].nom}`;

                }
 
             
            }else{                            // Décrémentation

                newNbPersonne=newNbPersonne-1;

                if(newNbPersonne===0){       // Permet de ne pas avoir moins d'une personne pour la recette
                    newNbPersonne=1;
                }
                h4.innerText=`${newNbPersonne} `;

                for(let i=0; i<recueil[recetteIndex].ingredients.length;i++){          
       
                    let quantité=recueil[recetteIndex].ingredients[i].quantité;
                    let result=quantité*(newNbPersonne/nbPersonne);
                    
                 //   memory.push(result);

                    listeIngredientTb[i].innerHTML=`${result||''} ${recette.ingredients[i].unité || ''} ${recette.ingredients[i].nom}`;
                    
                }
            }
          //  memory=[]; //on vide le tableau memory
        })
    })



} else {
    console.error('Recette non trouvée.');   //-TODO : Inplementer Try/Catch
}









/*

//100g_farine /1_oignon/ 125cl_eau/ 60g_sucre
let liste = [ 100 , 1 , 125 , 60 ]
let nbPersonne=2


let newNbPersonne = 4
let newListe=[]

    const listeIngredient=document.querySelectorAll('#ingrédientsUl li')



    const tbIngredient=Array.from(listeIngredient)
    console.log(tbIngredient)
    for (let i=0; i<liste.length; i++){
        newListe.push(liste[i]*(newNbPersonne/nbPersonne))    
    }

console.log(newListe)




*/
























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
Cherchez des projets open source sur GitHub ou via des API communautaires.*/          // console.log(recueil[recetteIndex].ingredients.length)
                