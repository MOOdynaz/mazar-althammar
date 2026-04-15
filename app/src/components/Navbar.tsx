import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Youtube, Facebook } from 'lucide-react'

// استيراد الشعار من مجلد الأصول
import mazarLogo from '../assets/images/logo.png'

const navItems = [
  { name: 'الرئيسية', path: '/' },
  { name: 'نبذة عن ميثم التمار', path: '/about' },
  { name: 'الفيديوهات', path: '/videos' },
  { name: 'المقالات', path: '/articles' },
  { name: 'معرض الصور', path: '/gallery' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#05140d]/90 backdrop-blur-lg shadow-2xl border-b border-[#c9a227]/20 py-1'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identity Section */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              {/* هالة ضوئية خلف الشعار تظهر عند التمرير */}
              <div className="absolute -inset-1 bg-[#c9a227]/30 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <img 
                src={mazarLogo} 
                alt="Logo" 
                className="relative w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold gold-gradient leading-none tracking-tight">
                مزار ميثم التمار
              </h1>
              <p className="text-[9px] sm:text-[10px] text-white/50 font-medium tracking-widest mt-1 uppercase">
                الأمانة العامة للمزارات الشيعية الشريفة
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  location.pathname === item.path
                    ? 'bg-[#c9a227] text-[#05140d] shadow-lg shadow-[#c9a227]/20'
                    : 'text-white/70 hover:text-[#c9a227] hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Icons & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3 ml-4 border-l border-white/10 pl-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600/20 hover:text-red-500 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600/20 hover:text-blue-500 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 rounded-xl bg-[#c9a227]/10 flex items-center justify-center border border-[#c9a227]/20 text-[#c9a227] hover:bg-[#c9a227]/20 transition-all shadow-inner"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="lg:hidden bg-[#05140d] border-t border-[#c9a227]/20 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-6 py-4 rounded-2xl text-lg font-medium transition-all ${
                      location.pathname === item.path
                        ? 'bg-[#c9a227] text-[#05140d] shadow-xl'
                        : 'text-white/70 hover:bg-white/5 hover:text-[#c9a227] border border-transparent hover:border-[#c9a227]/20'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex justify-center gap-6 pt-6 mt-6 border-t border-white/5">
                <Youtube className="w-6 h-6 text-red-500" />
                <Facebook className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}