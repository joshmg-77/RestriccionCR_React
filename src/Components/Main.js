import React from "react"
import Header from "./Header"
import Sections from "./Sections"
import Result from "./Result"
import Footer from "./Footer"
import NotaRestriccion from "./NotaRestriccion"
import { helper } from "./Helper"
import "../styles/Main.css"

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        svg: null,
        datosSection: null,
        reques: false
      };
    }
    //no utilizamos el componentDidMount() para evitar que se llame los datos al puro inicio 

    //HandledDatos lo que hacemos es manejar la entrada o el input del componente Sections, lo manejamos gracias al liftingState pasando el target.value como parametro de una funcion, pasando lo como en una props
    HandledDatos = async (datosSection) => {
      
      //hasta este momento el state datosSection es null
      console.log(this.state.datosSection);
      const dato = await helper();
      //guardamos el numero ingresado por el usuario en el state, ya datosSection tiene el valor ingresado por el usuario
      this.setState({ datosSection: parseInt(datosSection), svg: dato });
      document.querySelector(".imgsvg").scrollIntoView();
    };
    render() {
      return (
        <div className="contenedor">
          <Header />
          <Sections levantandoEstado={this.HandledDatos} />
          <NotaRestriccion />
          {this.state.datosSection == null ? (
            console.log("no hay svgs")
          ) : (
            <Result src={this.state.svg.diasno[this.state.datosSection]} />
          )}
          <Footer />
        </div>
      );
    }
  }


export default Main