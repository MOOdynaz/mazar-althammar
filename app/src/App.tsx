import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Videos from './pages/Videos'
import Articles from './pages/Articles'
import Gallery from './pages/Gallery'
// استيراد الصفحات الجديدة
import Departments from './pages/Departments'
import Publications from './pages/Publications'

function App() {
  return (
    <div className="min-h-screen bg-[#05140d]">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* المسارات الجديدة التي تمت إضافتها */}
          <Route path="/departments" element={<Departments />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App