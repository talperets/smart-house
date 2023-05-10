import React, { useState, useContext, useEffect } from "react";
import { roomContext } from "../App";
import { Button, Select, MenuItem } from "@mui/material";

export default function (props) {
  const context = useContext(roomContext);
  const [current, setCurrent] = useState("Boiler");
  const addProduct = () => {
    props.addProduct(current);
  };
  useEffect(() => {
    context.updateProductArr();
  }, [context.productArr]);

  return (
    <div className="container">
      <h2>Add Product</h2>

      <Select
        style={{
          width: "200px",
        }}
        value={current}
        labelId={current}
        onChange={(e) => setCurrent(e.target.value)}
        name=""
        id=""
      >
        <MenuItem value="Boiler">Boiler</MenuItem>
        <MenuItem value="Lightbulb">Lightbulb</MenuItem>
        <MenuItem value="Stereo System">Stereo System</MenuItem>
        <MenuItem value="AC">AC</MenuItem>
      </Select>
      <div>
        <Button
          variant="contained"
          disabled={context.productArr.length >= 5 ? true : false}
          style={{
            margin: "10px",
            width: "200px",
          }}
          onClick={addProduct}
        >
          Add Item
        </Button>
      </div>
    </div>
  );
}
