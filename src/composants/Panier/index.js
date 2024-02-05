import * as React from 'react';
import './css/cart.css';
import {PanierContext } from "../../contexte/PanierContexte";
import LignePanier from "../LignePanier";

function Panier() {
    const {panier, setPanier} = React.useContext(PanierContext);
    console.log("Panier : " + JSON.stringify(panier));
  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock" id="limitedWidthBlock">
        <div className="cartAndFormContainer" id="cartAndFormContainer">
          <h1>Votre panier</h1>
          <section className="cart">
            <section id="cart__items">
               {panier ? panier.map((canapePanier, index) => (
                <LignePanier produit={canapePanier}   key={index} />
              ) ) : "Le panier est vide" } 
            </section>
            <div className="cart__price">
              <p>Total (<span id="totalQuantity"> { panier.quantite != 0 ? panier.reduce((total, lignePanier) => total + Number(lignePanier.quantite), 0) : "0" } </span> articles) : <span id="totalPrice"> { panier.quantite != 0 ? panier.reduce((total, lignePanier) => total + Number(lignePanier.canape.price)*Number(lignePanier.quantite), 0) : "0" } </span> €</p>
            </div>
            <div className="cart__order">
              <form method="get" className="cart__order__form">
                <div className="cart__order__form__question">
                  <label for="firstName">Prénom: </label>
                  <input type="text" name="firstName" id="firstName" required/>
                  <p id="firstNameErrorMsg"> ci est un message d'erreur </p>
                </div>
                <div className="cart__order__form__question">
                  <label for="lastName">Nom: </label>
                  <input type="text" name="lastName" id="lastName" required/>
                  <p id="lastNameErrorMsg"></p>
                </div>
                <div className="cart__order__form__question">
                  <label for="address">Adresse: </label>
                  <input type="text" name="address" id="address" required/>
                  <p id="addressErrorMsg"></p>
                </div>
                <div className="cart__order__form__question">
                  <label for="city">Ville: </label>
                  <input type="text" name="city" id="city" required/>
                  <p id="cityErrorMsg"></p>
                </div>
                <div className="cart__order__form__question">
                  <label for="email">Email: </label>
                  <input type="email" name="email" id="email" required/>
                  <p id="emailErrorMsg"></p>
                </div>
                <div className="cart__order__form__submit">
                  <input type="submit" value="Commander !" id="order"/>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Panier;