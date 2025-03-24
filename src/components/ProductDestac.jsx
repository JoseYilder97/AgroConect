/* import React from "react"; */
import dogStar from '../../public/images/logo.png'


import "../index.css";


function ProductDestac() {
    return (<article className="content_product_destac">
        <h2>Productos Destacados
            
        </h2>
        <div className="product_destac_wrapper">
            <div className="product_destac_info">
                <figure className="product_figure">
                    <img src={dogStar} alt="Tomate" />
                </figure>
                <p className="product_destac">
                    <span className="product_info_title">Cafe</span>
                    <br />
                    <em>Las verduras son una excelente fuente de nutrientes esenciales, como vitaminas, minerales, fibra y antioxidantes, y se consideran una parte importante de una dieta saludable.</em>
                    <br />
                </p>
                <a href="#" className="link1">
                    Leer Más
                </a>
            </div>
            <div className="product_destac_info">
                <figure className="product_figure">
                    <img src={dogStar} alt="Pimiento Dulce" />
                </figure>
                <p className="product_destac">
                    <span className="product_info_title">Frijol</span>
                    <br />
                    <em>Las verduras son una excelente fuente de nutrientes esenciales, como vitaminas, minerales, fibra y antioxidantes, y se consideran una parte importante de una dieta saludable.</em>
                    <br />
                </p>
                <a href="#" className="link1">
                    Leer Más
                </a>
            </div>
            <div className="product_destac_info">
                <figure className="product_figure">
                    <img src={dogStar} alt="Pepino" />
                </figure>
                <p className="product_destac">
                    <span className="product_info_title">Pepino</span>
                    <br />
                    <em>Las verduras son una excelente fuente de nutrientes esenciales, como vitaminas, minerales, fibra y antioxidantes, y se consideran una parte importante de una dieta saludable.</em>
                    <br />
                </p>
                <a href="#" className="link1">
                    Leer Más
                </a>
            </div>
            <div className="product_destac_info">
                <figure className="product_figure">
                    <img src={dogStar}alt="Maíz" />
                </figure>
                <p className="product_destac">
                    <span className="product_info_title">Maíz</span>
                    <br />
                    <em>Las verduras son una excelente fuente de nutrientes esenciales, como vitaminas, minerales, fibra y antioxidantes, y se consideran una parte importante de una dieta saludable.</em>
                    <br />
                </p>
                <a href="#" className="link1">
                    Leer Más
                </a>
            </div>
        </div>
    </article>
    );
}

export default ProductDestac;
