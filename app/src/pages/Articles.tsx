import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, User, ChevronLeft, Search, Tag } from 'lucide-react'

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'biography', name: 'السيرة' },
  { id: 'history', name: 'التاريخ' },
  { id: 'tafsir', name: 'التفسير' },
  { id: 'virtues', name: 'مرويات ميثم التمار' },
]

const articles = [
  {
    id: 1,
    title: 'ميثم التمار: أول من فسر القرآن بالتأويل',
    excerpt: 'يُعرف ميثم بن يحيى التمار بأنه أول من فسر القرآن الكريم بالتأويل، وقد تتلمذ على يد الإمام علي بن أبي طالب عليه السلام...',
    date: '2025-03-20',
    author: 'الشيخ أحمد المحمدي',
    category: 'biography',
    tags: ['ميثم التمار', 'التفسير', 'التأويل', 'الإمام علي'],
    readTime: '8 دقائق',
  },
  {
    id: 2,
    title: 'استشهاد ميثم التمار على يد عبيد الله بن زياد',
    excerpt: 'استشهد ميثم التمار رضي الله عنه في الكوفة على يد عبيد الله بن زياد، وقد كان صابراً ثابتاً حتى آخر لحظة...',
    date: '2025-03-18',
    author: 'السيد محمد الحسيني',
    category: 'history',
    tags: ['الاستشهاد', 'عبيد الله بن زياد', 'الكوفة'],
    readTime: '6 دقائق',
  },{
    id: 3,
    title: 'عَنْ يَعْقُوبَ بْنِ مِيثَمٍ أَنَّهُ وَجَدَ فِي كِتَابِ أَبِيهِ',
    excerpt: `أَنَّ عَلِيّاً (عَلَيْهِ السَّلاَمُ) قَالَ سَمِعْتُ رَسُولَ اَللَّهِ (صَلَّى اَللَّهُ عَلَيْهِ وَ آلِهِ) يَقُولُ: قَالَ اَللَّهُ عَزَّ وَ جَلَّ: «إِنَّ اَلَّذِينَ آمَنُوا وَ عَمِلُوا اَلصّٰالِحٰاتِ أُولٰئِكَ هُمْ خَيْرُ اَلْبَرِيَّةِ» ثُمَّ اِلْتَفَتَ إِلَى عَلِيٍّ (عَلَيْهِ السَّلاَمُ) فَقَالَ نَعَمْ أَنْتَ يَا عَلِيُّ وَ شِيعَتُكَ وَ مِيعَادُكَ وَ مِيعَادُهُمُ اَلْحَوْضُ غُرّاً مُحَجَّلِينَ مُكَحَّلِينَ مُتَوَّجِينَ. قَالَ: يَعْقُوبُ فَحَدَّثْتُ أَبَا جَعْفَرٍ -الباقر- (عَلَيْهِ السَّلاَمُ) بِهَذَا فَقَالَ: هَكَذَا هُوَ عِنْدَنَا فِي كِتَابِ عَلِيٍّ (عَلَيْهِ السَّلاَمُ)`,
    date: '2025-03-15',
    author: 'البحار:ج٢٧/٦٥ ،تأويل الآيات: ج١ ،تفسير البرهان: ج٥ ،تفسير كنز الدقائق :ج١٤ .',
    category: 'virtues',
    tags: ['أصحاب الإمام علي', 'المنزلة', 'المرويات'],
    readTime: '7 دقائق',
  },
  {
    id: 4,
    title: 'تأويلات ميثم التمار في سورة الفاتحة',
    excerpt: 'يستعرض هذا المقال بعض التأويلات التي ذكرها ميثم التمار في تفسيره لسورة الفاتحة...',
    date: '2025-03-12',
    author: 'الدكتور حسن العلوي',
    category: 'tafsir',
    tags: ['التفسير', 'سورة الفاتحة', 'التأويل'],
    readTime: '10 دقائق',
  },
  {
    id: 5,
    title: 'نشأة ميثم التمار في اليمن',
    excerpt: 'وُلد ميثم بن يحيى التمار في اليمن، ونشأ في بيئة إيمانية متواضعة...',
    date: '2025-03-10',
    author: 'الشيخ أحمد المحمدي',
    category: 'biography',
    tags: ['النشأة', 'اليمن', 'الكوفة'],
    readTime: '5 دقائق',
  },
  {
    id: 6,
    title: 'علاقة ميثم التمار بالإمام الحسين',
    excerpt: 'كان ميثم التمار من الموالين للإمام الحسين عليه السلام، وقد ناصر قضيته...',
    date: '2025-03-08',
    author: 'السيد محمد الحسيني',
    category: 'history',
    tags: ['الإمام الحسين', 'أهل البيت', 'النصرة'],
    readTime: '6 دقائق',
  },
]

export default function Articles() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  if (selectedArticle) {
    return (
      <div className="min-h-screen pt-20">
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 islamic-pattern opacity-20" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-2 text-[#c9a227] hover:text-[#e5c035] transition-colors mb-6"
            >
              <ChevronLeft className="w-5 h-5" />
              العودة للمقالات
            </motion.button>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-sm">
                  {categories.find(c => c.id === selectedArticle.category)?.name}
                </span>
                <span className="flex items-center gap-1 text-white/50 text-sm">
                  <Calendar className="w-4 h-4" />
                  {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1 text-white/50 text-sm">
                  <User className="w-4 h-4" />
                  {selectedArticle.author}
                </span>
              </div>

              <h1 className="text-3xl font-bold mb-6 gold-gradient">{selectedArticle.title}</h1>

              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed mb-4">
                  {selectedArticle.excerpt}
                </p>
                <p className="text-white/80 leading-relaxed mb-4">
تدقيق : محمد اعمير                </p>
                <p className="text-white/80 leading-relaxed mb-4">
                 الشعبة الثقافية
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-sm flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      </div>
    )
  }

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
              المقالات الدينية
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gold-gradient">مقالات ميثم التمار</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              اقرأ المقالات والبحوث الدينية والتاريخية عن سيرة الصحابي الجليل
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="ابحث في المقالات..."
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
            className="flex flex-wrap justify-center gap-2 mb-10"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedArticle(article)}
                className="glass-card p-6 card-hover cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-xs">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="text-white/50 text-xs">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 hover:text-[#c9a227] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-white/60 text-sm line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-white/50 text-sm">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
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
