import React from "react";

import { Link } from "react-router-dom";

import "./Homepage.css";

export default function Homepage() {
  return (
    <main className="homepage">
      <div className="homepage__info">
        <h5 className="homepage__info__title-small">
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <span className="homepage__info__title">SPACE</span>
        <p className="homepage__info__para">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="homepage__button__container">
        <div className="homepage__button__container-container">
          <Link to='/destinations'>
            <button className="homepage__button">EXPLORE</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
