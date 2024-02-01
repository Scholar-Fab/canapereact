import * as React from 'react';
import imgCanape from "../../assets/images/kanap01.jpeg";

const pathCanape = "../../assets/images/";  

function ListeProduits() {
    const [listeProduits, setListeProduits] = React.useState([]);

    const recupProduits = () => {
        fetch("http://192.168.40.42:8000/api/produits")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Problème avec la requête");
        })
        .then(data => {
            console.log("Données : " + data)
        })
    }

    React.useEffect(() => {
        recupProduits();
    },[]);


  return (
    <main class="limitedWidthBlockContainer">
    <div class="limitedWidthBlock">
      <div class="titles">
        <h1>Nos produits</h1>
        <h2>Une gamme d'articles exclusifs</h2>
      </div>
      <section class="items" id="items"> 
         <a href="product.html?id=42">
          <article>
            <img src={imgCanape} alt="Lorem ipsum dolor sit amet, Kanap name1"/>
            <h3 class="productName">Kanap name1</h3>
            <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
          </article>
        </a>
      </section>
    </div>
  </main>
  );
};
export default ListeProduits;