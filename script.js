// * Ciblage du bouton "Valider" et ajout d'un événement lors du clique.
let button = document.getElementById("submitButton");
button.addEventListener("click", calculation);

// * Fonction "calculation" qui est appelée lors du clique sur le bouton "Valider".
function calculation() {
  // Définition des variables qui sauvegardent les valeurs mises dans les inputs du formulaire.
  let votes_pour = document.getElementById("pour").value;
  let votes_contre = document.getElementById("contre").value;
  let abst = document.getElementById("abstention").value;

  // Calcul suivant les règles des scrutins publics.
  let votants = Number(votes_pour) + Number(votes_contre) + Number(abst);
  let exprimes = Number(votes_pour) + Number(votes_contre);
  let majorite = Number(exprimes) / 2;

  // Condition sélectionnant le texte qui apparaîtra en fonction des nombres obtenus respectivement dans les variables "votes_pour" et "votes_contre".
  if (votes_pour > votes_contre) {
    var result = "L'Assemblée nationale a adopté.";
  } else if (votes_contre >= votes_pour) {
    var result2 = "L'Assemblée nationale n'a pas adopté.";
  }

  // Modification du résultat de la majorité absolue selon que le résultat obtenu soit un nombre entier ou un nombre décimal.
  if (Number.isInteger(majorite)) {
    let majorite2 = Number(majorite) + 1;
    alert(
      "RÉSULTATS DU SCRUTIN :\n\n - Votants : " +
        votants +
        "\n - Exprimés : " +
        exprimes +
        "\n - Majorité absolue : " +
        majorite2 +
        "\n\n" +
        result +
        "\n" +
        result2
    );
  } else {
    let majorite3 = Number(majorite) + 0.5;
    alert(
      "RÉSULTATS DU SCRUTIN :\n\n - Votants : " +
        votants +
        "\n - Exprimés : " +
        exprimes +
        "\n - Majorité absolue : " +
        majorite3 +
        "\n\n" +
        result +
        "\n" +
        result2
    );
  }
}
