import React from "react";
import "../styles/Footer.css";

const Footer = (props) => {
  return (
    <div className="ps">
      <div className="p">
        <h2>Comparte esta informacion en:</h2>
        <a href="https://www.facebook.com/sharer.php?u=url">
          <i id="facebook" className="fab fa-facebook "></i>
        </a>
        <a href="http://api.whatsapp.com/send?text=https://url">
          <i id="whatsapp" className="fab fa-whatsapp "></i>
        </a>
      </div>
      <p id="p">
        Recuerda es por nuestra familia, es por nuestro pais, es por
        todas esas personas que amamos....Hagamos caso Costa Rica
        <span class="span">#QuedateEnCasa</span>
      </p>
      <div class="CostaRica"></div>
    </div>
  );
};
export default Footer;
