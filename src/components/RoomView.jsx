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
  const addProduct = (product) => {
    if (context.productArr.length < 5) {
      context.setproductArr([
        ...context.productArr,
        { name: product, on: false },
      ]);
    }
  };

  const toggleProduct = (index) => {
    const newProductArr = [...context.rooms[context.currentRoom].products];
    newProductArr[index].on = !newProductArr[index].on;
    context.setproductArr(newProductArr);
    context.rooms[context.currentRoom].products = newProductArr;
  };

  const showAddSection = () => {
    if (showAdd) {
      return <AddProduct addProduct={addProduct} />;
    }
  };

  return (
    <div className="contained">
      <Link to="/">
        <Button
          variant="outlined"
          onClick={() =>
            context.setproductArr(context.rooms[context.currentRoom].products)
          }
        >
          Back
        </Button>
      </Link>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        {context.rooms[context.currentRoom].name}{" "}
        {context.rooms[context.currentRoom].type}
      </h2>
      <div className="products">
        <div className="flex">
          {context.rooms[context.currentRoom].products.map((val, idx) => {
            return (
              <Product
                addProduct={addProduct}
                toggleProduct={toggleProduct}
                val={val}
                idx={idx}
                currentRoom={props.currentRoom}
              />
            );
          })}
        </div>

        <Button
          variant="contained"
          style={{
            marginTop: "5px",
            marginButtom: "5px",
          }}
          onClick={() => (showAdd ? setShowAdd(false) : setShowAdd(true))}
        >
          {showAdd ? "Hide Form" : "Add Items"}
        </Button>
      </div>

      <div>{showAddSection()}</div>
    </div>
  );
}
