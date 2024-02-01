import * as React from 'react';
import iconeAdresse from './images/icons/adress.svg';
import iconeMail from './images/icons/mail.svg';
import iconePhone from './images/icons/phone.svg';
import banniere from './images/banniere.png';
import logo from './images/logo.png';
import '../../assets/css/style.css';

export function Header() {
  return (
    <header>
    <div class="limitedWidthBlockContainer informations">
      <div class="limitedWidthBlock">
        <ul>
          <li><img src={iconePhone} alt="logo de téléphone" class="informations__phone"/>01 23 45 67 89</li>
          <li><img src={iconeMail} alt="logo d'une enveloppe" class="informations__mail"/>support@name.com</li>
          <li><img src={iconeAdresse} alt="logo d'un point de géolocalisation" class="informations__address"/>01 23 45 67 89</li>
        </ul>
      </div>
    </div>
    <div class="limitedWidthBlockContainer menu">
      <div class="limitedWidthBlock">
        <a href="./index.html">
          <img class="logo" src={logo} alt="Logo de l'entreprise"/>
        </a>
        <nav>
          <ul>
            <a href="index.html"><li>Accueil</li></a>
            <a href="cart.html"><li>Panier</li></a>
          </ul>
        </nav>
      </div>
    </div>
    <img class="banniere" src={banniere} alt="Baniere"/>
  </header>
  );
};

export default Header;