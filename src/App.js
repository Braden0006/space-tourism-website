import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Carousel from "./Components/Carousel/Carousel";

import "./App.css";

function App() {
  return (
    <>
      {/* <div className="main-page"> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/moon-destination" element={<Carousel />} />
      </Routes>
      {/* </div> */}
    </>
  );
}

export default App;
