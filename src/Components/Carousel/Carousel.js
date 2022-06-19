import React from "react";

import "./Carousel.css";

export default function Carousel({ children }) {
  return (
    <main className="main">
      <h5 className="main__destination">
        <span>01</span> PICK YOUR DESTINATION
      </h5>
      <div className="main__carousel">
        <div className="main__carousel__inner">{children}</div>
      </div>
    </main>
  );
}
