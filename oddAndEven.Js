// Déclaration de la function
function afficherNombres(limite){
  // Déclaration de la boucle "for" qui permet de compter de 0 à 20
  for(let i = 0; i<=limite; i++){
    // Déclaration de la confition qui permet de savoir au moment du comoptage si un nombre est pare ou impaire 
          // Pour rappel "Modulo" => " 5%2 = 1 " Le modulo n'est rien d'autre le reste de la division de 5 / 2
    if(i%2===0)console.log( 'impaire');
    else console.log( 'paire')
  }
}

afficherNombres(20);