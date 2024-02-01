CREATE TABLE Produit(
    idProduit int not null auto_increment primary key,
    nom varchar(255) not null,
    image varchar(255),
    description varchar(255),
    altTxt varchar(255),
    prix decimal(6,2),
    couleur varchar(255)
);


INSERT INTO Produit (couleur, nom, prix, image, description, alt_txt) VALUES 
("Bleu","Kanap Sinopé","1849","kanap01.jpeg","Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Photo d'un canapé bleu, deux places"),
("Jaune/Noir","Kanap Cyllène","4499","kanap02.jpeg", "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.","Photo d'un canapé jaune et noir, quattre places"),
("Vert","Kanap Calycé","3199","kanap03.jpeg","Pellentesque fermentum arcu venenatis ex sagittis accumsan. Vivamus lacinia fermentum tortor.Mauris imperdiet tellus ante.","Photo d'un canapé d'angle, vert, trois places"),
("Rose","Kanap Autonoé","1499","kanap04.jpeg","Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.","Photo d'un canapé rose, une à deux place"),
("Gris","Kanap Eurydomé","2249","kanap05.jpeg","Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.","Photo d'un canapé gris, trois places"),
("Gris","Kanap Hélicé","999","kanap06.jpeg","Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.","Photo d'un canapé gris, deux places"),
("Rouge","Kanap Thyoné","1999","kanap07.jpeg","EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu. Vestibulum et egestas eros. Vestibulum non lacus orci.","Photo d'un canapé rouge, deux places"),
("Rose","Kanap orthosie","3999","kanap08.jpeg","Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.","Photo d'un canapé rose, trois places");