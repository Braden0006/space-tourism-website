import React, { useState } from "react";

import "./TechnologyCarousel.css";

export default function TechnologyCarousel() {
  const [technologyActiveIndex, setTechnologyActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setTechnologyActiveIndex(newIndex);
  };

  return (
    <main className="technology-main">
      <div className="technology-main__carousel">
        <div className="technology-main__carousel__buttons">
          {React.Children.map(children, (child, index) => {
            return (
              <button
                className="technology-main__carousel__buttons-button"
                onClick={updateIndex(index)}
              >
                {index}
              </button>
            );
          })}
        </div>

        <div
          className="technology-main__carousel__inner"
          style={{ transform: `translateX(-${technologyActiveIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
    </main>
  );
}
