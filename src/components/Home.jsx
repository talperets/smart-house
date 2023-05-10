import React from "react";
import Room from "./Room";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function (props) {
  return (
    <div className="container">
      <div className="room-container">
        {props.rooms.map((val, idx) => {
          return <Room key={idx} roomProps={val} idx={idx} />;
        })}
      </div>
      <Link to="/addroom">
        <Button
          variant="contained"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "100%",
            border: "transparent",
            margin: "10px",
          }}
        >
          +
        </Button>
      </Link>
    </div>
  );
}
