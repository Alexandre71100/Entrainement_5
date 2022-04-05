/**
 * FONCTIONS JS
 */

/**
 * Vérifie que la donnée reçue ne soit pas vide 
 */
let notEmpty = (value) => {
    if(typeof value !== "string" || value.length === 0 ){
        return false;
    }

    return true;
}