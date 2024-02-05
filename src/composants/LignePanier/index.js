import * as React from 'react';

function LignePanier({produit }) {




  return (
    <article className="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div className="cart__item__img">
                  <img src={produit.canape.imageUrl} alt={produit.canape.altTxt}/>
                </div>
                <div className="cart__item__content">
                  <div className="cart__item__content__description">
                    <h2>{produit.canape.name}</h2>
                    <p>{produit.couleur}</p>
                    <p>{produit.canape.price} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div className="cart__item__content__settings__quantity">
                      <p>Qté : {produit.quantite}</p>
                      <input type="number" className="itemQuantity" name="itemQuantity" min="1" max="100" value={produit.quantite}/>
                    </div>
                    <div className="cart__item__content__settings__delete">
                      <p className="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> 
  );
};

export default LignePanier;