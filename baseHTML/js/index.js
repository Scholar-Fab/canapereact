
fetch("http://localhost:3000/api/products") /* On récupère les informations du server donné */
  .then(function(res) {
    if (res.ok) {
      return res.json(); /*On convertit la réponse du serveur en JSON */
    }
  })
  .then(function(value) {               /*On recupere la réponse "value" qu'on affiche dans le console.log */
    console.log(value);
    
    let section = document.getElementById("items");    /*Séléction de l'ID "items" dans le HTML*/
    for ( var kanap in value){          /*On fait la boucle de chaque kanap récupéré dans le serveur" */
        console.log(value[kanap].name);
        let elt = document.createElement("a");     /*On cree un element html "a" */
        elt.setAttribute("href","./product.html?id="+value[kanap]._id);     /*On donne au "a" un attribut "href"*/
        elt.innerHTML = " \
        <article> \
          <img src=\"" + value[kanap].imageUrl + "\" alt=\"" + value[kanap].altTxt + "\"> \
          <h3 class=\"productName\">" + value[kanap].name +"</h3> \
          <p class=\"productDescription\">" + value[kanap].description +"</p> \
        </article>  ";
        section.appendChild(elt);  /*On ajoute dans l'element le contenu "a" avec ce qu'il contient*/
        }
        
  })
  .catch(function(err) {
  });


