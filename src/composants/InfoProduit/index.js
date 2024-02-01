import * as React from 'react';
import './css/product.css';
import { useParams } from 'react-router-dom';

function InfoProduit() {
    const { id } = useParams();
    const [canape, setCanape] = React.useState();

    const recupProduit = () => {
        fetch("http://192.168.40.42:8000/api/produits")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else{
                console.log("Erreur ");
            }
        })
        .then(data => {
            const tmpCanape = data.find((canape) => canape._id === id);
            setCanape(tmpCanape);
        })
    }

    React.useEffect(() => {
        recupProduit();
    },[]);


  return (
    <main className="limitedWidthBlockContainer">
    <div className="limitedWidthBlock">
      <section className="item">
        <article>
          <div className="item__img">
          {/* autre notation de ci-dessous canape.imageUrl ? canape.imageUrl : "" */}
            <img src={canape?.imageUrl} alt={canape?.altTxt} />
          </div>
          <div className="item__content">

            <div className="item__content__titlePrice">
              <h1 id="title">{canape?.name}</h1>
              <p>Prix : <span id="price"> {canape?.price} </span>€</p>
            </div>

            <div className="item__content__description">
              <p className="item__content__description__title">Description :</p>
              <p id="description">{canape?.description}</p>
            </div>

            <div className="item__content__settings">
              <div className="item__content__settings__color">
                <label for="color-select">Choisir une couleur :</label>
                <select name="color-select" id="colors">
                    <option value="">--SVP, choisissez une couleur --</option>
                     <option value="vert">vert</option>
                    <option value="blanc">blanc</option>
                </select>
              </div>

              <div className="item__content__settings__quantity">
                <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
                <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity"/>
              </div>
            </div>

            <div className="item__content__addButton">
              <button id="addToCart">Ajouter au panier</button>
            </div>

          </div>
        </article>
      </section>
    </div>
  </main>
  );
};
export default InfoProduit;