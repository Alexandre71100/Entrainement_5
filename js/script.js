/**
 * ENTRAINEMENT #5
 */

// Sélectionner le champs texte du nom
const lastName = document.querySelector("#lastname");

// Applique un écouteur d'évènement sur les changements
// effectués dans le champs
lastName.addEventListener('input', () => {
    const response = notEmpty(lastName.value);
    
    // Récupère le champs pour gérer l'erreur si besoin
    const error = document.querySelector("#lastnameError");

    if (response) {
        // Affiche des bordures vertes si tout va bien
        lastName.style.border = "2px solid green";
        error.style.display = "none";
    }
    else {
        // Affiche un message d'erreur si tout ne va pas bien :(
        error.innerText = "Le nom est obligatoire";
        error.style.display = "block";
        lastName.style.border =  "2px solid red";
    }
    
});

