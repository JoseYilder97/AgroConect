// src/components/PricingInfo.js
import "../../index.css";

import tomatoImg from '../../assets/images/verdura.png';
import sweetPepperImg from '../../assets/images/naranja.png';
import cucumberImg from '../../assets/images/verdura1.jpg';

const PricingInfo = () => {
    return (
        <div className="content_pricing_info">
            <div className="content_pricing_info_main">
                <article className="content_article_prece">
                    <h2>
                        Información de precios</h2>
                    <div className="pricing_information_wrapper">
                        <div className="content_info">
                            <div className="content_info_wrapper">
                                <figure className="left marg_right1">
                                    <img src={tomatoImg} alt="Tomato" />
                                </figure>
                                <p>
                                    <span className="product_prece_title">Cafeson</span><br />
                                    jsonEndDecription
                                </p>
                            </div>
                            <ul className="price">
                                <li>
                                    <a href="#">json</a>
                                    <span>$15</span>
                                </li>

                            </ul>
                        </div>
                        <div className="content_info">
                            <div className="content_info_wrapper">
                                <figure className="left marg_right1">
                                    <img src={sweetPepperImg} alt="Sweet Pepper" />
                                </figure>
                                <p>
                                    <span className="product_prece_title">Frijol</span><br />
                                    jsonEndDecription
                                </p>
                            </div>
                            <ul className="price">
                                <li>
                                    <a href="#">json</a>
                                    <span>$57</span>
                                </li>

                            </ul>
                        </div>
                        <div className="content_info">
                            <div className="content_info_wrapper">
                                <figure className="left marg_right1">
                                    <img src={cucumberImg} alt="Cucumber" />
                                </figure>
                                <p>
                                    <span className="product_prece_title">Cucumber</span><br />
                                    jsonEndDecription
                                </p>
                            </div>
                            <ul className="price">
                                <li>
                                    <a href="#">json</a>
                                    <span>$57</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default PricingInfo;