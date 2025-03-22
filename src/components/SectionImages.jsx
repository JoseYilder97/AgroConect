import { useEffect, useState } from "react";
import "../style.css";


const images = [
  { src: "/images/verdura.jpg", title: "Vegetables" },
  { src: "/images/verdura1.jpg", title: "Vegetables" },
  { src: "/images/verdura2.jpg", title: "Drink Fruits" },
  { src: "/images/verdura3.jpg", title: "Meat" },
  { src: "/images/verdura1.jpg", title: "Dairy" },
  { src: "/images/verdura2.jpg", title: "Bakery" },
  { src: "/images/verdura3.jpg", title: "Frozen Food" },
  { src: "/images/verdura1.jpg", title: "Vegetables" },
  { src: "/images/verdura2.jpg", title: "Drink Fruits" },
  { src: "/images/verdura3.jpg", title: "Meat" },
  { src: "/images/verdura1.jpg", title: "Dairy" },
  { src: "/images/verdura2.jpg", title: "Bakery" },
  { src: "/images/verdura3.jpg", title: "Frozen Food" },
  { src: "/images/verdura1.jpg", title: "Vegetables" },
  { src: "/images/verdura2.jpg", title: "Drink Fruits" },
  { src: "/images/verdura3.jpg", title: "Meat" },
  { src: "/images/verdura1.jpg", title: "Dairy" },
  { src: "/images/verdura2.jpg", title: "Bakery" },
  { src: "/images/verdura3.jpg", title: "Frozen Food" },
  { src: "/images/verdura4.jpg", title: "Snacks" }
];
const itemsPerSlide = 4; // Cantidad de imágenes visibles
const SectionImages = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const totalImages = images.length;
  
    // Función para avanzar
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };
  
    // Función para retroceder
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalImages - 1 : prevIndex - 1
      );
    };
  
    // Auto-play del carrusel
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
        }, 5000);
      
        return () => clearInterval(interval);
      }, [totalImages]); // Se ejecuta cada vez que `totalImages` cambia (aunque en este caso no cambiará)
      
  
    return (
      <div className="Content_sideder">
        {/* Botón Anterior */}
        <button
          onClick={prevSlide}
          className="sidebar_button"
        >
          ❮
        </button>
  
        {/* Carrusel */}
        <div className="sidebar_section">
          <div
            className="content_sidebar_container"
            style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)` }}
          >
            {[...images, ...images.slice(0, itemsPerSlide)].map((item, index) => (
              <div key={index} className="sidebar_container_hero">
                <img
                  src={item.src}
                  alt={item.title}
                  className="sidebar_iamge"
                />
                <p className="sidebar_text">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Botón Siguiente */}
        <button
          onClick={nextSlide}
          className="sidebar-btn"
        >
          ❯
        </button>
      </div>
    );
  };
  
  export default SectionImages;