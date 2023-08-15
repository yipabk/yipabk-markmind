import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
import Landing from './pages/Landing'

function App() {
	return (
		<div className='flex flex-col'>
			<Navbar></Navbar>
			<BrowserRouter>
				<Routes>
					<Route index element={<Landing />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App
