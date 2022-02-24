import React from "react";
import CartWidget from "./CartWidget";

//Importar componentes de react-bootstrap
import Container from "../../node_modules/react-bootstrap/Container";
import Nav from "../../node_modules/react-bootstrap/Nav";
import Navbar from "../../node_modules/react-bootstrap/Navbar";

//Importar archivo de estilos de reac-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "../components/ItemListContainer";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Alpe Comprobantes digitales</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Sublimacion</Nav.Link>
            <Nav.Link href="#features">Corte de vinil</Nav.Link>
            <Nav.Link href="#pricing">Publicidad</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
      <ItemListContainer saludo="Hola Coderhouse" />
    </>
  );
}

export default NavBar;
