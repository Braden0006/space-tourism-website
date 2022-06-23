import React, { useState } from "react";

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
  const crew = [{ one: 1 }, { two: 2 }, { three: 3 }, { four: 4 }];

  return (
    <main className="crew-main">
      <div className="crew-main__carousel">
        <h5 className="crew-main__carousel__title">
          <span>02</span> MEET YOUR CREW
        </h5>

        <div className="crew-main__carousel__buttons">
          {React.Children.map(children, (child, index) => {
            return (
              <button
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
                  return null
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
