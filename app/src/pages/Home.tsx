import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Play, 
  Image as ImageIcon, 
  ChevronLeft, 
  Calendar, 
  Eye, 
  User, 
  FileText,
  LayoutGrid,
  Library,
  Building,
  Quote 
} from 'lucide-react'

import img21 from '../assets/images/21.jpg'
import img22 from '../assets/images/22.jpg'
import img23 from '../assets/images/23.jpg'
import img24 from '../assets/images/24.jpg'

const quickNav = [
  { path: '/about', label: 'نبذة عن ميثم التمار', icon: User, color: 'bg-amber-500/10' },
  { path: '/departments', label: 'أقسام المزار', icon: LayoutGrid, color: 'bg-blue-500/10' },
  { path: '/architecture', label: 'عمارة المزار', icon: Building, color: 'bg-emerald-500/10' },
  { path: '/publications', label: 'إصدارات المزار', icon: Library, color: 'bg-purple-500/10' },
  { path: '/videos', label: 'الفيديوهات', icon: Play, color: 'bg-red-500/10' },
  { path: '/articles', label: 'المقالات', icon: FileText, color: 'bg-emerald-500/10' },
  { path: '/gallery', label: 'معرض الصور', icon: ImageIcon, color: 'bg-sky-500/10' },
]

const featuredVideos = [
  { id: 1, title: 'زيارة الصحابي الجليل ميثم التمار', youtubeId: 'uwBkiS5Td5k', duration: '15:30', views: '12.5K' },
  { id: 2, title: 'تصوير جوي للمزار الشريف', youtubeId: 'yYBeaWwUve8', duration: '22:45', views: '8.3K' },
  { id: 3, title: 'سماحة الشيخ زمان الحسناوي - ذكرى الاستشهاد', youtubeId: 'VmSYeLDdOyk', duration: '18:20', views: '15.1K' },
]

const latestArticles = [
  { id: 1, title: 'ميثم التمار: أول من فسر القرآن بالتأويل', excerpt: 'يُعرف ميثم بن يحيى التمار بأنه أول من فسر القرآن الكريم بالتأويل...', date: '2025-03-20', category: 'سيرة' },
  { id: 2, title: 'استشهاد ميثم التمار على يد عبيد الله بن زياد', excerpt: 'استشهد ميثم التمار رضي الله عنه في الكوفة صابراً ثابتاً...', date: '2025-03-18', category: 'تاريخ' },
  { id: 3, title: 'مكانة ميثم التمار بين أصحاب الإمام علي', excerpt: 'كان ميثم التمار من أخلص أصحاب الإمام علي بن أبي طالب عليه السلام...', date: '2025-03-15', category: 'فضائل' },
]

