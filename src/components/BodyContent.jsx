import dogLogo from '../../public/images/logo.png'


import "../index.css";


function BodyContent() {
    return (
        <div className="content_article">
            <div className="contet_main">
                <article  className="content_article">
                    <div className="content_article_wrapper">
                        <section className="content_section">
                            <h2>Queremos Mejorar Tus Ventas <span>!</span></h2>
                            <div className="testimonials">
                                <p className="p">sjon
                                    <img src="images/quot2.png" alt=""/></p>
                            </div>
                            <p className="p_secund"><em className="font1 color1">Capacidades:</em></p>
                            <div className="content_section_wrapper">
                                <section className="secicion_colums">
                                    <ul className="ul">
                                        <li><a href="#">Top ventas json</a></li>
                                        
                                    </ul>
                                </section>
                                <section className="secicion_colums">
                                    <ul className="ul">
                                    <li><a href="#">Top ventas json</a></li>
                                        
                                    </ul>
                                </section>
                            </div>
                        </section>
                        <section className="content_section-product">
                            <h2>Nuestros Productos</h2>
                            <div className="product_wrapper">
                                <figure className="left marg_right1"><img src={dogLogo} alt=""/></figure>
                                <p><span className="p">Tomate</span><br/>
                                   desatlelsJson &nbsp; <a href="#" className="link1">Leer Más</a></p>
                            </div>
                            <div className="product_wrapper">
                                <figure className="left marg_right1"><img src={dogLogo} alt=""/></figure>
                                <p><span className="p">Pimiento Dulce</span><br/>
                                Top ventas json &nbsp; <a href="#" className="link1">Leer Más</a></p>
                            </div>
                            <div className="product_wrapper">
                                <figure className="left marg_right1"><img src={dogLogo} alt=""/></figure>
                                <p><span className="p">Pepino</span><br/>
                                Top ventas json &nbsp; <a href="#" className="link1">Leer Más</a></p>
                            </div>
                        </section>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default BodyContent;
