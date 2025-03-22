import React from 'react';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src="profile-pic-url" alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <h2>Christina Karey</h2>
          <p>Brasil</p>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <p>63 kilos</p>
          <span>Peso</span>
        </div>
        <div className="stat">
          <p>175 cm</p>
          <span>Altura</span>
        </div>
        <div className="stat">
          <p>28 años</p>
          <span>Edad</span>
        </div>
      </div>
      <div className="profile-goals">
        <h3>Tus metas</h3>
        <div className="goal">
          <span>Dormir</span>
          <div className="progress-bar sleep">
            <div className="progress" style={{ width: '57.5%' }}></div>
          </div>
          <span>92 / 160</span>
        </div>
        <div className="goal">
          <span>Deporte</span>
          <div className="progress-bar sport">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
          <span>40 / 50</span>
        </div>
        <div className="goal">
          <span>Agua</span>
          <div className="progress-bar water">
            <div className="progress" style={{ width: '62.5%' }}></div>
          </div>
          <span>25 / 40</span>
        </div>
      </div>
      <div className="profile-team">
        <h3>Equipo</h3>
        <div className="team-event">
          <p>02.11, 12:00 - 13:00</p>
          <span>Yoga, Gimnasio Airplace</span>
        </div>
        <div className="team-event">
          <p>03.11, 16:00 - 17:30</p>
          <span>Terapia</span>
        </div>
      </div>
      <button className="download-stats">ESTADÍSTICA</button>
    </div>
  );
};

export default ProfileCard;