const galleryPreview = [
  { id: 1, url: img21, title: 'أروقة المزار' },
  { id: 2, url: img22, title: 'قبة المزار' },
  { id: 3, url: img23, title: 'داخل الحرم' },
  { id: 4, url: img24, title: 'منارة المزار' },
]

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#05140d] text-white overflow-x-hidden text-right pb-10" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#144d34] via-[#05140d] to-black opacity-80" />
        <div className="absolute inset-0 islamic-pattern opacity-[0.05] mix-blend-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a227]/10 text-[#c9a227] text-sm font-medium mb-6 border border-[#c9a227]/20">
              رضي الله عنه
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 font-display">
            <span className="text-[#c9a227] drop-shadow-[0_2px_15px_rgba(201,162,39,0.3)] font-ar">ميثم بن يحيى التمار</span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            الصحابي الجليل وأول من فسر القرآن بالتأويل
          </motion.p>

          {/* كود الموبايل (Grid الأيقونات) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-4 gap-2 sm:hidden max-w-lg mx-auto mb-12 px-1 relative z-50"
          >
            {quickNav.map((item) => (
              <button 
                key={item.path} 
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center justify-center p-2.5 bg-white/5 rounded-xl border border-[#c9a227]/10 active:bg-[#c9a227]/30 transition-all shadow-lg touch-manipulation relative z-50 overflow-hidden select-none group"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <div className="w-9 h-9 rounded-lg bg-[#c9a227]/10 flex items-center justify-center mb-1.5 pointer-events-none group-active:scale-90 transition-transform">
                  <item.icon className="w-4.5 h-4.5 text-[#c9a227]" />
                </div>
                <span className="text-[8px] font-bold text-white/90 leading-tight text-center pointer-events-none">
                  {item.label}
                </span>
              </button>
            ))}
          </motion.div>
          
          {/* كود المتصفح (الأزرار الكبيرة) */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden sm:flex flex-row items-center justify-center gap-5">
            <Link to="/about" className="px-12 py-5 bg-[#c9a227] text-[#05140d] rounded-full font-bold text-xl hover:bg-[#e0b83a] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(201,162,39,0.3)]">
              تعرف على سيرته
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- قسم الرواية الشريفة الجديد --- */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#05140d] to-black/40">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1 rounded-[3rem] bg-gradient-to-tr from-[#c9a227]/20 via-transparent to-[#c9a227]/20 shadow-2xl"
          >
            <div className="relative bg-[#0a1a14] rounded-[2.8rem] p-8 md:p-16 border border-[#c9a227]/10 overflow-hidden">
              {/* أيقونة خلفية زخرفية */}
              <Quote className="absolute top-10 left-10 w-24 h-24 text-[#c9a227]/5 -scale-x-100" />
              
              <div className="relative z-10 space-y-8 text-center md:text-right">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
                  <div className="h-[2px] w-10 bg-[#c9a227]" />
                  <span className="text-[#c9a227] font-bold text-sm tracking-[0.2em] uppercase">رواية الكشي</span>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold leading-relaxed text-white font-display">
                  قال <span className="text-[#c9a227]">مِيثَم التمار:</span> دعاني أمير المؤمنين (عليه السلام) وقال: 
                  <span className="block mt-4 text-white/80 text-xl md:text-2xl font-medium italic">
                    "كيف أنت يا ميثم إذا دعاك دعي بني أُمية عبيد الله بن زياد إلى البراءة منّي؟"
                  </span>
                </h3>

                <p className="text-lg md:text-2xl text-white/60 leading-loose border-r-4 border-[#c9a227]/30 pr-6 mr-4 italic">
                  فقال: يا أمير المؤمنين، أنا والله لا أبرأ منك، قال: إذًا والله يقتلك ويصلبك، قلت: أصبر فذاك في الله قليل، فقال:
                </p>

                <div className="pt-8">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="inline-block relative"
                  >
                    <div className="absolute -inset-4 bg-[#c9a227]/20 blur-xl rounded-full opacity-50" />
                    <div className="relative bg-gradient-to-l from-[#c9a227] to-[#e5c035] px-10 py-6 rounded-2xl">
                      <span className="text-2xl md:text-5xl font-black text-[#05140d] drop-shadow-sm">
                        "يا ميثم إذًا تكون معي في درجتي"
                      </span>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-2 text-white/30 text-xs justify-center md:justify-start">
                  <Library className="w-4 h-4" />
                  المصدر: كتاب الرجال للشيخ الكشي
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* فيديوهات مميزة */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 border-r-4 border-[#c9a227] pr-6 flex-row-reverse">
            <div className="text-right w-full">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-ar text-right">فيديوهات مميزة</h2>
              <p className="text-white/50 text-lg text-right">شاهد أهم الفيديوهات عن سيرة ميثم التمار</p>
            </div>
            <Link to="/videos" className="hidden sm:flex items-center gap-2 text-[#c9a227] hover:underline transition-all whitespace-nowrap">
              عرض الكل <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-right">
            {featuredVideos.map((video, index) => (
              <motion.div key={video.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-[#0a261a] rounded-2xl overflow-hidden border border-white/5 group hover:border-[#c9a227]/30 transition-all shadow-2xl">
                <div className="relative aspect-video bg-black">
                  <iframe className="absolute top-0 left-0 w-full h-full border-0" src={`https://www.youtube.com/embed/${video.youtubeId}`} title={video.title} allowFullScreen></iframe>
                </div>
                <div className="p-6 text-right">
                  <h3 className="text-white font-bold mb-4 line-clamp-1 group-hover:text-[#c9a227] transition-colors text-lg">{video.title}</h3>
                  <div className="flex items-center justify-between text-white/40 text-sm">
                    <span className="bg-black/40 px-3 py-1 rounded-lg text-xs font-mono">{video.duration}</span>
                    <span className="flex items-center gap-1.5">{video.views} <Eye className="w-4 h-4" /></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* باقي الأقسام مثل المقالات ومعرض الصور يمكن إكمالها هنا بنفس الطريقة */}
    </div>
  )
}