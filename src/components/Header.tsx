import React from 'react';
import profilePic from '../assets/fotoql.jpg';

const Header: React.FC = () => {
  return (
	<header className="header-container">
	  <div className="header-main">
		<img src={profilePic} alt="Santiago Fuentes Llanos" className="profile-img" />
		<div className="header-text">
		  <h1>Santiago Fuentes Llanos</h1>
		  <p className="tagline">Étudiant en BUT Informatique | École 42 Paris</p>
		  <p className="bio">"Développeur passionné en double cursus, maîtrisant le C, C++ et les environnements UNIX."</p>
		  
		  <div className="contact-info">
			<a href="mailto:santi.fuentes.llanos@gmail.com">Email</a> | 
			<a href="https://github.com/Devilijho"> Github</a> |   
			<a href="https://linkedin.com/in/santiago-fuentes-llanos-b08366283"> Linkedin</a> | 
			<span> 📱 07 79 73 74 19</span> | 
			<span> 📍 Bures-sur-Yvette, France</span>
		  </div>
		</div>
	  </div>

	  <div className="formation-section">
		<h3>Formation</h3>
		
		<div className="formation-item">
		  <div className="item-header">
			<strong>BUT Informatique – Université Paris-Saclay (IUT d'Orsay)</strong>
			<span className="date-tag">2025 – En cours</span>
		  </div>
		  <p>Parcours A : Réalisation d'applications</p>
		</div>
		
		<div className="formation-item">
		  <div className="item-header">
			<strong>École 42 – Paris</strong>
			<span className="date-tag">2024 – En cours</span>
		  </div>
			<p>Formation d'excellence en informatique, basée sur le peer-learning</p>
		</div>

		<div className="formation-item">
		  <div className="item-header">
			<strong>Baccalauréat Général – Mention "Bien"</strong>
			<span className="date-tag">Juin 2025</span>
		  </div>
		  <p>Spécialités : Mathématiques et NSI | Lycée Émile Dubois, Paris</p>
		</div>
	  </div>
	</header>
  );
};

export default Header;
