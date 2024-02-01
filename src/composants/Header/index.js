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
    <div className="limitedWidthBlockContainer informations">
      <div className="limitedWidthBlock">
        <ul>
          <li><img src={iconePhone} alt="logo de téléphone" className="informations__phone"/>01 23 45 67 89</li>
          <li><img src={iconeMail} alt="logo d'une enveloppe" className="informations__mail"/>support@name.com</li>
          <li><img src={iconeAdresse} alt="logo d'un point de géolocalisation" className="informations__address"/>01 23 45 67 89</li>
        </ul>
      </div>
    </div>
    <div className="limitedWidthBlockContainer menu">
      <div className="limitedWidthBlock">
        <a href="./index.html">
          <img className="logo" src={logo} alt="Logo de l'entreprise"/>
        </a>
        <nav>
          <ul>
            <a href="index.html"><li>Accueil</li></a>
            <a href="cart.html"><li>Panier</li></a>
          </ul>
        </nav>
      </div>
    </div>
    <img className="banniere" src={banniere} alt="Baniere"/>
  </header>
  );
};

export default Header;