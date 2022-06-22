import React from "react";

import "./EuropaDestination.css";

export default function MarsDestination() {
  return (
    <section className="europa">
      <h1 className="europa__title">EUROPA</h1>
      <p className="europa__description">
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
      </p>

      <span className="europa__line"></span>

      <div className="europa__travel">
        <div className="europa__travel__distance">
          <div className="europa__travel__distance__heading">AVG. DISTANCE</div>
          <div className="europa__travel__distance__number">628 mil. KM</div>
        </div>
        <div className="europa__travel__time">
          <div className="europa__travel__time__heading">EST. TRAVEL TIME</div>
          <div className="europa__travel__time__number">3 years</div>
        </div>
      </div>
    </section>
  );
}
