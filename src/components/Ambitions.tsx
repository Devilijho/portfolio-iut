import React from 'react';

const Ambitions: React.FC = () => {
	const plans = [
		{
			term: 'Court Terme (1-2 ans)',
			goal: 'Validation du BUT 2 & Cursus 42',
			details:
				'Mon objectif est de maintenir l’excellence académique à l’IUT tout en progressant dans le Common Core de 42. Je recherche activement une alternance pour mettre mes compétences en C++ et TypeScript au service d’une entreprise innovante.',
		},
		{
			term: 'Moyen Terme (3-5 ans)',
			goal: 'Spécialisation & Diplôme',
			details:
				'Après l’obtention de mon BUT, je souhaite poursuivre en École d’Ingénieurs. Je prévois de me spécialiser en Intelligence Artificielle ou en Cybersécurité, des domaines qui me passionnent.',
		},
		{
			term: 'Long Terme (5 ans+)',
			goal: 'Expertise & Leadership',
			details:
				'Je m’imagine évoluer vers un poste de Lead Developer. Mon but est de concevoir des solutions robustes à grande échelle, idéalement dans un environnement international ou une scale-up technologique.',
		},
	];

	return (
		<section id="ambitions">
			<h2>Ambitions (Projet Personnel)</h2>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr',
					gap: '20px',
					alignItems: 'stretch',
				}}
			>
				{plans.map((p, index) => (
					<div
						key={index}
						className="formation-item"
						style={{
							margin: 0,
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<strong
							style={{ color: '#58a6ff', fontSize: '1.1rem' }}
						>
							{p.term}
						</strong>
						<p
							style={{
								margin: '8px 0',
								fontWeight: 'bold',
								color: '#c9d1d9',
								fontSize: '0.9rem',
							}}
						>
							{p.goal}
						</p>
						<p
							style={{
								margin: 0,
								fontSize: '0.85rem',
								color: '#8b949e',
								lineHeight: '1.5',
							}}
						>
							{p.details}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Ambitions;
