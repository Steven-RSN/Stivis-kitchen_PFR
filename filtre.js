// Sélection des éléments pour les ingrédients inclus
const btnIngreInclus = document.getElementById('btnIngreInclus');
const inputIngreInclus = document.getElementById('ingredientInclus');
const ulIngreInclus = document.getElementById('ingredients_inclus_liste');

// Sélection des éléments pour les ingrédients exclus
const btnEx = document.getElementById('btnEx');
const inputEx = document.getElementById('ingredient_exclus');
const ulEx = document.getElementById('ingredients_exclus_liste');

// Fonction pour ajouter un ingrédient à une liste 
function ajouterIngredient(input, ul) {
    if (input.value.trim() !== '') {
        console.log('Valeur enregistrée :', input.value);

        // Création de l'élément <li>
        const li = document.createElement('li');
        li.innerText = input.value;

        // Ajouter un bouton de suppression
        const btnSuppr = document.createElement('button');
        btnSuppr.style.marginLeft = '10px';
        btnSuppr.style.cursor = 'pointer';
        btnSuppr.addEventListener('click', function() {
            ul.removeChild(li);
        });


    
        li.appendChild(btnSuppr);
        ul.appendChild(li);

        input.value = '';
    } else {
        console.log('entrer une valeur ');
    }
}

// Ajout des événements pour les boutons
btnIngreInclus.addEventListener('click', function() {
    ajouterIngredient(inputIngreInclus, ulIngreInclus);
});

btnEx.addEventListener('click', function() {
    ajouterIngredient(inputEx, ulEx);
});