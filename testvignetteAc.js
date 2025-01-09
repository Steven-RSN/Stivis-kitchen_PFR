let recueil =[
    recette1={

        titre:'boeuf bourguignon',
        img:'Image/img_recette/boeuf_bourguignon.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette2={

        titre:'boulette de viande',
        img:'Image/img_recette/boulette_de_viande.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette3={

        titre:'brochette de boeuf',
        img:'/Image/img_recette/brochette_boeuf.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette4={

        titre:'burger',
        img:'Image/img_recette/burger.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette5={

        titre:'chakchouka',
        img:'Image/img_recette/chakchouka.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette6={

        titre:'chantilly.png',
        img:'Image/img_recette/chantilly.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette7={

        titre:'charlotte aux fruits rouge',
        img:'Image/img_recette/charlotte_fruits_rouge.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette8={

        titre:'chili sin carne.',
        img:'Image/img_recette/chili_sin_carne.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette9={

        titre:'coockies',
        img:'Image/img_recette/coockies.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette10={

        titre:'creme brulée',
        img:'Image/img_recette/creme_brulee.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette11={

        titre:'fondant_au_chocolat',
        img:'Image/img_recette/fondant_au_chocolat.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette12={

        titre:'Guacamole',
        img:'Image/img_recette/Guacamole.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette13={

        titre:'gyoza.png',
        img:'Image/img_recette/gyoza.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette14={

        titre:'madeleine',
        img:'Image/img_recette/madeleine.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette15={

        titre:'margherita',
        img:'Image/img_recette/margherita.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette16={

        titre:'omelette-_aux_epinards',
        img:'Image/img_recette/omelette-_aux_epinards.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette17={

        titre:'salade_composée',
        img:'Image/img_recette/salade_compose.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette18={

        titre:'soupe_de_citrouille',
        img:'Image/img_recette/soupe_de_citrouille.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },
    recette19={

        titre:'tiramisu',
        img:'Image/img_recette/tiramisu.png',
        ingredients:[],
        nbPersonne:'',
        duree:'',
        corps:'',
        statut:'',
        note:'',
        //com:`${bddcom}`

    },


];

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

// Vérifier si l'index existe et si c'est un nombre valide
if (recetteIndex !== null && !isNaN(recetteIndex)) {
    const index = parseInt(recetteIndex);

    // Récupérer l'image de la recette en fonction de l'index
    const recette = recueil[index];

 
    const imgGrandeRecette = document.querySelector('.grandeImage');
    imgGrandeRecette.src= recette.img;

    
    const imgPetiteRecette = document.querySelectorAll('.petiteImage')
    imgPetiteTb = Array.from(imgPetiteRecette)
    for(let img of imgPetiteTb){
        console.log(img)
        img.src= recette.img;
      
    }
} else {
    console.error('Recette non trouvée ou index invalide.');
}