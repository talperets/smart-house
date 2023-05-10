import Home from "./components/Home";
import AddRoom from "./components/AddRoom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import RoomView from "./components/RoomView";
import NoMatch from "./components/NoMatch";
import "./app.css";

export const roomContext = React.createContext();
function App() {
  const localRooms = JSON.parse(localStorage.getItem("rooms"));
  const [rooms, setRooms] = useState(localRooms || []);
  const [productArr, setproductArr] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(0);
  const updateProductArr = () => {
    const newRooms = [...rooms];
    newRooms[currentRoom].products = productArr;
    setRooms(newRooms);
  };
  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(rooms));
  }, [rooms]);
  
  return (
    <>
    <h1 className="title">Smart House</h1>
    <div className="base">
      <roomContext.Provider
        value={{
          rooms: rooms,
          setRooms: setRooms,
          updateProductArr: updateProductArr,
          currentRoom: currentRoom,
          setCurrentRoom: setCurrentRoom,
          productArr: productArr,
          setproductArr: setproductArr,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home rooms={rooms} />} />
            <Route
              path="/addroom"
              element={<AddRoom setRooms={setRooms} rooms={rooms} />}
            />
            <Route
              path={`/room${rooms.length < 1 ? "" : rooms[currentRoom].name}`}
              element={<RoomView rooms={rooms} setRooms={setRooms} />}
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </roomContext.Provider>
    </div>
    </>
  );
}

export default App;
