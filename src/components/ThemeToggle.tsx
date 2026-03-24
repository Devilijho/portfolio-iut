import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		if (isDark) {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
	}, [isDark]);

	return (
		<button
			onClick={() => setIsDark(!isDark)}
			style={{
				position: 'fixed',
				top: '25px',
				right: '25px',
				padding: '10px 18px',
				borderRadius: '30px',
				border: '1px solid var(--border)',
				backgroundColor: 'var(--panel)',
				color: 'var(--accent)',
				cursor: 'pointer',
				fontWeight: '600',
				fontSize: '0.9rem',
				zIndex: 9999,
				boxShadow: 'var(--shadow)',
				transition: 'all 0.2s ease',
				display: 'flex',
				alignItems: 'center',
				gap: '8px',
			}}
			onMouseOver={(e) =>
				(e.currentTarget.style.transform = 'scale(1.05)')
			}
			onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
		>
			{isDark ? 'Mode Clair' : 'Mode Sombre'}
		</button>
	);
};

export default ThemeToggle;
