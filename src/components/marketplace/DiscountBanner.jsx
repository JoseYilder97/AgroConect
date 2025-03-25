import "../../style.css";
const image = [
    "../../public/images/verdura.jpg",
    "../../public/images/verdura1.jpg",
    "../../public/images/verdura2.jpg",
    "../../public/images/verdura3.jpg",
    "../../public/images/verdura3.jpg",
    "../../public/images/verdura3.jpg",
    "../../public/images/verdura3.jpg",
    "../../public/images/verdura3.jpg",
    "../../public/images/verdura3.jpg",
    "../../public/images/verdura3.jpg",
    "../../public/images/verdura3.jpg",
    "../../public/images/verdura3.jpg",
  ];

  export default function DiscountBanner() {
    return (
      <div className="discount-banner-container">
        {/* Primer Anuncio */}
        <div className="discount-banner">
          <div className="discount-content">
            <h2 className="discount-title">Dried & Drink Fruits</h2>
            <p className="discount-subtitle">With 25% Off All Teas</p>
            <button className="discount-button">SHOP NOW</button>
          </div>
          <div className="discount-images">
            <img
              src={image[0]}
              alt="Tropicana Juice"
              className="discount-image"
            />
          </div>
        </div>
  
        {/* Segundo Anuncio */}
        <div className="discount-banner">
          <div className="discount-content">
            <h2 className="discount-title">Summer Fruit</h2>
            <p className="discount-subtitle">100% Pure Natural Fruit Juice</p>
            <button className="discount-button">SHOP NOW</button>
          </div>
          <div className="discount-images">
            <img
              src={image[1]}
              alt="Fruit Basket"
              className="discount-image"
            />
          </div>
        </div>
      </div>
    );
  }