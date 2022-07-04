import React, { useState } from "react";
import MediaQuery from "react-responsive";

import launch from "../Images/TechnologyImg/image-launch-vehicle-landscape.jpg";
import spaceport from "../Images/TechnologyImg/image-spaceport-landscape.jpg";
import space from "../Images/TechnologyImg/image-space-capsule-landscape.jpg";

import "./TechnologyCarousel.css";

export default function TechnologyCarousel({ children }) {
  const [technologyActiveIndex, setTechnologyActiveIndex] = useState(0);

  // updates the index on which component is active
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setTechnologyActiveIndex(newIndex);
  };

  // An array of objects of images to display depending on the index
  const images = [
    { id: 0, image: launch },
    { id: 1, image: spaceport },
    { id: 2, image: space },
  ];

  const indexNumber = [{ 0: 1 }, { 1: 2 }, { 2: 3 }];

  return (
    <main className="technology-main">
      <div className="technology-main__carousel">
        <MediaQuery maxWidth={1439}>
          <h5 className="technology-main__carousel__title">
            <span className="technology-main__carousel__title-number">03</span>
            SPACE LAUNCH 101
          </h5>
          <div className="technology-main__carousel__img">
            <img
              className="technology-main__carousel__img-image"
              src={images
                .map((image) => {
                  if (image.id === technologyActiveIndex) {
                    return image.image;
                  }
                  return null;
                })
                .join(" ")}
              alt="Images of the technology used"
            />
          </div>
          <div className="technology-main__carousel__buttons">
            {React.Children.map(children, (child, index) => {
              return (
                <button
                  className="technology-main__carousel__buttons-button"
                  onClick={() => updateIndex(index)}
                >
                  {indexNumber.map((item) => {
                    for (const [key, value] of Object.entries(item)) {
                      if (parseInt(key) === index) {
                        return `${value}`;
                      }
                    }
                    return null;
                  })}
                </button>
              );
            })}
          </div>
          <span className="technology-main__carousel__terminology">
            THE TERMINOLOGY...
          </span>
          <div
            className="technology-main__carousel__inner"
            style={{
              transform: `translateX(-${technologyActiveIndex * 100}%)`,
            }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </div>
        </MediaQuery>

        <MediaQuery minWidth={1440}>
          <h5 className="technology-main__carousel__title">
            <span className="technology-main__carousel__title-number">03</span>
            SPACE LAUNCH 101
          </h5>

          <div className="technology-main__carousel__buttons-container">
            <div className="technology-main__carousel__buttons">
              {React.Children.map(children, (child, index) => {
                return (
                  <button
                    className="technology-main__carousel__buttons-button"
                    onClick={() => updateIndex(index)}
                  >
                    {indexNumber.map((item) => {
                      for (const [key, value] of Object.entries(item)) {
                        if (parseInt(key) === index) {
                          return `${value}`;
                        }
                      }
                      return null;
                    })}
                  </button>
                );
              })}
            </div>
            <div className="technology-main__carousel__terminology-container">
              <span className="technology-main__carousel__terminology">
                THE TERMINOLOGY...
              </span>
              <div
                className="technology-main__carousel__inner"
                style={{
                  transform: `translateX(-${technologyActiveIndex * 100}%)`,
                }}
              >
                {React.Children.map(children, (child, index) => {
                  return React.cloneElement(child, { width: "100%" });
                })}
              </div>
            </div>
          </div>

          <div className="technology-main__carousel__img">
            <img
              className="technology-main__carousel__img-image"
              src={images
                .map((image) => {
                  if (image.id === technologyActiveIndex) {
                    return image.image;
                  }
                  return null;
                })
                .join(" ")}
              alt="Images of the technology used"
            />
          </div>
        </MediaQuery>
      </div>
    </main>
  );
}
