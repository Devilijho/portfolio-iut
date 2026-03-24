// src/components/Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  const myProjects = [
	{
	  title: "Portfolio PPP",
	  desc: "Création d'un portfolio professionnel avec React et Vite.",
	  link: "https://github.com/youruser/portfolio-iut",
	  tags: ["React", "TypeScript", "Vite", "Git"]
	},
	{
	  title: "Projet Installation Système",
	  desc: "Configuration d'un environnement sécurisé.",
	  link: "#", // Add your link here
	  tags: ["Linux", "Bash", "Réseau"]
	}
  ];

  return (
	<section>
	  <h2>Projets Réalisés</h2>
	  {myProjects.map((p, i) => (
		<div key={i} style={{ marginBottom: '15px' }}>
		  <h4>{p.title}</h4>
		  <p>{p.desc}</p>
		  <a href={p.link} target="_blank">Lien vers le projet (Preuve)</a>
		  <div>
			{p.tags.map(tag => (
			  <span key={tag} style={{ background: '#eee', margin: '2px', padding: '2px 5px', borderRadius: '4px', fontSize: '0.8em' }}>
				#{tag}
			  </span>
			))}
		  </div>
		</div>
	  ))}
	</section>
  );
};

export default Projects;
