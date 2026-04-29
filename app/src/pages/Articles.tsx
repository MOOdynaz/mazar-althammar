import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, User, ChevronLeft, Search, Tag, FileText } from 'lucide-react'

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'biography', name: 'السيرة' },
  { id: 'history', name: 'التاريخ' },
  { id: 'tafsir', name: 'التفسير والعلوم' },
  { id: 'virtues', name: 'مرويات وفضائل' },
]

const articles = [
  {
    id: 1,
    title: 'حديثنا صعب مستصعب..',
    excerpt: `ابن الشريفة الواسطي دون في كتابه(اللبات) أن ميثم التمار قال: بينما أنا في السوق إذ أتى أصبغ بن نباتة، فقال: ويحك يا ميثم! لقد سمعت من أمير المؤمنين (عليه السلام)حديثاً صعباً شديداً، قلت: ما هو؟ قال: سمعته يقول: إن حديث أهل البيت صعبٌ مستصعب، لا يحتمله إلا ملكٌ مقرب أو نبي مرسل أو عبد مؤمن امتحن الله قلبه للإيمان. قال ميثم: فقمت من فورتي فأتيت علياً (عليه السلام)، فقلت: يا أمير المؤمنين، حديث أخبرني به أصبغ قد ضقت به ذرعاً، فقال (عليه السلام): ما هو؟ فأخبرته به، فتبسم ثم قال: إجلس ما ميثم، أو كل علمٍ يحتمله عالم؟! إن الله تعالى قال للملائكة:{ إني جاعل في الأرض خليفة، قالوا أتجعل فيها من يفسد فيها ويسفك الدماء ونحن نسبح بحمدك ونقدس لك؟! قال إني أعلم ما لا تعلمون} ، فهل رأيت الملائكة احتملوا العلم؟!... 

وأما النبيون، فإن نبينا (صلى الله عليه وآله)أخذ يوم غدير خم بيدي فقال: اللهم من كنت مولاه فعلي مولاه، فهل رأيت احتملوا ذلك إلا من عصم الله منهم؟ فأبشروا، ثم أبشروا.. فإن الله قد خصكم بما لم يخص به الملائكة والنبيين والمرسلين فيما احتملتم ذلك في أمر رسول الله (صلى الله عليه وآله) وعلمه، فحدثوا عن فضلنا ولا حرج، وعن عظيم أمرنا ولا إثم. قال: قال رسول الله (صلى الله عليه وآله): أمرنا ـ معاشر الأنبياء ـ أن نخاطب الناس على قدر عقولهم.`,
    date: '2026-04-29',
    author: 'ابن الشريفة الواسطي',
    category: 'tafsir',
    tags: ['الحديث', 'العلم', 'أمير المؤمنين'],
    readTime: '6 دقائق'
  },
  {
    id: 2,
    title: 'ميثم التمار والثبات على الحق',
    excerpt: `ميثم التمار لما وضع على الخشبة صاح بأعلى صوته: أيها الناس من أراد أن يسمع الحديث المكنون عن علي بن أبي طالب (عليه السلام)؟ قبل ان اقتل فوالله لأخبرنكم بعلم ما يكون الى ان تقوم الساعة وما يكون من الفتن واقبل يحدث الناس بفضل بني هاشم والعجائب وبينما هو على هذا والناس مجتمعون حوله إذ خرج عمرو بن حريث من داره فقال: ما هذه الجماعة؟ قالوا: ميثم التمار يحدث الناس عن علي بن أبي طالب، فانصرف مسرعا الى ابن زياد وقال: يا أمير ابعث إلى هذا من يقطع لسانه فاني لست آمن أن تتغير عليك قلوب الناس فيخرجوا عليك، فالتفت ابن زياد إلى حرسي وقال: اذهب اليه واقطع لسانه، فأتاه الحرسي وقال: يا ميثم! قل ما تشاء فقد أمرني الأمير ان اقطع لسانك.
قال ميثم: ألا زعم ابن الفاجرة ان يكذبني ويكذب مولاي ثم اخرج لسانه فقطعه بعد أن الجموه بلجام من شريط فكان أول من ألجم في الإسلام.

المصدر: كتاب ميثم التمار، للسيد عبد الرزاق المقرم.`,
    date: '2026-04-28',
    author: 'السيد عبد الرزاق المقرم',
    category: 'history',
    tags: ['الثبات', 'الكوفة', 'الشهادة'],
    readTime: '5 دقائق'
  },
  {
    id: 3,
    title: 'عتيق أمير المؤمنين عليه السلام وموضع أسراره..',
    excerpt: `هو أحد الذين وثق أمير المؤمنين عليه السلام بتحملهم وكتمانهم فاودعهم الاسرار. حج ميثم في السنة التي قتل فيها فزار أم سلمة فأخبرته بانها سمعت رسول الله صلى الله عليه وآله في جوف الليل يوصي عليا عليه السلام بميثم. سألها ميثم عن الامام الحسين عليه السلام فأخبرته بأنه خارج المدينة، فقال لها: اخبريه بأني قد احببت السلام عليه، ونحن ملتقون عند رب العالمين ان شاء الله. أتت أم سلمة بطيب فطيبت لحية ميثم، وقال لها: إنها ستخضب بدم. يعود ميثم من الحج وقد قتل مسلم بن عقيل، فقبض عليه جلاوزة ابن زياد واودعوه السجن. لم تمر إلا أيام حتى أخرجوه من حبسه ليكون المصلوب العاشر، فاصعدوه على خشبته التي طالما سقاها بيده مخاطباً إياها: لك خلقتُ ولي غذيت. وكان ذلك قبل قدوم الامام الحسين عليه السلام الى العراق بعشرة أيام.`,
    date: '2026-04-27',
    author: 'السيد أسعد القاضي',
    category: 'biography',
    tags: ['أم سلمة', 'الأسرار', 'الولاء'],
    readTime: '7 دقائق'
  },
  {
    id: 4,
    title: 'البشارة بالشهادة والإخبار بالغيب',
    excerpt: `عن فضيل بن الزبير، قال: (مرّ ميثم التمار) وهو راكب (على فرس له، فاستقبل) في طريقه (حبيب بن مظاهر الأسدي) وكان حبيب (عند مجلس بني أسد، فتحدّثا) طويلاً (حتّى اختلف أعناق فرسيهما) واقتربا من بعضهما، (ثم قال حبيب) لميثم وهو يخبره عن صلبه وقتله: (لكأني بشيخ أصلع ضخم البطن يبيع البطيخ عند دار الزرق) وهو موضع بالكوفة (قد صُلب في حب أهل بيت نبيه، ويُبقر بطنه) أي: يشقّ بطنه وهو مصلوب (على الخشب). فلما انتهى حبيب من إخباره عن صلب ميثم وقتله (قال ميثم: وإني لأعرف رجلاً أحمر له ضفيرتان يخرج لينصر ابن بنت نبيه فيُقتل ويُجال برأسه بالكوفة) يقصد حبيب بن مظاهر.`,
    date: '2026-04-26',
    author: 'السيد أسعد القاضي',
    category: 'history',
    tags: ['حبيب بن مظاهر', 'الغيب', 'الكوفة'],
    readTime: '6 دقائق'
  },
  {
    id: 5,
    title: 'ميثم التمّار ، العاشق الخالص',
    excerpt: `في أحد الأيّام قال الإمام علي عليه السلام لأحد عشاقه الذي كان يعيش الولاء المطلق له : سوف تُصلب في المستقبل القريب بسبب دفاعك عني وحبّك لي فكيف يكون حالك حينئذٍ ؟ ولكنّ هذا العاشق لم يتردد لحظة ولم يشعر بشيءٍ من الخوف ولم يتهرب من المسؤولية والولاية بل أظهر السرور البالغ وقال : سيّدي أين المكان الذي سوف اصلبُ فيه ؟ فأشار الإمام علي عليه السلام إلى نخلة من نخيل الكوفة وقال : سوف تُصلب على جذع هذه النخلة . هذا العاشق الخالص لم يبتعد عن الإمام ولم يهرب من تلك المدينة ويترك أهله ودياره بل أزداد حبّاً وعشقاً للإمام علي.`,
    date: '2026-04-25',
    author: 'الشيخ ناصر مكارم الشيرازي',
    category: 'biography',
    tags: ['العشق الإلهي', 'النخلة', 'التضحية'],
    readTime: '5 دقائق'
  },
  {
    id: 6,
    title: 'أوّل من أُلجم في الإسلام ميثم بن يحيى التمار',
    excerpt: `يعد التمار (رضوان الله تعالى عليه) من أعاظم الشهداء في التشيّع، نزل الكوفة، وله بها ذرية، كان ميثم التمار عبدا لامرأة من بني أسد فاشتراه الإمام علي (عليه السلام) منها وأعتقه وقال له: ما اسمك؟ قال: سالم، قال: أخبرني رسول الله (صلى الله عليه وآله) إن اسمك الذي سماك به أبواك في العجم ميثم، قال: صدق الله ورسوله وأمير المؤمنين، والله إنه لاسمي، قال: فارجع إلى اسمك الذي سماك به رسول الله (صلى الله عليه وآله) ودع سالما، فرجع ميثم واكتنى بأبي سالم... ولقد عرفت الموضع الذي أصلب فيه، وأني أول خلق الله ألجم في الإسلام.`,
    date: '2026-04-24',
    author: 'علي فاضل الخزاعي',
    category: 'history',
    tags: ['الإلجام', 'الشهادة', 'الصحابة'],
    readTime: '8 دقائق'
  },
  {
    id: 7,
    title: 'ميثم التمار :نموذجا إسلاميا خالدا',
    excerpt: `يعتبر الصحابي الجليل ميثم بن يحيى التمار أنيس للإمام علي بن أبي طالب (ع) فضلاً عن كون صاحبه واحد حواريه فلم يكن صحابياً عاديا ، فأمير المؤمنين(ع) كان عندما يتألم يذهب إلى الصحابي ميثم التمار وكانت تسكن روحه مع روح التمار (ع) عند محل بائع التمر ميثم التمار في الكوفة المقدسة فهو يئنس بروح ذلك الرجل الذي رباه الإمام (ع) كونه معدن طاهر كرشيد الهجري وكميل بن زياد وغيرهم من أصحاب الإمام (ع) الذين لم تزدهم صحبتهم لأمير المؤمنين (ع) إلا إيمانا إلى إيمانهم.`,
    date: '2026-04-23',
    author: 'حيدر حسين الجنابي',
    category: 'history',
    tags: ['الأعمار', 'النجف', 'الكوفة'],
    readTime: '10 دقائق'
  },
  {
    id: 8,
    title: 'خير البرية في كتاب  الامام علي (عليه السلام)',
    excerpt: `عَنْ يَعْقُوبَ بْنِ مِيثَمٍ أَنَّهُ وَجَدَ فِي كِتَابِ أَبِيهِ أَنَّ عَلِيّاً (عَلَيْهِ السَّلاَمُ) قَالَ سَمِعْتُ رَسُولَ اَللَّهِ (صَلَّى اَللَّهُ عَلَيْهِ وَ آلِهِ) يَقُولُ: قَالَ اَللَّهُ عَزَّ وَ جَلَّ: «إِنَّ اَلَّذِينَ آمَنُوا وَ عَمِلُوا اَلصّٰالِحٰاتِ أُولٰئِكَ هُمْ خَيْرُ اَلْبَرِيَّةِ» ثُمَّ اِلْتَفَتَ إِلَى عَلِيٍّ (عَلَيْهِ السَّلاَمُ) فَقَالَ نَعَمْ أَنْتَ يَا عَلِيُّ وَ شِيعَتُكَ وَ مِيعَادُكَ وَ مِيعَادُهُمُ اَلْحَوْضُ غُرّاً مُحَجَّلِينَ مُكَحَّلِينَ مُتَوَّجِينَ. قَالَ: يَعْقُوبُ فَحَدَّثْتُ أَبَا جَعْفَرٍ -الباقر- (عَلَيْهِ السَّلاَمُ) بِهَذَا فَقَالَ: هَكَذَا هُوَ عِنْدَنَا فِي كِتَابِ عَلِيٍّ (عَلَيْهِ السَّلاَمُ)`,
    date: '2026-04-22',
    author: 'يعقوب بن ميثم',
    category: 'virtues',
    tags: ['الرواية', 'أهل البيت', 'الشيعة'],
    readTime: '4 دقائق'
  }
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
      <div className="min-h-screen pt-20 bg-[#05140d]">
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 islamic-pattern opacity-10" />
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
              className="glass-card p-8 md:p-12 border border-white/10 rounded-[2rem]"
            >
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="px-4 py-1 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-sm font-bold">
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

              <h1 className="text-3xl md:text-5xl font-bold mb-10 gold-gradient leading-tight">{selectedArticle.title}</h1>

              <div className="prose prose-invert max-w-none">
                <div className="text-white/90 leading-relaxed text-xl space-y-6 whitespace-pre-wrap font-ar">
                  {selectedArticle.excerpt}
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-white/20 text-sm italic">مزار الصحابي الجليل ميثم بن يحيى التمار (رض)</p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-xl bg-white/5 text-white/40 text-sm flex items-center gap-2 border border-white/5">
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
    <div className="min-h-screen pt-20 bg-[#05140d]" dir="rtl">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 rounded-full bg-[#c9a227]/10 text-[#c9a227] text-sm font-bold mb-6 border border-[#c9a227]/20 tracking-widest uppercase">
              المكتبة الثقافية
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 font-display">
              <span className="gold-gradient">مقالات وبحوث المزار</span>
            </h1>
            <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
              نافذتكم المعرفية على سيرة وتاريخ الصحابي الجليل ميثم بن يحيى التمار (رضوان الله عليه)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#c9a227] opacity-50" />
              <input
                type="text"
                placeholder="ابحث عن مقال، كاتب، أو موضوع تاريخي..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-14 pl-6 py-5 rounded-[1.5rem] bg-white/[0.03] border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a227] focus:bg-white/[0.05] transition-all text-lg shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${
                  activeCategory === category.id
                    ? 'bg-[#c9a227] text-[#05140d] border-[#c9a227] shadow-[0_0_20px_rgba(201,162,39,0.3)]'
                    : 'bg-white/5 text-white/50 border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedArticle(article)}
                className="group glass-card p-8 cursor-pointer border border-white/5 hover:border-[#c9a227]/30 transition-all shadow-2xl flex flex-col h-full rounded-[2rem]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a227] transition-all duration-500">
                    <FileText className="w-7 h-7 text-[#c9a227] group-hover:text-[#05140d] transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#c9a227] text-xs font-bold uppercase tracking-widest mb-1">
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                    <span className="text-white/30 text-[10px]">{article.readTime} قراءة</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-[#c9a227] transition-colors leading-tight font-display">
                  {article.title}
                </h3>
                
                <p className="text-white/50 text-sm line-clamp-3 mb-8 leading-relaxed italic">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-white/30 text-[11px]">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#c9a227]" />
                    <span className="font-bold">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32 border-2 border-dashed border-white/5 rounded-[3rem]"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                <Search className="w-10 h-10 text-white/10" />
              </div>
              <h3 className="text-2xl font-bold text-white/30 mb-2">لا توجد مقالات تطابق بحثك</h3>
              <p className="text-white/20">حاول البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}