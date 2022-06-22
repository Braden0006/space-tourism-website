import React from "react";

import "./MarsDestination.css";

export default function MarsDestination() {
  return (
    <section className="mars">
      <h1 className="mars__title">MARS</h1>
      <p className="mars__description">
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
      </p>

      <span className="mars__line"></span>

      <div className="mars__travel">
        <div className="mars__travel__distance">
          <div className="mars__travel__distance__heading">AVG. DISTANCE</div>
          <div className="mars__travel__distance__number">225 mil. KM</div>
        </div>
        <div className="mars__travel__time">
          <div className="mars__travel__time__heading">EST. TRAVEL TIME</div>
          <div className="mars__travel__time__number">9 months</div>
        </div>
      </div>
    </section>
  );
}
