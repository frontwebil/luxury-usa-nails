import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PricesPage from './pages/PricesPage'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prices" element={<PricesPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
