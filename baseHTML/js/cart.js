panier = localStorage.getItem('panier'); // on recup le panier du localstorage
/*if (panier.length!=0){ //si le panier est different de 0 (!)
for (let idCanape in panier) { // on fait la boucle
console.log("idcanape" + panier[idCanape].id);
fetch('http://localhost:3000/api/products/'+panier[idCanape].id)  // on recup les infos
}*/

if (panier === null || panier == 0) {
  document.querySelector("#cart__items").style.display = 'none';
  let html = document.getElementById("cart__items");
  html.innerHTML = "<h2> Le panier est vide </h2>";
} else {
  panier = JSON.parse(panier);  // on le retransforme en json
  document.querySelector("#cart__items").style.display = 'flex';  //on affiche l'element cart items
  productsInCart = ""; //on cree une variable qui va contenir l'affichage du panier
  total = 0; //on crée une variable qui va contenir le total du panier

  //fonction de mise à jour des donnée à afficher
  function updateCart(canapeDuServeur, compteur) {
    //console.log("Canape du serveur : " + JSON.stringify(canapeDuServeur));
    //On récupère le canapé issu du panier correspondant au canape récupéré du serveur
    let canapeDuPanier = panier.find(c => c.id === canapeDuServeur._id);
    //console.log("Canape du serveur : " + JSON.stringify(canapeDuPanier));
    total = total + parseInt(canapeDuServeur.price * parseInt(canapeDuPanier.quantite), 10); // parseInt permet de transfo la valeur en nombre   total actual + prix canap x qte
    html = document.getElementById("cart__items");  //Element HTML dans lequel on va ajouter les canapés du panier
    //productsInCart étant une variable globale les nouveaux canapés sont ajoutés, on ne repart pas de zero
    productsInCart = productsInCart + `
  <article class="cart__item" data-id=${canapeDuPanier.id}>
          <div class="cart__item__img">
            <img src=${canapeDuPanier.photoCanape} alt="${canapeDuPanier.altCanape}">
          </div>
          <div class="cart__item__content">
            <div class="cart__item__content__titlePrice">
              <h2>${canapeDuPanier.altCanape}</h2>
              <p>Couleur : ${canapeDuPanier.couleur}</p>
              <p> ${((canapeDuServeur.price) * parseInt(canapeDuPanier.quantite)).toString()}€</p>  
            </div>
            <div class="cart__item__content__settings">
              <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${canapeDuPanier.quantite}">
              </div>
              <div class="cart__item__content__settings__delete">
                <p id= "${compteur}"class="deleteItem">Supprimer</p>
              </div>
            </div>
          </div>
        </article>
  `;
    html.innerHTML = productsInCart;
    //On met a jour le total
    document.getElementById("totalPrice").innerHTML = total; //mise a jour du prix total
  }

  // On crée un tableau avec la liste des url pour demander les infos des canapes au serveur
  let url = [];
  for (k = 0; k < panier.length; k++) { // k = compteur
    url[k] = 'http://localhost:3000/api/products/' + panier[k].id;
  }
  //On crée un tableau qui récupèrera les infos des canapés du panier à partir du serveur pour avoir les prix
  var listeInfosCanapes = [];
  //Comme on va faire un fetch qui renverra des promesses on les listes
  var listePromessesFetch = [];
  //On fait une boucle pour lancer toutes les demandes au serveur
  for (i = 0; i < panier.length; i++) {
    listePromessesFetch.push(
      fetch(url[i])
        .then((response) => { return response.json() })
        .then((canape) => {
          listeInfosCanapes.push(canape);
        })
    )
  }
  //On prepare les écouteurs pour la modification de la qte 
  function placerEcouteurModificationQuantite() {
    let quantiteModifChamp = document.querySelectorAll(".itemQuantity");

    for (let canapeCompteurChamp = 0; canapeCompteurChamp < quantiteModifChamp.length; canapeCompteurChamp++) {
      quantiteModifChamp[canapeCompteurChamp].addEventListener("change", (event) => {
        event.preventDefault();
        let valeurQuantiteModif = parseInt(quantiteModifChamp[canapeCompteurChamp].value);
        panier[canapeCompteurChamp].quantite = valeurQuantiteModif;
        localStorage.setItem("panier", JSON.stringify(panier));
        location.reload();
      })
    }
  }

  //On prepare les écouteurs pour la suppression d'un canape
  function placerEcouteurSuppressionCanape() {
    let listeBoutonSupprimer = document.getElementsByClassName("deleteItem");
    for (let i = 0; i < listeBoutonSupprimer.length; i++) {
      listeBoutonSupprimer[i].addEventListener("click", (event) => {
        let idASupprimer = event.target.id;
        panier.splice(idASupprimer, 1);
        if (panier.length == 0) {
          localStorage.removeItem("panier");
        } else {
          localStorage.setItem("panier", JSON.stringify(panier));
        }
        location.reload();
      });
    }
  }
  //On attend que toutes les requêtes au serveur soient faites
  //Puis on stocke les infos dans le tableau listeInfosCanapes pour les utiliser dans la fonction update.
  //le compteur ne nous sert que pour l'id du bouton supprimer, savoir quel canapé du panier supprimer
  Promise.all(listePromessesFetch).then(function () {
    console.log("Liste info canapes : " + JSON.stringify(listeInfosCanapes));
    for (j = 0; j < listeInfosCanapes.length; j++) {
      updateCart(listeInfosCanapes[j], j);
    }
    //On place les écouteurs concernant la modification de la quantité ou la suppression d'un canape
    placerEcouteurModificationQuantite();
    placerEcouteurSuppressionCanape();
  });


}


