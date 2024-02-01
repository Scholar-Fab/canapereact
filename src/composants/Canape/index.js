import * as React from 'react';
import { Link } from 'react-router-dom';


function Canape(props) {
    const canape = props.produit;

  return (
    <Link to={`/infos/${canape._id}`}>
          <article>
            <img src={canape.imageUrl} alt={canape.altTxt}/>
            <h3 className="productName">{canape.name}</h3>
            <p className="productDescription">{canape.description}</p>
          </article>
        </Link>
  );
};

export default Canape