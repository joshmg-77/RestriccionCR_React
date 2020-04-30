/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../styles/Header.css"
import imagen from "../IMG/RestriccionCR_React.jpg"

const Header = (props) => {
    return (
      <div className="header">
        <div className="title" >
          <div className="CostaRica1"></div>
          <h2>Vamos mi pais si se puede!!</h2>
          <div className="CostaRica1"></div>
        </div>
  
        <div className="sect">
          <h2 className="h2">Restriccion vehicular CR</h2>
          <img
            className="img_center"
            src={imagen}
            title="Restriccion Sanitaria Costa Rica"
          />
        </div>
      </div>
    );
  };
  export default Header;