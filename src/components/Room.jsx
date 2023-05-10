import React, { useContext } from "react";
import { roomContext } from "../App";
import isDarkColor from "is-dark-color";
import { Link } from "react-router-dom";


export default function Room({ roomProps, idx }) {
  const context = useContext(roomContext);
  return (
    <Link to={`/room${context.rooms[idx].name}`}>
      <button
        className="roomCard"
        onClick={() => context.setCurrentRoom(idx)}
        style={{
          backgroundColor: roomProps.color,
          color: isDarkColor(roomProps.color) ? "white" : "black",
        }}
      >
        <h2>{roomProps.name}</h2>
        <h3>{roomProps.type}</h3>
      </button>
    </Link>
  );
}
