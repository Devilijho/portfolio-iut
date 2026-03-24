import React from 'react';

interface Project {
	title: string;
	description: string;
	link: string;
	tags: string[];
}

const Projects: React.FC = () => {
	const projectList: Project[] = [
		{
			title: 'Webserv – École 42',
			description:
				'Développement d’un serveur HTTP/1.1 performant en C++98. Gestion de la multiplexation de ports et des entrées/sorties non-bloquantes.',
			link: 'https://github.com/Devilijho/webserv',
			tags: ['C++', 'Network Programming', 'HTTP', 'UNIX'],
		},
		{
			title: 'Minishell – École 42',
			description:
				'Recréation d’un shell UNIX complet. Gestion des pipes, des redirections et des variables d’environnement.',
			link: 'https://github.com/Devilijho/minishell',
			tags: ['C', 'Shell', 'UNIX Architecture', 'Processes'],
		},
		{
			title: 'Cub3d – École 42',
			description:
				'Moteur de rendu 3D utilisant la technique du Raycasting (inspiré de Wolfenstein 3D). Utilisation intensive de la bibliothèque MiniLibX.',
			link: 'https://github.com/Devilijho/cub3d',
			tags: ['C', 'Raycasting', 'Graphics', 'Maths'],
		},
		{
			title: 'Game Jam – IUT Paris-Saclay',
			description:
				'Création d’un jeu complet en équipe de 36 heures avec le moteur Godot. Focus sur la logique de jeu et la physique.',
			link: 'https://devilijho.itch.io/billing-the-cursor',
			tags: ['Godot', 'Game Design', 'Teamwork', 'Agile'],
		},
	];

	return (
		<section id="projects">
			<h2>Projets Réalisés</h2>
			<div className="projects-grid">
				{projectList.map((project, index) => (
					<div key={index} className="project-card">
						<div className="item-header">
							<h3>{project.title}</h3>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="date-tag"
							>
								Voir le projet
							</a>
						</div>
						<p>{project.description}</p>
						<div style={{ marginTop: '10px' }}>
							{project.tags.map((tag) => (
								<span key={tag} className="tag">
									{tag}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
