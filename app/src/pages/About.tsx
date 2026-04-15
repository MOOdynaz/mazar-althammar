import { motion } from 'framer-motion'
import { Book, MapPin, Star, Heart, Award, Navigation } from 'lucide-react'

const features = [
  { icon: Book, title: 'أول المفسرين', description: 'أول من فسر القرآن الكريم بالتأويل' },
  { icon: Star, title: 'صحابي جليل', description: 'من أصحاب أمير المؤمنين عليه السلام' },
  { icon: Heart, title: 'الولاء', description: 'ولاء تام لأهل البيت عليهم السلام' },
  { icon: Award, title: 'العلم', description: 'حافظ للقرآن وعالم بالتفسير' },
]

const timeline = [
  { year: 'العصر النبوي', title: 'نشأة ميثم التمار', description: 'ولد ميثم بن يحيى التمار في اليمن، ونشأ في بيئة إيمانية' },
  { year: 'عهد الإمام علي', title: 'الصحبة والتلمذة', description: 'لازم الإمام علي بن أبي طالب عليه السلام وأخذ عنه علوم التفسير' },
  { year: 'عهد معاوية', title: 'السجن والصبر', description: 'سجن في عهد معاوية بسبب ولايته لأهل البيت' },
  { year: 'عهد ابن زياد', title: 'الاستشهاد', description: 'استشهد على يد عبيد الله بن زياد في الكوفة رضي الله عنه' },
]

export default function About() {
  // الرابط الذي زودتنا به للمزار
  const googleMapUrl = "https://maps.app.goo.gl/rYfLp4D7a4n4oH5P9";

  return (
    <div className="min-h-screen pt-20 bg-[#05140d]">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
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

          {/* Intro Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="aspect-[4/5] rounded-3xl overflow-hidden glass-card flex items-center justify-center bg-gradient-to-br from-[#1a5f3f] to-[#0d3322] border border-[#c9a227]/20">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#c9a227] flex items-center justify-center shadow-[0_0_30px_rgba(201,162,39,0.3)]">
                  <span className="text-5xl font-bold text-[#05140d]">م</span>
                </div>
                <h3 className="text-2xl font-bold text-[#c9a227] mb-2">ميثم التمار</h3>
                <p className="text-white/60">رضي الله عنه</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <h2 className="text-3xl font-bold gold-gradient">من هو ميثم التمار؟</h2>
              <div className="space-y-4 text-white/80 leading-relaxed text-lg text-justify border-r-2 border-[#c9a227]/30 pr-6">
                <p>ميثم بن يحيى التمار (رضي الله عنه) هو أحد الصحابة الجليلين وأول من فسر القرآن الكريم بالتأويل. كان من أقرب أصحاب أمير المؤمنين علي بن أبي طالب عليه السلام.</p>
                <p>وُلد في اليمن، وعمل في بيع التمر بالكوفة، ومن هنا جاء لقبه. لقبّه الإمام علي عليه السلام بـ"ذي النون" لشدة حفظه وعلمه.</p>
                <p>استشهد في الكوفة صابراً محتسباً على يد عبيد الله بن زياد بعد أن صُلب على جذع نخلة، وظل يذكر فضائل أهل البيت حتى لحظاته الأخيرة.</p>
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center gold-gradient">سيرة حياته</h2>
            <div className="relative space-y-8">
              <div className="absolute right-1/2 top-0 bottom-0 w-px bg-[#c9a227]/20 hidden lg:block" />
              {timeline.map((item, index) => (
                <motion.div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full">
                    <div className="glass-card p-6 border border-[#c9a227]/10 hover:border-[#c9a227]/40 transition-colors">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-xs mb-3">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#c9a227] hidden lg:block z-10 shadow-[0_0_10px_#c9a227]" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* GPS Map Section - باستخدام الرابط الصحيح */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-4 sm:p-8 text-center border border-[#c9a227]/30 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col items-center mb-8">
              <MapPin className="w-12 h-12 text-[#c9a227] mb-4 animate-bounce" />
              <h2 className="text-3xl font-bold gold-gradient mb-2">موقع المزار الشريف</h2>
              <p className="text-white/60 max-w-2xl mx-auto">العراق - النجف الأشرف - الكوفة المقدسة</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[450px] border border-[#c9a227]/20">
              {/* عرض الموقع باستخدام Place ID المستخرج من رابطك */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.06606015568!2d44.39294098485409!3d32.02640698115456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155ed6019dc9cafd%3A0xda6623385062016b!2z2YXYsdmC2K8g2YXZitir2YUg2KfZhNiq2YXYp9ix!5e0!3m2!1sar!2siq!4v1715767000000!5m2!1sar!2siq"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
              
              <div className="absolute bottom-6 right-6 left-6 sm:left-auto">
                {/* استخدام الرابط المباشر الذي أرسلته للتوجيه */}
                <a 
                  href={googleMapUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#c9a227] text-[#05140d] px-8 py-4 rounded-xl font-bold shadow-2xl hover:bg-[#e5c035] hover:scale-105 transition-all"
                >
                  <Navigation className="w-5 h-5" />
                  توجيه GPS (خرائط جوجل)
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}