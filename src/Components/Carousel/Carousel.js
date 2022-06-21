import React, { useState } from "react";

import "./Carousel.css";

export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  const destinations = [{ Moon: 0 }, { Mars: 1 }];

  return (
    <main className="main">
      <h5 className="main__destination">
        <span>01</span> PICK YOUR DESTINATION
      </h5>
      <div className="main__carousel">
        <div className="main__carousel__buttons">
          {React.Children.map(children, (child, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
              >
                {destinations.map((destination) => {
                  for (const [key, value] of Object.entries(destination)) {
                    if (value === index) {
                      return `${key}`;
                    }
                  }
                })}
              </button>
            );
          })}
        </div>

        <div
          className="main__carousel__inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
    </main>
  );
}
