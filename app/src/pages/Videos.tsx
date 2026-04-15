import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Eye, Clock, Search } from 'lucide-react'

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
    title: 'سيرة ميثم التمار - الجزء الأول',
    description: 'يستعرض هذا الفيديو سيرة الصحابي الجليل ميثم بن يحيى التمار رضي الله عنه',
    duration: '15:30',
    views: '12.5K',
    category: 'biography',
    date: '2025-03-15',
  },
  {
    id: 2,
    title: 'تفسير ميثم التمار للقرآن الكريم',
    description: 'شرح تفصيلي لطريقة ميثم التمار في تفسير القرآن الكريم بالتأويل',
    duration: '22:45',
    views: '8.3K',
    category: 'tafsir',
    date: '2025-03-12',
  },
  {
    id: 3,
    title: 'ميثم التمار وعلي بن أبي طالب',
    description: 'العلاقة بين ميثم التمار وأمير المؤمنين علي بن أبي طالب عليه السلام',
    duration: '18:20',
    views: '15.1K',
    category: 'history',
    date: '2025-03-10',
  },
  {
    id: 4,
    title: 'استشهاد ميثم التمار',
    description: 'قصة استشهاد ميثم التمار على يد عبيد الله بن زياد',
    duration: '25:10',
    views: '20.3K',
    category: 'history',
    date: '2025-03-08',
  },
  {
    id: 5,
    title: 'محاضرة: منزلة ميثم التمار في الإسلام',
    description: 'محاضرة علمية عن منزلة الصحابي الجليل ميثم التمار في الإسلام',
    duration: '45:00',
    views: '6.7K',
    category: 'lectures',
    date: '2025-03-05',
  },
  {
    id: 6,
    title: 'سيرة ميثم التمار - الجزء الثاني',
    description: 'الجزء الثاني من سيرة ميثم التمار رضي الله عنه',
    duration: '17:45',
    views: '9.2K',
    category: 'biography',
    date: '2025-03-01',
  },
]

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredVideos = videos.filter((video) => {
    const matchesCategory = activeCategory === 'all' || video.category === activeCategory
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium mb-6">
              مكتبة الفيديوهات
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gold-gradient">فيديوهات ميثم التمار</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              شاهد الفيديوهات والمحاضرات عن سيرة الصحابي الجليل ميثم بن يحيى التمار
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <div className="relative flex-1">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="ابحث في الفيديوهات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-[#c9a227]/50"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#c9a227] text-[#0d3322]'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card overflow-hidden card-hover group cursor-pointer"
              >
                <div className="relative aspect-video bg-gradient-to-br from-[#1a5f3f] to-[#0d3322] flex items-center justify-center">
                  <Play className="w-16 h-16 text-[#c9a227]/50" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-[#c9a227] flex items-center justify-center">
                      <Play className="w-6 h-6 text-[#0d3322] mr-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-black/70 text-white text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-xs">
                      {categories.find(c => c.id === video.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-[#c9a227] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2 mb-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-white/50 text-sm">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {video.views}
                    </span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                <Search className="w-10 h-10 text-white/30" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">لا توجد نتائج</h3>
              <p className="text-white/60">جرب البحث بكلمات مختلفة</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
