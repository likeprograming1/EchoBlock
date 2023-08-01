import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/main";
import Maps from "./pages/maps/maps";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/maps/:id" element={<Maps />}></Route>
      </Routes>
    </div>
  );
}

export default App;
