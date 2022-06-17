import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";

import "./App.css";

function App() {
  return (
    <>
      <div className="main-page">
        <Navbar />
        <Homepage />
      </div>
    </>
  );
}

export default App;
