import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage'

function App() {
	return (
		<div className='flex flex-col'>
			<BrowserRouter>
				<Navbar></Navbar>
				<Routes>
					<Route index element={<LandingPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
