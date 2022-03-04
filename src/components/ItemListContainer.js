import React from "react";

//Importar archivo de estilos de reac-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Importar ItemCount
import ItemCount from "./ItemCount";

const ItemListContainer = (greeting) => {
  return (
    <>
      <main>{greeting.saludo}</main>
      <ItemCount stock="10" initial="1" />
    </>
  );
};

export default ItemListContainer;
