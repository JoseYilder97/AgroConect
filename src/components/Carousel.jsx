import "../index.css";
import { useState, useEffect } from "react";

const products = [
  { id: 1, image: "../../public/images/verdura.jpg", name: "Crab Pool Security", price: "$30.00" },
  { id: 2, image: "../../public/images/verdura.jpg", name: "Crab Pool Security", price: "$30.00" },
  { id: 3, image: "../../public/images/verdura.jpg", name: "Crab Pool Security", price: "$30.00" },
  { id: 4, image: "../../public/images/verdura.jpg", name: "Crab Pool Security", price: "$30.00" },
  { id: 5, image: "../../public/images/verdura.jpg", name: "Crab Pool Security", price: "$30.00" },
  { id: 6, image: "../../public/images/verdura.jpg", name: "Crab Pool Security", price: "$30.00" },
  { id: 7, image: "../../public/images/verdura.jpg", name: "Crab Pool Security", price: "$30.00" },
  { id: 8, image: "../../public/images/verdura.jpg", name: "Crab Pool Security", price: "$30.00" },
  { id: 9, image: "../../public/images/verdura.jpg", name: "Crab Pool Security", price: "$30.00" },
];

function Carousel() {
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
    <div className="relative w-1/4 max-w-4xl mx-auto">
      {/* Botones de navegación arriba del carrusel */}
      <div className="flex gap-4 justify-between">
      <h2 className="text-2xl font-bold mb-4 text-center">Latest Products</h2>
      <div className="flex justify-center space-x-2 mb-4">
        <button
          onClick={prevSlide}
          className="bg-gray-100 text-gray-600 px-3 py-1 border border-gray-300"
        >
          {'<'}
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-100 text-gray-600 px-3 py-1 border border-gray-300"
        >
          {'>'}
        </button>
      </div>

     
      
      </div>
 
      {/* Contenedor del carrusel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 flex justify-center space-x-4 flex-col">
              {products
                .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                .map((product) => (
                  <div key={product.id} className="w-full p-2 flex justify-between">
                    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-5">
                      <img src={product.image} alt={product.name} className="w-1/3 h-30 object-cover" />
                      <div className="flex flex-col w-full">
                      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                      <p className="text-gray-700 font-bold">{product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
