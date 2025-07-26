import { useEffect, useState } from "react";
import "../style.css";

const images = [
  { src: "/images/verdura.jpg", title: "Dried Fruit" },
  { src: "/images/verdura1.jpg", title: "Vegetables" },
  { src: "/images/verdura2.jpg", title: "Drink Fruits" },
  { src: "/images/verdura3.jpg", title: "Meat" },
  { src: "/images/verdura1.jpg", title: "Dairy" },
  { src: "/images/verdura2.jpg", title: "Bakery" },
  { src: "/images/verdura3.jpg", title: "Frozen Food" },
  { src: "/images/verdura1.jpg", title: "Snacks" },
  { src: "/images/verdura.jpg", title: "Fruits" },
  { src: "/images/verdura1.jpg", title: "Organic" },
  { src: "/images/verdura2.jpg", title: "Healthy" },
  { src: "/images/verdura3.jpg", title: "Fresh" },
];

const itemsPerSlide = 4; // Cantidad de imágenes visibles

const SectionImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Avanza automáticamente cada 3 segundos
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const visibleImages = [
    ...images.slice(currentIndex, currentIndex + itemsPerSlide),
    ...images.slice(0, Math.max(0, currentIndex + itemsPerSlide - images.length)),
  ];

  return (
    <div className="content-slider">
      {/* Botón Anterior */}
      <button onClick={handlePrev} className="slider-button prev">
        ❮
      </button>

      {/* Carrusel */}
      <div className="slider-container">
        <div className="slider-track">
          {visibleImages.map((item, index) => (
            <div key={index} className="slider-item">
              <img src={item.src} alt={item.title} className="slider-image" />
              <p className="slider-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Botón Siguiente */}
      <button onClick={handleNext} className="slider-button next">
        ❯
      </button>
    </div>
  );
};

export default SectionImages;