let orderId = new URL(window.location.href).searchParams.get('id');  //on recup order id dans lurl

let commande = document.querySelector("#orderId");  //on recup lelement html
commande.innerHTML = orderId; // on met dedans

localStorage.removeItem("panier"); //on supprime le panier