const form = document.querySelector(".cart__order__form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const email = document.querySelector("#email");

function verifierChamp(typeChamp, value, min, max,) {  //fonction pour verifier que les champs ont un contenu minmax
  let regex = new RegExp("^[\-a-zA-Z0-9@ \.]{" + min + "," + max + "}$"); //expression reguliere = un calque
  console.log(regex.exec(value));
  if (!value || !regex.exec(value)) {
    document.querySelector(`#${typeChamp}ErrorMsg`).style.display = 'flex';
    document.querySelector(`#${typeChamp}ErrorMsg`).innerHTML = "Merci de mettre entre " + min + " & " + max + " caractères"
  } else {
    document.querySelector(`#${typeChamp}ErrorMsg`).style.display = 'none';
  }
}
firstName.addEventListener("input", (event) => {
  let firstNameValue = firstName.value;
  verifierChamp("firstName", firstNameValue, 2, 20)
});

lastName.addEventListener("input", (event) => {
  let lastNameValue = lastName.value;
  verifierChamp("lastName", lastNameValue, 3, 45)
});

address.addEventListener("input", (event) => {
  let addressValue = address.value;
  verifierChamp("address", addressValue, 5, 50)
});

city.addEventListener("input", (event) => {
  let cityValue = city.value;
  verifierChamp("city", cityValue, 2, 30)
});

email.addEventListener("input", (event) => {
  let emailValue = email.value;
  verifierChamp("email", emailValue, 2, 50)
});





const commandeCart = document.querySelector("#order");      /*On créer la constante commandeCart sur l'ID order*/

commandeCart.addEventListener("click", (event) => {

  const contact = {          /*La constante"contact" sera enregistrée contenant tous les éléments suivants : */
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    address: document.querySelector("#address").value,
    city: document.querySelector("#city").value,
    email: document.querySelector("#email").value
  }

  //localStorage.setItem("contact", JSON.stringify(contact));   /* On stringify les valeurs de la constante contact */

  function PosterInfos() {


    let listeIdsConfirmations = [];            /*On créé un nouveau tableau pour lister tous les ID des canapés commandés*/
    for (let indexCanap = 0; indexCanap < panier.length; indexCanap++) {
      listeIdsConfirmations.push(panier[indexCanap].id)
    }

    //localStorage.setItem("listeIdsConfirmations", JSON.stringify(listeIdsConfirmations)); /* On stringify les valeurs de la variable listeIdsConfirmations */


    const order = {

      contact: contact,

      products: listeIdsConfirmations,
    }
    const options = {
      method: "POST",
      body: JSON.stringify(order), //contenue du message : format json
      headers: {
        "Content-Type": "application/json"
      },
    };

    fetch("http://localhost:3000/api/products/order", options) //envoi au serveur
      .then((response) => response.json()) //on recup et transforme en json
      .then((data) => { //on recup les donnees
        document.location.href = `confirmation.html?id=${data.orderId}`; //on change de page et on indique lorder id dans lurl
      })
  }
  PosterInfos();
});
