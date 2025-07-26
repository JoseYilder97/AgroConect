import { useState } from "react";
import "../index.css";
const products = [
  { id: 1, image: "/img/spinach.png", name: "Crab Pool Security", price: "$30.00" },
  { id: 2, image: "/img/peppers.png", name: "Crab Pool Security", price: "$30.00" },
  { id: 3, image: "/img/chicken.png", name: "Crab Pool Security", price: "$30.00" },
  { id: 4, image: "/img/spinach.png", name: "Crab Pool Security", price: "$30.00" },
  { id: 5, image: "/img/peppers.png", name: "Crab Pool Security", price: "$30.00" },
  { id: 6, image: "/img/chicken.png", name: "Crab Pool Security", price: "$30.00" },
];

function ProductCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 3; // Muestra 3 elementos por vez

  const nextSlide = () => {
    if (startIndex + itemsPerView < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Latest Products</h2>
      
      {/* Contenedor del Carrusel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${startIndex * 33.3}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-1/3 flex-shrink-0 p-2">
              <div className="bg-white p-4 rounded-lg shadow">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-700 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de Navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}




export default ProductCarousel;
