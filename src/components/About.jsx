


import "../index.css";
 

const About = () => {
  return (
    <div className="container_items">
      <div className="container-somos">
        <div className="container_text_informasion">
          <h2>Quiens Somos</h2>
          <h3>AgroConect</h3>
          <p>
            AgroConect es una empresa que busca proporcionar soluciones ,
            apoyando a las familias y comunidades que dependen de nuestros productos y servicios.
        
          </p>
        </div>
        <div className="container_text_img">
          {["../../public/images/dog3.jpg", "../../public/images/dog6.jpg", "../../public/images/dog3.jpg"].map((img, index) => (
            <div key={index} className="item_container_img">
              <img
                src={`/asset/images/${img}`}
                alt=""
              />
              <div className="items_text">
                <h2>Mision</h2>
                <p>
            AgroConect es una empresa que busca proporcionar soluciones ,
            apoyando a las familias y comunidades que dependen de nuestros productos y servicios.
        
          </p>
                <a href="#">Quienes somos</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
