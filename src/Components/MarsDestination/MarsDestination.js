import React from "react";

import "./MarsDestination.css";

export default function MarsDestination() {
  return (
    <section className="moon">
      <h1 className="moon__title">MARS</h1>
      <p className="moon__description">
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
      </p>

      <span className="moon__line"></span>

      <div className="moon__travel">
        <div className="moon__travel__distance">
          <div className="moon__travel__distance__heading">AVG. DISTANCE</div>
          <div className="moon__travel__distance__number">225 mil. KM</div>
        </div>
        <div className="moon__travel__time">
          <div className="moon__travel__time__heading">EST. TRAVEL TIME</div>
          <div className="moon__travel__time__number">9 months</div>
        </div>
      </div>
    </section>
  );
}
