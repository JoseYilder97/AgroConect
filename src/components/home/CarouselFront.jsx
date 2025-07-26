import { useState, useEffect } from "react";
import "../../index.css";


import verdura from "../../assets/images/verdura.png";
import naranja from "../../assets/images/naranja.png";
import verdura2 from "../../assets/images/verdura2.jpg";
import verdura3 from "../../assets/images/verdura3.jpg";

// Usa las imágenes importadas en el array
const images = [verdura, naranja, verdura2, verdura3, verdura];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      <button className="carousel-button prev" onClick={prevSlide}>
        ◀
      </button>

      <button className="carousel-button next" onClick={nextSlide}>
        ▶
      </button>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel-indicator ${currentIndex === index ? "active" : ""
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;