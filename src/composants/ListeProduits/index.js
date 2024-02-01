import * as React from 'react';
import Canape from '../Canape';

function ListeProduits() {
    const [listeProduits, setListeProduits] = React.useState([]);

    const recupProduits = () => {
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
            setListeProduits(data);
        })
    }

    React.useEffect(() => {
        recupProduits();
    },[]);


  return (
    <main className="limitedWidthBlockContainer">
    <div className="limitedWidthBlock">
      <div className="titles">
        <h1>Nos produits</h1>
        <h2>Une gamme d'articles exclusifs</h2>
      </div>
      <section className="items" id="items"> 
         {listeProduits.map((produit) => (
            <Canape key={produit.id} produit={produit} />
         ))}
      </section>
    </div>
  </main>
  );
};
export default ListeProduits;