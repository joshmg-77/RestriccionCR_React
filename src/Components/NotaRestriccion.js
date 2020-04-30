import React from "react"
import "../styles/NotaRestriccion.css"

const NotaRestriccion = () => {
    return (
      <div className="nota">
        <h2>Puntos importantes</h2>
        <p>
          -Recuerde que la restriccion <b className="bold">diurna</b> es de 5:00 am a 7:00pm{" "}
        </p>
        <p>
          -La restriccion <b className="bold">nocturna</b> aplica para todas las placas es de
          7:00pm a 5:00am
        </p>
      </div>
    );
  };
  export default NotaRestriccion