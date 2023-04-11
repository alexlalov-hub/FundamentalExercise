import './App.css'
import EscapeRoom from './components/EscapeRoom/EscapeRoom'
import Form from './components/Form/Form'
import Hero from './components/HeroSection/Hero'
import NavBar from './components/NavBar/NavBar'
import Program from './components/Program/Program'
import Questions from './components/Questions/Questions'
import Reservation from './components/Reservation/Reservation'

function App() {

	return (
		<>
			<NavBar />
			<Hero />
			<EscapeRoom />
			<Program />
			<Questions />
			<Reservation />
			<Form />
		</>
	)
}

export default App
