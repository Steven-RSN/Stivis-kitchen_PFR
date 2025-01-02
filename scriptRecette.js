
const iconeCoeur = document.getElementById('iconeCoeur');
let compteurCoeur = 0;

iconeCoeur.addEventListener('click', function () {
    iconeCoeur.style.opacity = 0.2;  //  Rendre l'image transparente

    // changer l'image
    setTimeout(() => {

        if (compteurCoeur === 0) {
            iconeCoeur.src = "Image/icons/partage/icons8-heartR-100 .png";
            compteurCoeur = 1;
        }else {
            iconeCoeur.src = "Image/icons/partage/icons8-heart-100.png";
            compteurCoeur = 0;
        }
        
        iconeCoeur.style.opacity = 1; //Nouvelle image progressivement

    }, 200);
});