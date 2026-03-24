// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
	return (
	<header style={{ borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
		<img src="/path-to-your-photo.jpg" alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
	  <h1>NOM Prénom</h1> 
	  <p><em>"Futur développeur passionné par l'architecture logicielle et l'innovation."</em></p>
	  
	  <div>
		<p>📧 email@example.com | 📱 06 00 00 00 00</p>
		<p>Groupe : S2-X</p>
	  </div>

	  <h3>Parcours Scolaire</h3>
	  <ul>
		<li><strong>Baccalauréat [Spécialités]</strong> - Lycée [Nom], [Ville]</li>
		<li>Mention : [Très Bien/Bien]</li>
		<li><strong>BUT Informatique</strong> - IUT d'Orsay (En cours)</li>
	  </ul>
	</header>
  );
};

export default Header;
