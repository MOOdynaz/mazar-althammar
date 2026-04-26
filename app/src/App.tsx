import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Videos from './pages/Videos'
import Articles from './pages/Articles'
import Gallery from './pages/Gallery'
import Departments from './pages/Departments'
import Publications from './pages/Publications'

// تصحيح مسار الاستيراد ليتطابق مع اسم الملف الفعلي (Architecture بحرف كبير)
import Architecture from './pages/Architecture' 

function App() {
  const location = useLocation(); 

  return (
    <div className="min-h-screen bg-[#05140d]">
      <Navbar />
      
      {/* AnimatePresence لإدارة حركات الدخول والخروج بين الصفحات */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/publications" element={<Publications />} />
          
          {/* مسار صفحة عمارة المزار */}
          <Route path="/architecture" element={<Architecture />} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
    </div>
  )
}

export default App