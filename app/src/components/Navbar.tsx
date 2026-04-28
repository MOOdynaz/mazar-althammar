import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Youtube, Facebook } from 'lucide-react'

// استيراد الشعار
import mazarLogo from '../assets/images/logo.png'

const navItems = [
  { name: 'الرئيسية', path: '/' },
  { name: 'نبذة عن ميثم التمار', path: '/about' },
  { name: 'أقسام المزار', path: '/departments' },
  { name: 'عمارة المزار', path: '/architecture' },
  { name: 'إصدارات المزار', path: '/publications' },
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
      // تم تعديل حساسية النزول لضمان سرعة استجابة القائمة
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // إغلاق القائمة عند تغيير الصفحة
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // منع التمرير في الخلفية عند فتح قائمة الموبايل
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled || isOpen
            ? 'bg-[#05140d]/95 backdrop-blur-lg shadow-2xl border-b border-[#c9a227]/20 py-1'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo & Identity Section */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0 relative z-[110]">
              <div className="relative">
                <div className="absolute -inset-1 bg-[#c9a227]/30 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <img 
                  src={mazarLogo} 
                  alt="Logo" 
                  className="relative w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-2xl font-bold gold-gradient leading-none tracking-tight font-display">
                  مزار ميثم التمار
                </h1>
                <p className="text-[7px] sm:text-[10px] text-white/50 font-medium tracking-widest mt-1 uppercase">
                  الأمانة العامة للمزارات الشيعية الشريفة
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5 bg-white/5 px-1.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-2.5 xl:px-4 py-2 text-[11px] xl:text-[13px] font-bold transition-all duration-300 rounded-full whitespace-nowrap ${
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
            <div className="flex items-center gap-2 relative z-[110]">
              <div className="hidden xl:flex items-center gap-3 ml-2 border-l border-white/10 pl-4">
                <a href="https://www.youtube.com/@mazar.altammar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600/20 hover:text-red-500 transition-all duration-300">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="https://web.facebook.com/mazar.altammar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600/20 hover:text-blue-500 transition-all duration-300">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>

              {/* Mobile Menu Button - تم تحسينه ليكون فوق أي عنصر آخر */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-11 h-11 rounded-xl bg-[#c9a227]/10 flex items-center justify-center border border-[#c9a227]/20 text-[#c9a227] hover:bg-[#c9a227]/20 transition-all shadow-lg pointer-events-auto"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Full Screen */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="lg:hidden fixed inset-0 bg-[#05140d] z-[90] flex flex-col pt-24"
            >
              <div className="absolute inset-0 islamic-pattern opacity-5 pointer-events-none" />
              <div className="px-6 py-6 space-y-3 overflow-y-auto relative z-10">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-4 rounded-2xl text-lg font-bold transition-all shadow-sm ${
                        location.pathname === item.path
                          ? 'bg-[#c9a227] text-[#05140d] shadow-[#c9a227]/20'
                          : 'text-white/70 bg-white/5 border border-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="flex justify-center gap-8 pt-10 border-t border-[#c9a227]/10 mt-8">
                  <a href="https://www.youtube.com/@mazar.altammar" className="text-[#c9a227]">
                    <Youtube className="w-8 h-8" />
                  </a>
                  <a href="https://web.facebook.com/mazar.altammar" className="text-[#c9a227]">
                    <Facebook className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* طبقة خلفية معتمة عند فتح القائمة لإجبار التركيز على الروابط */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[80] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}