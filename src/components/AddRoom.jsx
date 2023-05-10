import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { Link } from "react-router-dom";
import { Button, MenuItem, Select, TextField, FormLabel } from "@mui/material";

export default function AddRoom(props) {
  const [color, setColor] = useState("#ffffff");
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("Bedroom");
  const handleChange = (color) => {
    setColor(color.hex);
  };
  const addRoom = () => {
    let newRoom = {
      name: roomName,
      type: roomType,
      color: color,
      products: [],
    };
    props.setRooms([...props.rooms, newRoom]);
  };

  return (
    <div className="container">
      <FormLabel htmlFor="">Room type:</FormLabel>
      <Select
        style={{
          marginBottom: "10px",
        }}
        name=""
        value={roomType}
        id=""
        onChange={(e) => setRoomType(e.target.value)}
      >
        <MenuItem value="Bedroom">Bedroom</MenuItem>
        <MenuItem value="Bathroom">Bathroom</MenuItem>
        <MenuItem value="Kitchen">Kitchen</MenuItem>
      </Select>
      <ChromePicker
        style={{
          marginTop: "10px",
        }}
        color={color}
        onChange={handleChange}
      />
      <TextField
        style={{
          marginTop: "10px",
        }}
        onChange={(e) => setRoomName(e.target.value)}
        type="text"
        label="Room name"
      />
      <Link
        style={{
          marginTop: "10px",
        }}
        className="container"
        to="/"
      >
        <Button
          variant="contained"
          onClick={() => (roomName.length < 1 ? alert("error") : addRoom())}
        >
          Create Room
        </Button>
      </Link>
    </div>
  );
}
