import React, { useState, useContext, useEffect } from "react";
import { roomContext } from "../App";
import { Button, Select, MenuItem } from "@mui/material";

export default function () {
  const context = useContext(roomContext);
  const [current, setCurrent] = useState("AC");

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
        <MenuItem
          value={
            context.rooms[context.currentRoom].type === "Bathroom"
              ? "Boiler"
              : () => {
                  alert("You can add this product only in bathrooms");
                  return "AC";
                }
          }
        >
          Boiler
        </MenuItem>
        <MenuItem value="Lightbulb">Lightbulb</MenuItem>
        <MenuItem value="Stereo System">Stereo System</MenuItem>
        <MenuItem value="AC">AC</MenuItem>
      </Select>
      <div>
        <Button
          variant="contained"
          disabled={
            context.rooms[context.currentRoom].products.length >= 5
              ? true
              : false
          }
          style={{
            margin: "10px",
            width: "200px",
          }}
          onClick={() => context.addProduct(current)}
        >
          Add Item
        </Button>
      </div>
    </div>
  );
}
