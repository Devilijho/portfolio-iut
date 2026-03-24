import React from 'react';

interface LanguageSkill {
  language: string;
  level: string;
  description: string;
}

const Skills: React.FC = () => {
	const techSkills = [
	{ category: "Langages & Programmation", items: ["C", "C++", "Java", "C#", "TypeScript", "JavaScript"] },
	{ category: "Web & Frameworks", items: ["React", "Vite", "Node.js", "HTML5/CSS3"] },
	{ category: "Bases de données", items: ["SQL", "MariaDB", "Oracle (SQL Plus)"] },
	{ category: "Systèmes & DevOps", items: ["Linux (UNIX)", "Docker", "Git/GitHub", "VirtualBox", "Shell Bash"] }
  ];

  const languages: LanguageSkill[] = [
	{ language: "Espagnol", level: "Langue Maternelle", description: "Usage quotidien et professionnel" },
	{ language: "Anglais", level: "C1", description: "Niveau avancé - Autonome en milieu professionnel" },
	{ language: "Français", level: "B2", description: "Niveau intermédiaire avancé - Usage professionnel" }
  ];
  
  const softSkills = [
	  { name: "Autonomie & Auto-formation", desc: "Capacité à monter en compétence seul" },
	  { name: "Travail d'équipe (Peer-learning)", desc: "Collaboration active sur des projets complexes." },
	  { name: "Résolution de problèmes", desc: "Approche analytique et persévérante face aux bugs." },
	  { name: "Adaptabilité", desc: "Gestion simultanée de deux cursus exigeants (IUT & 42)." }
	];

  return (
	<section id="skills">
	  <h2>Compétences</h2>

	<div className="skills-grid">
		<h3>Informatiques</h3>
		{techSkills.map((skillGroup) => (
		  <div key={skillGroup.category} style={{ marginBottom: '15px' }}>
			<strong>{skillGroup.category}:</strong>
			<div style={{ marginTop: '5px' }}>
			  {skillGroup.items.map(item => (
				<span key={item} className="tag">{item}</span>
			  ))}
			</div>
		  </div>
		))}
	</div>

	<div className="languages-section" style={{ marginTop: '20px' }}>
		<h3>Linguistiques</h3>
		<table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
		  <thead>
			<tr style={{ borderBottom: '1px solid #444' }}>
			  <th style={{ padding: '8px' }}>Langue</th>
			  <th style={{ padding: '8px' }}>Niveau</th>
			  <th style={{ padding: '8px' }}>Description</th>
			</tr>
		  </thead>
		  <tbody>
			{languages.map((lang) => (
			  <tr key={lang.language} style={{ borderBottom: '1px solid #222' }}>
				<td style={{ padding: '8px' }}>{lang.language}</td>
				<td style={{ padding: '8px' }}>
				  <span style={{ color: '#bb86fc', fontWeight: 'bold' }}>{lang.level}</span>
				</td>
				<td style={{ padding: '8px', fontSize: '0.9rem', color: '#aaa' }}>{lang.description}</td>
			  </tr>
			))}
		  </tbody>
		</table>
	</div>
	
	<div className="soft-skills-section" style={{ marginTop: '20px' }}>
	  <h3>Soft Skills (Compétences Humaines)</h3>
	  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
		{softSkills.map((ss) => (
		  <div key={ss.name} className="soft-skill-card" style={{ 
			background: '#161b22', 
			padding: '12px', 
			borderRadius: '8px', 
			border: '1px solid #30363d' 
		  }}>
			<strong style={{ color: '#58a6ff' }}>{ss.icon} {ss.name}</strong>
			<p style={{ margin: '5px 0 0 0', fontSize: '0.85rem', color: '#8b949e' }}>{ss.desc}</p>
		  </div>
		))}
	  </div>
	</div>
	</section>
  );
};

export default Skills;
