let idProduct = new URL(window.location.href).searchParams.get('id')    /* On récupère l'ID de chaque produit dans l'url */
fetch('http://localhost:3000/api/products/'+idProduct)  // On envoie un message au serveur pour demander les caracteristiques du canape correspondant a l'ID dans l'URL
	.then((response) => response.json())   // On transforme la réponse en JSON
	.then((myObject) => {

		let injectHtml = () => { //on cree une fonction
												/* On répertorie chaque élément du tableau qu'on créé en variable */
			let productName = document.getElementsByTagName('title')
			let image = document.querySelector('.item__img')
			let title = document.querySelector('#title')
			let price = document.querySelector('#price')
			let description = document.querySelector('#description')
			let colors = document.querySelector('#colors')

			productName.innerHTML = myObject.name
			image.innerHTML = `<img src="${myObject.imageUrl}" alt="${myObject.altTxt}" id="imgCanape">`  /* On définie la source, le texte et l'image de chaque produit */
			title.innerHTML = myObject.name
			price.innerHTML = myObject.price
			description.innerHTML = myObject.description
			for (let i in myObject.colors) {  // le i c'est un compteur
				colors.insertAdjacentHTML(
					'beforeend',
					`<option value="${myObject.colors[i]}">${myObject.colors[i]}</option>`
				)
			}
		}

		injectHtml()
	})

	const click = document.getElementById("addToCart"); // on recup element html addtocart

	click.addEventListener('click', function() {
		let idCanape = idProduct;
		let SelectColors = document.getElementById("colors");
		let couleurCanape = SelectColors.options[SelectColors.selectedIndex].value;  // recuperer la valeur de la couleur selectionnee
		let quantiteCanape = document.getElementById('quantity').value;
		let panier = localStorage.getItem('panier');
		let canap_img_src = document.getElementById("imgCanape").getAttribute("src");
		let canap_img_alt = document.getElementById("imgCanape").getAttribute("alt");
		let prixProduit = document.querySelector("#price").textContent;
		console.log(panier);
		if (panier == null){        //Si panier existe pas, on cree le panier vide, tableau car susceptible d'avoir plusieurs elements
			panier= [];
		}
		else{
			panier = JSON.parse(panier);  //si panier existe, on le recuperer en format text, qu'on "parse" (transforme) en JSON
		}
		panier.push({
			id: idCanape,
			couleur : couleurCanape,
			quantite: quantiteCanape,
			photoCanape: canap_img_src,
			altCanape: canap_img_alt
		});
		localStorage.setItem('panier',JSON.stringify(panier));  //permet de restocker tout le tableau, qu'on retransforme  de JSON en Text (stringify)
		alert("Produit(s) bien rajouté(s) au panier");
		
	});