import React from "react";

import "./TitanDestination.css";

export default function TitanDestination() {
  return (
    <section className="titan">
      <h1 className="titan__title">TITAN</h1>
      <p className="titan__description">
        The only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.
      </p>

      <span className="titan__line"></span>

      <div className="titan__travel">
        <div className="titan__travel__distance">
          <div className="titan__travel__distance__heading">AVG. DISTANCE</div>
          <div className="titan__travel__distance__number">1.6 bil. KM</div>
        </div>
        <div className="titan__travel__time">
          <div className="titan__travel__time__heading">EST. TRAVEL TIME</div>
          <div className="titan__travel__time__number">7 years</div>
        </div>
      </div>
    </section>
  );
}
