import React, { useState } from "react";

import douglas from "../Images/CrewImg/image-douglas-hurley.webp";
import mark from "../Images/CrewImg/image-mark-shuttleworth.webp";
import victor from "../Images/CrewImg/image-victor-glover.webp";
import anousheh from "../Images/CrewImg/image-anousheh-ansari.webp";

import "./CrewCarousel.css";

export default function CrewCarousel({ children }) {
  const [crewActiveIndex, setCrewActiveIndex] = useState(0);

  // This function updates the new index
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setCrewActiveIndex(newIndex);
  };

  // Object to display the buttons based on what child it is
  const crew = [{ "": 0 }, { "": 1 }, { "": 2 }, { "": 3 }];

  // Object to display the crew images when mapped over in the DOM
  const images = [
    {id: 0, image: douglas},
    {id: 1, image: mark},
    {id: 2, image: victor},
    {id: 3, image: anousheh},
  ];

  return (
    <main className="crew-main">
      <div className="crew-main__carousel">
        <h5 className="crew-main__carousel__title">
          <span className="crew-main__carousel__title-number">02</span> MEET
          YOUR CREW
        </h5>

        <div className="crew-main__carousel__img">
          <div className="crew-main__carousel__img-container">
            <img
              className="crew-main__carousel__img-container-image"
              src={images.map((image) => {
                if (image.id === crewActiveIndex) {
                  return image.image;
                } else {
                  return null;
                }
              }).join('')}
              key={images.map((image) => {
                return image.id;
              })}
              alt=""
            />
            <div className="crew-main__carousel__img-line"></div>
          </div>
        </div>

        <div className="crew-main__carousel__buttons">
          {React.Children.map(children, (child, index) => {
            return (
              <button
                className="crew-main__carousel__buttons-button"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                {crew.map((crew) => {
                  for (const [key, value] of Object.entries(crew)) {
                    if (value === index) {
                      return `${key}`;
                    }
                  }
                  return null;
                })}
              </button>
            );
          })}
        </div>

        <div
          className="crew-main__carousel__inner"
          style={{ transform: `translateX(-${crewActiveIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
    </main>
  );
}
