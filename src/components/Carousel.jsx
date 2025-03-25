
import "../style.css";
import { useState, useEffect } from "react";
import verduraImage from "../../public/images/verdura.jpg";

const products = [
  { id: 1, image: verduraImage, name: "Crab Pool Security", price: "$30.00" },
  { id: 2, image: verduraImage, name: "Crab Pool Security", price: "$30.00" },
  { id: 3, image: verduraImage, name: "Crab Pool Security", price: "$30.00" },
  { id: 4, image: verduraImage, name: "Crab Pool Security", price: "$30.00" },
  { id: 5, image: verduraImage, name: "Crab Pool Security", price: "$30.00" },
  { id: 6, image: verduraImage, name: "Crab Pool Security", price: "$30.00" },
  { id: 7, image: verduraImage, name: "Crab Pool Security", price: "$30.00" },
  { id: 8, image: verduraImage, name: "Crab Pool Security", price: "$30.00" },
  { id: 9, image: verduraImage, name: "Crab Pool Security", price: "$30.00" },
];

function Carousel({title}) {
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="carousel-container-image">
      <div className="carousel-buttons">
      <h2 className="carousel-title">{title}</h2>
        <button onClick={prevSlide}>{'<'}</button>
        <button onClick={nextSlide}>{'>'}</button>
      </div>
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div key={slideIndex} className="carousel-slide">
            {products
              .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
              .map((product) => (
                <div key={product.id} className="carousel-item">
                  <img src={product.image} alt={product.name} />
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;