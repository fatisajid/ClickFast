let count = 0;

document.getElementById("button-clicker").addEventListener("click", () => {
  count++;
  document.getElementById("counter").innerHTML = count;

  if(count >= 0) {
    document.getElementById('counter').style.backgroundColor = 'olivedrab';
    document.getElementById('counter').style.color = 'white';
} else {
    document.getElementById('counter').style.backgroundColor = 'red';
    document.getElementById('counter').style.color = 'white';
}

  // Effet visuel pour le bouton lors du clic
  const button = document.getElementById("button-clicker");
  button.style.transform = "scale(1.1)";
  setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 100);


});

document.getElementById('button').addEventListener('click', () => {
  count--;
  document.getElementById('counter').innerHTML = count;
if(count < 0) {
  document.getElementById('counter').style.backgroundColor = 'red';
  document.getElementById('counter').style.color = 'white';
} else {
  document.getElementById('counter').style.backgroundColor = 'olivedrab';
  document.getElementById('counter').style.color = 'white';
}
});




// Simuler le document global avec JSDOM
// global.document = window.document;

// Déclarer le compteur
// let compteur = 0;

// Fonction pour réinitialiser le compteur et mettre à jour l'affichage
// function resetCompteur() {
//     compteur = 0;
//     document.getElementById('compteur').textContent = compteur;
// }

// Fonction pour incrémenter le compteur et mettre à jour l'affichage
// function incrementerCompteur() {
//     compteur += 1;
//     document.getElementById('compteur').textContent = compteur;
// }

// Ajouter un écouteur d'événements pour le bouton (simulation)
// function ajouterEcouteurBouton() {
//     const button = document.getElementById('button-id');
//     button.addEventListener('click', incrementerCompteur);
// }

// Initialisation pour chaque test
// beforeEach(() => {
//     // Créer les éléments HTML nécessaires pour le test
//     document.body.innerHTML = `
//         <button id="button-id">Cliquez-moi</button>
//         <div id="compteur">0</div>
//     `;
    
    // Réinitialiser le compteur et ajouter l'écouteur d'événements
//     resetCompteur();
//     ajouterEcouteurBouton();
// });

// describe('Tests pour le bouton de clic', () => {
//     test('Le compteur s\'incrémente de 1 après un clic', () => {
        // Récupérer le bouton et simuler un clic
        // const button = document.getElementById('button-id');
        // button.click();

        // Vérifier que le compteur affiche 1
    //     const compteurElement = document.getElementById('compteur');
    //     expect(compteurElement.textContent).toBe('1');
    // });

    // test('Le compteur affiche 2 après deux clics', () => {
        // Récupérer le bouton et simuler deux clics
        // const button = document.getElementById('button-id');
        // button.click(); // Premier clic
        // button.click(); // Deuxième clic

        // Vérifier que le compteur affiche 2
//         const compteurElement = document.getElementById('compteur');
//         expect(compteurElement.textContent).toBe('2');
//     });
// });
