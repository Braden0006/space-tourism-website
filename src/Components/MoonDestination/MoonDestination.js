import React from "react";

import "./MoonDestination.css";

export default function MoonDestination() {

  return (
    <section className="moon">
      <h1 className="moon__title">MOON</h1>
      <p className="moon__description">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>

      <span className="moon__line"></span>

      <div className="moon__travel">
        <div className="moon__travel__distance">
          <div className="moon__travel__distance__heading">AVG. DISTANCE</div>
          <div className="moon__travel__distance__number">384,400 KM</div>
        </div>
        <div className="moon__travel__time">
          <div className="moon__travel__time__heading">EST. TRAVEL TIME</div>
          <div className="moon__travel__time__number">3 DAYS</div>
        </div>
      </div>
    </section>
  );
}
