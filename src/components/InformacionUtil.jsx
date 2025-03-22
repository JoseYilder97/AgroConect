

import "../index.css";

/* import { Link } from 'react-router'; */

function InformacionUtil() {
  return (
    <article id="content" className="content">
      <div className="wrapper_content">
        <h2>Información Útil</h2>
        <div className="wrapper">
          <section className="col1">
            <span className="dropcap1">
              <span>01</span>
            </span>
            <div className="cols">
              <p className="pad_bot1 color1">
                Sed ut perspiciatis unde omnis este error ha surgido al tratar de explicar conceptos complejos.
              </p>
              <p className="pad_bot2">
                Nadie rechaza, ni odia, ni huye del placer en sí mismo, porque es placer.
              </p>
              <a href="#" className="link1">
                Leer Más
              </a>
            </div>
          </section>
          <section className="col1 pad_left1">
            <span className="dropcap1">
              <span className="color1">02</span>
            </span>
            <div className="cols">
              <p className="pad_bot1 color1">
                Es evidente que estas cosas simples se distinguen rápidamente. En un tiempo libre.
              </p>
              <p className="pad_bot2">
                Con las opciones que tenemos, podemos elegir lo que más nos conviene sin que haya impedimentos.
              </p>
              <a href="#" className="link1">
                Leer Más
              </a>
            </div>
          </section>
          <section className="col1 pad_left1">
            <span className="dropcap1">
              <span className="color2">03</span>
            </span>
            <div className="cols">
              <p className="pad_bot1 color1">
                ¿Quién critica o se opone al derecho de estar en el placer o evitar el dolor?
              </p>
              <p className="pad_bot2">
                Sin embargo, en ciertos momentos, y debido a deberes o necesidades, ocurren excepciones.
              </p>
              <a href="#" className="link1">
                Leer Más
              </a>
            </div>
          </section>
          
        </div>
      </div>
    </article>
  );
}

export default InformacionUtil;
