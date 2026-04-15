import { motion } from 'framer-motion'
import { Book, MapPin, Star, Heart, Award } from 'lucide-react'

const features = [
  {
    icon: Book,
    title: 'أول المفسرين',
    description: 'أول من فسر القرآن الكريم بالتأويل',
  },
  {
    icon: Star,
    title: 'صحابي جليل',
    description: 'من أصحاب أمير المؤمنين عليه السلام',
  },
  {
    icon: Heart,
    title: 'الولاء',
    description: 'ولاء تام لأهل البيت عليهم السلام',
  },
  {
    icon: Award,
    title: 'العلم',
    description: 'حافظ للقرآن وعالم بالتفسير',
  },
]

const timeline = [
  {
    year: 'العصر النبوي',
    title: 'نشأة ميثم التمار',
    description: 'ولد ميثم بن يحيى التمار في اليمن، ونشأ في بيئة إيمانية',
  },
  {
    year: 'عهد الإمام علي',
    title: 'الصحبة والتلمذة',
    description: 'لازم الإمام علي بن أبي طالب عليه السلام وأخذ عنه علوم التفسير',
  },
  {
    year: 'عهد معاوية',
    title: 'السجن والصبر',
    description: 'سجن في عهد معاوية بسبب ولايته لأهل البيت',
  },
  {
    year: 'عهد ابن زياد',
    title: 'الاستشهاد',
    description: 'استشهد على يد عبيد الله بن زياد في الكوفة رضي الله عنه',
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium mb-6">
              نبذة تاريخية
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gold-gradient">ميثم بن يحيى التمار</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              الصحابي الجليل وأول من فسر القرآن بالتأويل
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card flex items-center justify-center bg-gradient-to-br from-[#1a5f3f] to-[#0d3322]">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#c9a227] to-[#e5c035] flex items-center justify-center">
                    <span className="text-5xl font-bold text-[#0d3322]">م</span>
                  </div>
                  <h3 className="text-2xl font-bold gold-gradient mb-2">ميثم التمار</h3>
                  <p className="text-white/60">رضي الله عنه</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 gold-gradient">من هو ميثم التمار؟</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  ميثم بن يحيى التمار (رضي الله عنه) هو أحد الصحابة الجليلين وأول من فسر 
                  القرآن الكريم بالتأويل. كان من أقرب أصحاب أمير المؤمنين علي بن أبي طالب 
                  عليه السلام إليه، وقد تتلمذ على يديه في علوم القرآن والتفسير.
                </p>
                <p>
                  وُلد ميثم التمار في اليمن، ونشأ في بيئة إيمانية متواضعة. كان يعمل بيع 
                  التمر في الكوفة، ومن هنا جاءت كنيته "التمار". وقد لقبه الإمام علي 
                  عليه السلام بـ"ذي النون" لحفظه للقرآن الكريم.
                </p>
                <p>
                  كان ميثم التمار معروفاً بعلمه الغزير وتفسيره العميق للقرآن الكريم، 
                  وقد أخذ عن الإمام علي عليه السلام الكثير من علوم التأويل التي لم 
                  يُسمح له بنشرها إلا بعد رحيل الإمام.
                </p>
                <p>
                  استشهد ميثم التمار رضي الله عنه في الكوفة على يد عبيد الله بن زياد، 
                  وقد كان صابراً ثابتاً على موقفه حتى آخر لحظة من حياته.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center card-hover"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-[#c9a227]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-10 text-center gold-gradient"
            >
              سيرة حياته
            </motion.h2>
            
            <div className="relative">
              <div className="absolute right-1/2 top-0 bottom-0 w-px bg-[#c9a227]/30 hidden lg:block" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="flex-1 lg:text-left">
                      <div className="glass-card p-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-sm mb-3">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-white/60">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-4 h-4 rounded-full bg-[#c9a227] hidden lg:block relative z-10" />
                    
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 text-center"
          >
            <MapPin className="w-12 h-12 text-[#c9a227] mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 gold-gradient">موقع المزار</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              يقع مزار ميثم بن يحيى التمار (رضي الله عنه) في مدينة الكوفة، محافظة النجف، 
              العراق. وهو مكان مقدس يزوره المؤمنون للتبرك والتوجه بالدعاء.
            </p>
            <div className="aspect-video rounded-xl overflow-hidden bg-[#0d3322]/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#c9a227]/50 mx-auto mb-4" />
                <p className="text-white/60">الكوفة، محافظة النجف، العراق</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
