import React from "react";

export default function CrewCarousel({ children }) {
  return (
    <main className="crew-main">
      <div className="crew-main__carousel">
        <div
          className="crew-main__carousel__inner"
          style={{ transform: "translateX(-0%)" }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
    </main>
  );
}
