import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'
import Skills from './sections/Skills'
import About from './sections/About'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

import './style/style.css'
import './style/animations.css'

function App() {
	return (
		<div className="font-['space-grotesk'] bg-space-100 text-white overflow-x-hidden">
			<BackgroundEffects />

			<div className='relative z-10'>
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</div>
	)
}

export default App
