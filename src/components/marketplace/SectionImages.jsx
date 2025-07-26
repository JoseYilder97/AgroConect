import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/marketplace.css";


const itemsPerSlide = 4; // Cantidad de imágenes visibles

const SectionImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dynamicImages, setDynamicImages] = useState([]); // Inicializa con imágenes estáticas

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:8084/api/productos");
        const fetchedImages = response.data.map((product) => ({
          src: `http://localhost:8080${product.imagenUrl}`, // Construir URL completa
          title: product.name,
        }));
        setDynamicImages((prevImages) => [...prevImages, ...fetchedImages]); // Agrega imágenes dinámicas
      } catch (error) {
        console.error("Error al cargar las imágenes:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Avanza automáticamente cada 3 segundos
    }, 3000);
    return () => clearInterval(interval);
  }, [dynamicImages]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dynamicImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dynamicImages.length - 1 : prevIndex - 1
    );
  };

  const visibleImages = [
    ...dynamicImages.slice(currentIndex, currentIndex + itemsPerSlide),
    ...dynamicImages.slice(0, Math.max(0, currentIndex + itemsPerSlide - dynamicImages.length)),
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