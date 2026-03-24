import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Ambitions from './components/Ambitions';
import ThemeToggle from './components/ThemeToggle';

function App() {
	return (
		<div className="app-container">
			<ThemeToggle />

			<Header />

			<Skills />

			<Projects />

			<Experience />

			<Ambitions />

			<footer
				style={{
					textAlign: 'center',
					marginTop: '50px',
					fontSize: '0.8rem',
				}}
			>
				<p>© 2026 - Portfolio créé avec React + TypeScript + Vite</p>
			</footer>
		</div>
	);
}

export default App;
