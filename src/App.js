import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Carousel from "./Components/Carousel/Carousel";
import CarouselItem from "./Components/CarouselItem/CarouselItem";
import MoonDestination from "./Components/MoonDestination/MoonDestination";
import MarsDestination from "./Components/MarsDestination/MarsDestination";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/destinations"
          element={
            <Carousel>
              <CarouselItem>
                <MoonDestination />
              </CarouselItem>

              <CarouselItem>
                <MarsDestination />
              </CarouselItem>
            </Carousel>
          }
        />
      </Routes>
    </>
  );
}

export default App;
