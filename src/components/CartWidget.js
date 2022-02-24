import React, { Component } from "react";
import { FaCartPlus } from "react-icons/fa";
import styles from "../styles.css";

class CartWidget extends Component {
  render() {
    return (
      <>
        <FaCartPlus className="cartIcon" />
      </>
    );
  }
}

export default CartWidget;
