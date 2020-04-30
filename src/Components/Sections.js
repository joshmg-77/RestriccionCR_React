import React from "react";
import "../styles/Section.css";

class Sections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: "",
    };
  }


  HandledOnChange = (inpNum) => {
    console.log(inpNum.target.value);
    if (inpNum.target.value >= 10) {
      return false;
    }
    let targeT = inpNum.target;

    document.getElementById("numero").blur();
    //Lenvantando el estado
    this.props.levantandoEstado(targeT.value);
    
  };
  render() {
    return (
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label for="numero" className="label">
          Ingresa el ultimo numero de tu placa:
        </label>
        <input
          type="number"
          placeholder="ingresa el ultimo numero de tu placa"
          id="numero"
          value={this.state.valorInput}
          onChange={this.HandledOnChange}
        />
      </form>
    );
  }
}

export default Sections;