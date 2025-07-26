import { useState , useEffect} from "react";


import "../index.css";
 

const images = [
  "../../public/images/verdura.jpg",
  "../../public/images/verdura1.jpg",
  "../../public/images/verdura2.jpg",
  "../../public/images/verdura3.jpg",
  "../../public/images/verdura.jpg"

];

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
              className={`carousel-indicator ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  };

export default Carousel;
