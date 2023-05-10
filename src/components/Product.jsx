import React from "react";

export default function Product(props) {
  return (
    <button
      className="productCard"
      variant="contained"
      onClick={() => props.toggleProduct(props.idx)}
      style={{
        transition: "500ms",
        backgroundColor: props.val.on ? "green" : "red",
      }}
    >
      {props.val.name}
    </button>
  );
}
