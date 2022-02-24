import React from "react";

//Importar archivo de estilos de reac-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const ItemListContainer = (greeting) => {
  return (
    <>
      <main>{greeting.saludo}</main>
    </>
  );
};

export default ItemListContainer;
