import React, { useState } from "react";

import "./MoonDestination.css";

export default function MoonDestination() {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <section className="moon">
      <h1 className="moon__title">MOON</h1>
      <p>
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
    </section>
  );
}
