import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, BookOpen, Image as ImageIcon, ChevronLeft, Calendar, Eye } from 'lucide-react'

const featuredVideos = [
  {
    id: 1,
    title: 'زيارة الصحابي الجليل ميثم التمار',
    youtubeId: 'uwBkiS5Td5k',
    duration: '15:30',
    views: '12.5K',
  },
  {
    id: 2,
    title: 'تصوير جوي للمزار الشريف',
    youtubeId: 'yYBeaWwUve8', 
    duration: '22:45',
    views: '8.3K',
  },
  {
    id: 3,
    title: 'سماحة الشيخ زمان الحسناوي - ذكرى الاستشهاد',
    youtubeId: 'VmSYeLDdOyk',
    duration: '18:20',
    views: '15.1K',
  },
]

const latestArticles = [
  {
    id: 1,
    title: 'ميثم التمار: أول من فسر القرآن بالتأويل',
    excerpt: 'يُعرف ميثم بن يحيى التمار بأنه أول من فسر القرآن الكريم بالتأويل، وقد تتلمذ على يد الإمام علي عليه السلام...',
    date: '2025-03-20',
    category: 'سيرة',
  },
  {
    id: 2,
    title: 'استشهاد ميثم التمار على يد عبيد الله بن زياد',
    excerpt: 'استشهد ميثم التمار رضي الله عنه في الكوفة صابراً ثابتاً حتى آخر لحظة في حب أمير المؤمنين...',
    date: '2025-03-18',
    category: 'تاريخ',
  },
  {
    id: 3,
    title: 'مكانة ميثم التمار بين أصحاب الإمام علي',
    excerpt: 'كان ميثم التمار من أخلص أصحاب الإمام علي بن أبي طالب عليه السلام، وقد أخذ عنه علوماً جمة...',
    date: '2025-03-15',
    category: 'فضائل',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05140d] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* الخلفية المتدرجة الفخمة */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#144d34] via-[#05140d] to-black opacity-80" />
        <div className="absolute inset-0 islamic-pattern opacity-[0.05] mix-blend-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a227]/10 text-[#c9a227] text-sm font-medium mb-6 border border-[#c9a227]/20">
              رضي الله عنه
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
          >
            <span className="text-[#c9a227] drop-shadow-[0_2px_15px_rgba(201,162,39,0.3)]">ميثم بن يحيى التمار</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white font-light mb-4 max-w-3xl mx-auto"
          >
            الصحابي الجليل وأول من فسر القرآن بالتأويل
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/70 mb-12 max-w-2xl mx-auto text-lg"
          >
            تلميذ أمير المؤمنين عليه السلام، ومن أعلام التفسير والتأويل في الإسلام
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link 
              to="/about" 
              className="w-full sm:w-auto px-10 py-4 bg-[#c9a227] text-[#05140d] rounded-full font-bold text-lg hover:bg-[#e0b83a] transition-all transform hover:scale-105 shadow-xl"
            >
              تعرف على سيرته
            </Link>
            <Link 
              to="/videos" 
              className="w-full sm:w-auto px-10 py-4 border border-[#c9a227]/40 text-white rounded-full font-bold text-lg hover:bg-[#c9a227]/10 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5 text-[#c9a227]" />
              شاهد الفيديوهات
            </Link>
          </motion.div>
        </div>
        
        {/* سهم النزول */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <div className="w-6 h-10 border-2 border-[#c9a227]/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#c9a227] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 border-r-4 border-[#c9a227] pr-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">فيديوهات مميزة</h2>
              <p className="text-white/50 text-lg">شاهد أهم الفيديوهات عن سيرة ميثم التمار</p>
            </div>
            <Link to="/videos" className="hidden sm:flex items-center gap-2 text-[#c9a227] hover:underline transition-all">
              عرض الكل <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0a261a] rounded-2xl overflow-hidden border border-white/5 group hover:border-[#c9a227]/30 transition-all shadow-2xl"
              >
                <div className="relative aspect-video bg-black">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="p-6">
                  <h3 className="text-white font-bold mb-4 line-clamp-1 group-hover:text-[#c9a227] transition-colors text-right text-lg">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-white/40 text-sm">
                    <span className="bg-black/40 px-3 py-1 rounded-lg text-xs font-mono">
                      {video.duration}
                    </span>
                    <span className="flex items-center gap-1.5 flex-row-reverse">
                      <Eye className="w-4 h-4" />
                      {video.views}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05140d]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 border-r-4 border-[#c9a227] pr-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">أحدث المقالات</h2>
              <p className="text-white/50 text-lg">اقرأ المقالات الدينية والتاريخية</p>
            </div>
            <Link to="/articles" className="hidden sm:flex items-center gap-2 text-[#c9a227] hover:underline transition-all">
              عرض الكل <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0a261a]/50 rounded-2xl p-6 border border-white/5 hover:bg-[#0a261a] transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-lg bg-[#c9a227]/10 text-[#c9a227] text-xs font-bold">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-white/30 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c9a227] transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-white/50 text-sm line-clamp-3 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <Link to="/articles" className="text-[#c9a227] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  اقرأ المزيد <ChevronLeft className="w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 border-r-4 border-[#c9a227] pr-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">معرض الصور</h2>
              <p className="text-white/50 text-lg">لقطات من المزار الشريف</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-2xl overflow-hidden bg-[#0a261a] flex items-center justify-center border border-white/5 group"
              >
                <ImageIcon className="w-12 h-12 text-[#c9a227]/20 group-hover:text-[#c9a227]/50 transition-all" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-4">
                  <span className="text-white text-sm font-bold">مشاهدة الصورة</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#c9a227]/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-7xl text-[#c9a227]/30 font-serif mb-8">"</div>
            <blockquote className="text-2xl sm:text-4xl text-white font-medium mb-8 leading-snug italic px-4">
              يا ميثم، إنك لتعلم بما في هذا الكتاب من التأويل، وإنك لعلى فرج من الله
            </blockquote>
            <cite className="text-[#c9a227] text-xl font-bold not-italic border-t border-[#c9a227]/20 pt-4 inline-block">
              — الإمام علي بن أبي طالب عليه السلام
            </cite>
          </motion.div>
        </div>
      </section>
    </div>
  )
}