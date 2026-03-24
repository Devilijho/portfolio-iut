import React from 'react';

const Experience: React.FC = () => {
	return (
		<section id="experience">
			<h2>Expérience Professionnelle</h2>

			<div className="formation-item">
				<div className="item-header">
					<strong>Vendeur en ligne – Mimitos Click</strong>
					<span className="date-tag">2022 – 2023</span>
				</div>
				<p
					style={{
						marginTop: '10px',
						fontWeight: '600',
						color: '#58a6ff',
					}}
				>
					Responsable opérationnel E-commerce
				</p>
				<ul
					style={{
						paddingLeft: '20px',
						color: '#8b949e',
						fontSize: '0.9rem',
					}}
				>
					<li>
						Gestion complète de la logistique et de la chaîne
						d'approvisionnement.
					</li>
					<li>
						Mise en place de stratégies de marketing digital pour
						booster la visibilité.
					</li>
					<li>
						Service client et gestion des retours pour assurer la
						satisfaction utilisateur.
					</li>
				</ul>
				<p
					style={{
						fontStyle: 'italic',
						fontSize: '0.85rem',
						color: '#666',
						marginTop: '10px',
					}}
				>
					Cette expérience m'a permis de développer une grande
					autonomie et une rigueur organisationnelle avant de débuter
					mon double cursus.
				</p>
			</div>
		</section>
	);
};

export default Experience;
