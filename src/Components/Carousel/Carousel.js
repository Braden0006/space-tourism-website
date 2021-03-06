import React, { useState } from "react";
import MediaQuery from "react-responsive";

import moon from "../Images/DestinationImg/image-moon.webp";
import mars from "../Images/DestinationImg/image-mars.webp";
import europa from "../Images/DestinationImg/image-europa.webp";
import titan from "../Images/DestinationImg/image-titan.webp";

import "./Carousel.css";

export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to update the index
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  // Object of destinations to map over and determine which button goes to what component based on the index
  const destinations = [{ Moon: 0 }, { Mars: 1 }, { Europa: 2 }, { Titan: 3 }];

  // Object of images to map over and display in the DOM
  const images = [
    { id: 0, image: moon },
    { id: 1, image: mars },
    { id: 2, image: europa },
    { id: 3, image: titan },
  ];

  return (
    <main className="main">
      <div className="main__carousel">
        <MediaQuery maxWidth={1023}>
          <h5 className="main__carousel__destination">
            <span className="main__carousel__destination__number">01</span> PICK
            YOUR DESTINATION
          </h5>
          <div className="main__carousel__img">
            <img
              className="main__carousel__img-image"
              src={images
                .map((image) => {
                  if (activeIndex === image.id) {
                    return image.image;
                  } else {
                    return null;
                  }
                })
                .join(" ")}
              key={images.map((image) => {
                return image.id;
              })}
              alt=""
            />
          </div>

          <div className="main__carousel__buttons">
            {React.Children.map(children, (child, index) => {
              return (
                <button
                  className={
                    activeIndex === index
                      ? "main__carousel__buttons-button active"
                      : "main__carousel__buttons-button"
                  }
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
                    return null;
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
        </MediaQuery>
        <MediaQuery minWidth={1024}>
          <div className="main__carousel__destination-container">
            <h5 className="main__carousel__destination">
              <span className="main__carousel__destination__number">01</span>{" "}
              PICK YOUR DESTINATION
            </h5>
            <div className="main__carousel__img">
              <img
                className="main__carousel__img-image"
                src={images
                  .map((image) => {
                    if (activeIndex === image.id) {
                      return image.image;
                    } else {
                      return null;
                    }
                  })
                  .join(" ")}
                key={images.map((image) => {
                  return image.id;
                })}
                alt=""
              />
            </div>
          </div>
          <div className="main__carousel__buttons-container">
            <div className="main__carousel__buttons">
              {React.Children.map(children, (child, index) => {
                return (
                  <button
                    className={
                      activeIndex === index
                        ? "main__carousel__buttons-button active"
                        : "main__carousel__buttons-button"
                    }
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
                      return null;
                    })}
                  </button>
                );
              })}
            </div>

            <div
              className={"main__carousel__inner"}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, { width: "100%" });
              })}
            </div>
          </div>
        </MediaQuery>
      </div>
    </main>
  );
}
