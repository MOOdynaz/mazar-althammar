import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Eye, Clock, Search, X, Youtube } from 'lucide-react'

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'biography', name: 'السيرة' },
  { id: 'tafsir', name: 'التفسير' },
  { id: 'history', name: 'التاريخ' },
  { id: 'lectures', name: 'محاضرات' },
]

const videos = [
  {
    id: 1,
    youtubeId: 'tnICzO7wONI',
    title: 'استشهاد ميثم التمار || الشيخ الدكتور احمد الوائلي',
    description: 'من على جذع النخلة مصلوب ومقطع الاطراف وينادي "تعالوا احدثكم عن علي"',
    duration: '4:19',
    views: '416k',
    category: 'biography',
    date: '2020-08-12',
  },
  {
    id: 2,
    youtubeId: 'WA_XHuZSWeo',
    title: 'حُب الصحابي ميثم التمار (رض) للأمام علي (عليه السلام)',
    description: 'الشيخ زمان الحسناوي يتحدث عن عشق ميثم التمار مصلوباً في حب علي',
    duration: '3:09',
    views: '4K',
    category: 'biography',
    date: '2024-02-10',
  },
  {
    id: 3,
    youtubeId: 'M1rmLxkFIuo',
    title: 'شجاعة ميثم التمار في قصر ابن مرجانه وعشقه للإمام علي (ع)',
    description: 'مشهد تمثيلي يجسد ثبات ميثم التمار أمام الطاغية عبيد الله بن زياد',
    duration: '6:45',
    views: '4K',
    category: 'history',
    date: '2023-02-10',
  },
  {
    id: 4,
    youtubeId: 'guVlFfO5sbg',
    title: 'قصة حياة ميثم التمار - برنامج سيرة السابقين',
    description: 'سماحة الشيخ عقيل الحمداني يستعرض السيرة الكاملة لميثم التمار',
    duration: '10:45',
    views: '4K',
    category: 'biography',
    date: '2023-02-10',
  },
  {
    id: 5,
    youtubeId: 'uLD70gMCCVg',
    title: 'حديث العشق - ميثم التمار والامام علي عليه السلام',
    description: 'تأملات في العلاقة الروحية والعلمية بين أمير المؤمنين وتلميذه الوفي ميثم',
    duration: '14:15',
    views: '4K',
    category: 'history',
    date: '2023-02-10',
  },
]

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filteredVideos = videos.filter((video) => {
    const matchesCategory = activeCategory === 'all' || video.category === activeCategory
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         video.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen pt-20 bg-[#05140d]">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium mb-6">
              المكتبة المرئية
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gold-gradient">فيديوهات ميثم التمار</span>
            </h1>
          </motion.div>

          {/* Search & Categories */}
          <div className="max-w-4xl mx-auto mb-12 space-y-8">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#c9a227]" />
              <input
                type="text"
                placeholder="ابحث عن محاضرة، سيرة، أو مشهد..."
                className="w-full pr-12 pl-6 py-4 rounded-2xl bg-white/5 border border-[#c9a227]/20 text-white focus:border-[#c9a227] outline-none transition-all placeholder:text-white/30"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 rounded-full border transition-all text-sm font-medium ${
                    activeCategory === cat.id 
                    ? 'bg-[#c9a227] border-[#c9a227] text-[#05140d]' 
                    : 'border-[#c9a227]/30 text-[#c9a227] hover:bg-[#c9a227]/10'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card group cursor-pointer overflow-hidden rounded-2xl border border-[#c9a227]/10 hover:border-[#c9a227]/40 transition-all shadow-xl"
                onClick={() => setSelectedVideo(video.youtubeId)}
              >
                <div className="relative aspect-video">
                  <img 
                    src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#c9a227] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-[#05140d] fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 rounded text-[10px] text-white flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-[#c9a227]" /> {video.duration}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#c9a227] mb-2 line-clamp-1 group-hover:text-[#e5c035] transition-colors">{video.title}</h3>
                  <p className="text-white/60 text-xs line-clamp-2 mb-4 leading-relaxed">{video.description}</p>
                  <div className="flex items-center justify-between text-[10px] text-white/40 border-t border-white/5 pt-4">
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3 text-[#c9a227]" /> {video.views} مشاهدة</span>
                    <span className="flex items-center gap-1"><Youtube className="w-3 h-3 text-red-500" /> YouTube</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(201,162,39,0.2)] border border-[#c9a227]/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#c9a227] text-[#05140d] rounded-full hover:rotate-90 transition-all duration-300 shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>

              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}