// * Fonction "calculate" qui est appelée lors du clique sur le bouton "Valider".
function calculate() {
  // Définition des variables qui sauvegardent les valeurs mises dans les inputs du formulaire.
  let votes_pour = document.getElementById("pour").value;
  let votes_contre = document.getElementById("contre").value;
  let abst = document.getElementById("abstention").value;

  // Calcul suivant les règles des scrutins publics.
  let votants = Number(votes_pour) + Number(votes_contre) + Number(abst);
  let exprimes = Number(votes_pour) + Number(votes_contre);
  let majorite = Number(exprimes) / 2;

  // Modification du résultat de la majorité absolue selon que le résultat obtenu soit un nombre entier ou un nombre décimal.
  if (Number.isInteger(majorite)) {
    let majorite2 = Number(majorite) + 1;
    if (votes_pour > votes_contre) {
      alert(
        "RÉSULTATS DU SCRUTIN :\n\n - Votants : " +
          votants +
          "\n - Exprimés : " +
          exprimes +
          "\n - Majorité absolue : " +
          majorite2 +
          "\n\n - POUR : " +
          votes_pour +
          "\n - CONTRE : " +
          votes_contre +
          "\n\n L'Assemblée nationale a adopté."
      );
    } else if (votes_contre >= votes_pour) {
      alert(
        "RÉSULTATS DU SCRUTIN :\n\n - Votants : " +
          votants +
          "\n - Exprimés : " +
          exprimes +
          "\n - Majorité absolue : " +
          majorite2 +
          "\n\n - POUR : " +
          votes_pour +
          "\n - CONTRE : " +
          votes_contre +
          "\n\n L'Assemblée nationale n'a pas adopté."
      );
    }
  } else {
    let majorite3 = Number(majorite) + 0.5;
    if (votes_pour > votes_contre) {
      alert(
        "RÉSULTATS DU SCRUTIN :\n\n - Votants : " +
          votants +
          "\n - Exprimés : " +
          exprimes +
          "\n - Majorité absolue : " +
          majorite3 +
          "\n\n - POUR : " +
          votes_pour +
          "\n - CONTRE : " +
          votes_contre +
          "\n\n L'Assemblée nationale a adopté."
      );
    } else if (votes_contre >= votes_pour) {
      alert(
        "RÉSULTATS DU SCRUTIN :\n\n - Votants : " +
          votants +
          "\n - Exprimés : " +
          exprimes +
          "\n - Majorité absolue : " +
          majorite3 +
          "\n\n - POUR : " +
          votes_pour +
          "\n - CONTRE : " +
          votes_contre +
          "\n\n L'Assemblée nationale n'a pas adopté."
      );
    }
  }
}
