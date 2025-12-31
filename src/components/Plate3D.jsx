import React, { useState, useEffect } from "react";
import plate1 from "../Assets/plate 6.png";
import plate2 from "../Assets/plate 8.png";
import plate3 from "../Assets/plate 10.png";
import plate4 from "../Assets/plate 12.png";
import "./Plate3D.css";

function Plate3D() {
  const images = [plate1, plate2, plate3, plate4];

  const [index, setIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setImageError(false);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="plate-3d-wrapper">
      <div className="plate-3d-container">
        {!imageError ? (
          <img
            key={index}   // 👈 forces animation restart
            src={images[index]}
            alt="Areca Leaf Plate"
            className="plate-image animated"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="plate-placeholder">
            <p>Plate image not found</p>
            <p className="plate-placeholder-hint">
              Please check the image path
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Plate3D;
