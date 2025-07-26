import "../../index.css";
function ArticleContent() {
    return (
        <article id="content" className="content">
            <div className="wrapper_content">
                <h2>Nuevas Tecnologías</h2>
                <div className="wrapper">
                    <section className="col1">
                        <span className="dropcap1"><span>a</span></span>
                        <div className="cols">
                            <p className="pad_bot1 color1">AgroConect es el sitios web creadas para nuestros campesinos</p>
                            <p className="pad_bot2">AgroConect es el sitios web creadas para nuestros campesinos</p>
                            <a href="#" className="link1">Leer Más</a>
                        </div>
                    </section>
                    <section className="col1 pad_left1">
                        <span className="dropcap1"><span className="color1">b</span></span>
                        <div className="cols">
                            <p className="pad_bot1 color1">AgroConect es el sitios web creadas para nuestros campesinos</p>
                            <p className="pad_bot2">AgroConect es el sitios web creadas para nuestros campesinos</p>
                            <a href="#" className="link1">Leer Más</a>
                        </div>
                    </section>
                    <section className="col1 pad_left1">
                        <span className="dropcap1"><span className="color2">c</span></span>
                        <div className="cols">
                            <p className="pad_bot1 color1">AgroConect es el sitios web creadas para nuestros campesinos</p>
                            <p className="pad_bot2"><a href="index.html" className="link2">Página Principal</a>, <a href="products.html" className="link2">Página de Productos</a>, <a href="technology.html" className="link2">Tecnología</a>, <a href="pricing.html" className="link2">Precios</a>, <a href="contact.html" className="link2">Login</a> ()Para que si deseas vende tus productos o coprar</p>
                            <a href="#" className="link1">Leer Más</a>
                        </div>
                    </section>
                    
                </div>
            </div>
        </article>
    );
}

export default ArticleContent;
