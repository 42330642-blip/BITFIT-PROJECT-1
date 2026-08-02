import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Workouts from './pages/Workouts.jsx'
import Plans from './pages/Plans.jsx'
import Nutrition from './pages/Nutrition.jsx'
import Contact from './pages/Contact.jsx'

Function App() {
  return (
    <BrowserRouter>
      <div className="site-wrap">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
