import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';

// Simple sub-component for Ambitions to keep App.tsx clean
const Ambitions = () => (
  <section>
	<h2>Projet Personnel et Professionnel (PPP)</h2>
	<div>
	  <h4>Court terme</h4>
	  <p>Validation du Semestre 2 à l'IUT d'Orsay et obtention d'un stage technique.</p>
	  
	  <h4>Moyen terme</h4>
	  <p>Obtention du BUT Informatique avec une spécialisation en [A remplir].</p>
	  
	  <h4>Long terme</h4>
	  <p>Poursuite d'études en école d'ingénieur ou insertion dans la vie active en tant que [Poste].</p>
	</div>
  </section>
);

const Hobbies = () => (
  <section>
	<h2>Centres d’intérêt & Passions</h2>
	<ul>
	  <li><strong>Sport :</strong> [Précisez : années, niveau, club]</li>
	  <li><strong>Jeux Vidéo :</strong> [Précisez : type, niveau, depuis quand]</li>
	  <li><strong>Lecture :</strong> [Précisez : genre littéraire, auteurs préférés]</li>
	</ul>
  </section>
);

function App() {
  return (
	<div className="app-container">
	  <Header />
	  
	  <Skills />
	  
	  <Projects />
	  
	  <Ambitions />
	  
	  <Hobbies />

	  {/* Bonus Section to grab those extra 0.5 points */}
	  <section style={{opacity: 0.7}}>
		<h2>Expériences & Bonus</h2>
		<p>Stage de 3ème : [Lieu, Missions]</p>
		<p>Parcours professionnel : [Jobs d'été ou bénévolat]</p>
	  </section>

	  <footer style={{textAlign: 'center', marginTop: '50px', fontSize: '0.8rem'}}>
		<p>© 2026 - Portfolio créé avec React + TypeScript + Vite</p>
	  </footer>
	</div>
  );
}

export default App;
