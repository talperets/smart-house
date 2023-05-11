import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { roomContext } from "../App";
import { Button } from "@mui/material";

export default function RoomView(props) {
  const context = useContext(roomContext);
  const [showAdd, setShowAdd] = useState(false);
  const showAddSection = () => {
    if (showAdd && context.rooms[context.currentRoom].products.length < 5) {
      return <AddProduct />;
    }
  };
  const ifShow = () => {};

  return (
    <div className="contained">
      <Link to="/">
        <Button variant="outlined">Back</Button>
      </Link>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        <div className="titleDiv">
          <p style={{ margin: "5px" }}>
            Room Name: {context.rooms[context.currentRoom].name}
          </p>
          <p style={{ margin: "5px" }}>
            Room Type: {context.rooms[context.currentRoom].type}
          </p>
        </div>
      </h2>
      <div className="products">
        <div className="flex">
          {context.rooms[context.currentRoom].products.map((val, idx) => {
            return (
              <Product val={val} idx={idx} currentRoom={props.currentRoom} />
            );
          })}
        </div>

        <Button
          disabled={context.rooms[context.currentRoom].products.length >= 5}
          variant="contained"
          style={{
            marginTop: "5px",
            marginButtom: "5px",
          }}
          onClick={() => setShowAdd(!showAdd)}
        >
          {showAdd ? "Hide Form" : "Add Items"}
        </Button>
      </div>

      <div>{showAddSection()}</div>
    </div>
  );
}
