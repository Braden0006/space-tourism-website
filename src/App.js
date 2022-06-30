import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";

import Carousel from "./Components/Carousel/Carousel";
import CarouselItem from "./Components/CarouselItem/CarouselItem";
import MoonDestination from "./Components/MoonDestination/MoonDestination";
import MarsDestination from "./Components/MarsDestination/MarsDestination";
import EuropaDestination from "./Components/EuropaDestination/EuropaDestination";
import TitanDestination from "./Components/TitanDestination/TitanDestination";

import CrewCarousel from "./Components/CrewCarousel/CrewCarousel";
import CrewA from "./Components/CrewA/CrewA";
import CrewB from "./Components/CrewB/CrewB";
import CrewC from "./Components/CrewC/CrewC";
import CrewD from "./Components/CrewD/CrewD";

import TechnologyCarousel from "./Components/TechnologyCarousel/TechnologyCarousel";
import TechnologyA from "./Components/TechnologyA/TechnologyA";
import TechnologyB from "./Components/TechnologyB/TechnologyB";
import TechnologyC from "./Components/TechnologyC/TechnologyC";

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

              <CarouselItem>
                <EuropaDestination />
              </CarouselItem>

              <CarouselItem>
                <TitanDestination />
              </CarouselItem>
            </Carousel>
          }
        />

        <Route
          path="/crew"
          element={
            <CrewCarousel>
              <CarouselItem>
                <CrewA />
              </CarouselItem>

              <CarouselItem>
                <CrewB />
              </CarouselItem>

              <CarouselItem>
                <CrewC />
              </CarouselItem>

              <CarouselItem>
                <CrewD />
              </CarouselItem>
            </CrewCarousel>
          }
        />

        <Route
          path="/technology"
          element={
            <TechnologyCarousel>
              <CarouselItem>
                <TechnologyA />
              </CarouselItem>

              <CarouselItem>
                <TechnologyB />
              </CarouselItem>

              <CarouselItem>
                <TechnologyC />
              </CarouselItem>
            </TechnologyCarousel>
          }
        />
      </Routes>
    </>
  );
}

export default App;
