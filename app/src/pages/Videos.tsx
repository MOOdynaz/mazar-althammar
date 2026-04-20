import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Eye, Clock, Search, X, Youtube } from 'lucide-react'

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'biography', name: 'السيرة والفضائل' },
  { id: 'history', name: 'التاريخ والاستشهاد' },
  { id: 'shrine', name: 'المزار الشريف' },
]

const videos = [
  {
    id: 1,
    youtubeId: 'tnICzO7wONI',
    title: 'استشهاد ميثم التمار || الشيخ الدكتور احمد الوائلي',
    description: 'وصف مؤثر للحظات استشهاد ميثم التمار وهو ينادي بفضائل علي من على جذع النخلة',
    duration: '4:19',
    views: '416k',
    category: 'history',
    date: '2020-08-12',
  },
  {
    id: 2,
    youtubeId: 'ftw93UiSefg',
    title: 'هل قاتل ميثم التمار مع الإمام علي؟',
    description: 'سماحة الشيخ علي الكوراني يجيب عن دور ميثم التمار الجهادي وصحبته لأمير المؤمنين',
    duration: '1:24',
    views: '1k',
    category: 'biography',
    date: '2021-11-24',
  },
  {
    id: 3,
    youtubeId: 'nczYTh0RRN4',
    title: 'ميثم التمار من أعظم أصحاب الإمام علي ع',
    description: 'الملا محمود الساعي يستعرض عظمة شخصية ميثم ومنزلته عند النبي (ص) وأهل بيته',
    duration: '2:52',
    views: '5k',
    category: 'biography',
    date: '2015-08-05',
  },
  {
    id: 4,
    youtubeId: 'zdqg-r0S34w',
    title: 'شباك العقيدة (شباك الصحابي ميثم التمار)',
    description: 'وثائقي من إنتاج العتبة العلوية المقدسة حول صناعة وافتتاح الشباك الجديد للمرقد الشريف',
    duration: '22:02',
    views: '11k',
    category: 'shrine',
    date: '2017-03-17',
  },
  {
    id: 5,
    youtubeId: 'CQo2kgPlDec',
    title: 'مرقد الشهيد ميثم التمار في الكوفة المعظمة',
    description: 'جولة تعريفية في أروقة المرقد الطاهر وتفاصيل عمارته وتاريخه وموقعه في الكوفة',
    duration: '3:43',
    views: '18k',
    category: 'shrine',
    date: '2017-05-16',
  },
  {
    id: 6,
    youtubeId: 'WPkb7n1oxtw',
    title: 'معالم دينية - مرقد ميثم التمار',
    description: 'حلقة خاصة من برنامج معالم تستعرض الأنشطة الثقافية والخدمية والجهادية للمزار الشريف',
    duration: '29:41',
    views: '1k',
    category: 'shrine',
    date: '2022-11-02',
  },
  {
    id: 7,
    youtubeId: 'dwU72QaVexc',
    title: 'شواهد مع علاء الحسين | مرقد ميثم التمار',
    description: 'علاء الحسين يسلط الضوء على قصة تسمية ميثم ومنزلته في حواريي الإمام علي (ع)',
    duration: '7:12',
    views: '1k',
    category: 'shrine',
    date: '2025-03-22',
  },
  {
    id: 8,
    youtubeId: 'pz67X7DUgYY',
    title: 'مرقد الصحابي الجليل ميثم التمار في الكوفة',
    description: 'تقرير عن النهضة العمرانية والنشاطات القرآنية والفكرية المقامة في المرقد الشريف',
    duration: '7:53',
    views: '1k',
    category: 'shrine',
    date: '2023-06-15',
  },
  {
    id: 9,
    youtubeId: 'WA_XHuZSWeo',
    title: 'حُب الصحابي ميثم التمار (رض) للأمام علي',
    description: 'الشيخ زمان الحسناوي يتحدث عن عشق ميثم التمار مصلوباً في حب علي',
    duration: '3:09',
    views: '4K',
    category: 'biography',
    date: '2024-02-10',
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
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3 text-[#c9a227]" /> {video.views}</span>
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