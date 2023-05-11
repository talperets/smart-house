import React, { useContext } from "react";
import { roomContext } from "../App";
import { Alert } from "@mui/material";

export default function Product(props) {
  const context = useContext(roomContext);
  return (
    <button
      className="productCard"
      variant="contained"
      onClick={() => context.toggleProduct(props.idx)}
      style={{
        transition: "500ms",
        backgroundColor: props.val.on ? "green" : "red",
      }}
    >
      {props.val.name}
    </button>
  );
}
