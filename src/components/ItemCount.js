import React from "react";
import { useState } from "react";

//Importar componentes de react-bootstrap
import Container from "../../node_modules/react-bootstrap/Container";
import Button from "../../node_modules/react-bootstrap/Button";

//Importar archivo de estilos de reac-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = (props) => {
  const [estado, setEstado] = useState(props.initial);
  console.log(estado);

  function increase() {
    if (estado < props.stock) setEstado(estado + 1);
  }

  function decrease() {
    if (estado >= 1) setEstado(estado - 1);
  }

  return (
    <>
      <Container>
        {estado}
        <Container>
          <Button onClick={decrease}>-</Button>
          <Button onClick={onAdd}>Confirmar</Button>
          <Button onClick={increase}>+</Button>
        </Container>
      </Container>
    </>
  );

  function onAdd() {
    if (estado <= props.stock && estado > 0)
      console.log(
        "Existen " +
          props.stock +
          " productos en stock y se confirma una compra de: " +
          estado +
          " productos"
      );
    else {
      console.log(
        "La cantidad de productos seleccionada es de " +
          estado +
          " y no es un valor valido"
      );
    }
  }
};

export default ItemCount;
