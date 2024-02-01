import * as React from 'react';


function Canape(props) {
    const canape = props.produit;

  return (
    <a href="product.html?id=42">
          <article>
            <img src={canape.imageUrl} alt="{canape.altTxt}"/>
            <h3 className="productName">{canape.name}</h3>
            <p className="productDescription">{canape.description}</p>
          </article>
        </a>
  );
};

export default Canape