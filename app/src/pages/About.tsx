import { motion } from 'framer-motion'
import { Book, MapPin, Star, Heart, Award, Navigation, History, Quote } from 'lucide-react'
import mazarLogo from '../assets/images/logo.png' 

const timeline = [
  { year: 'النشأة', title: 'من سالم إلى ميثم', description: 'كان عبداً لمراة من بني أسد فاشتراه أمير المؤمنين (ع) وأعتقه، وأخبره باسمه الحقيقي "ميثم" الذي سماه به أبواه في العجم.' },
  { year: 'الصحبة', title: 'عالم البلايا والمنايا', description: 'لازم أمير المؤمنين (ع) فخصه بعلم البلايا والمنايا، وكان من أصحاب الإمامين الحسن والحسين عليهما السلام.' },
  { year: 'البشارة', title: 'الإخبار بالشهادة', description: 'بشره الإمام علي (ع) باستشهاده مصلوباً على جذع نخلة حددها له، فكان ميثم يتردد إليها ويصلي عندها.' },
  { year: 'سنة 60 هـ', title: 'الشهادة الخالدة', description: 'استشهد على يد ابن زياد صابراً، وكان أول من أُلجم في الإسلام لمنعه من ذكر فضائل بني هاشم وهو على الخشبة.' },
]

export default function About() {
  const directMapUrl = "https://www.google.com/maps/dir//Mazar+Maitham+al-Tammar";

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
              من خواص أصحاب أمير المؤمنين (ع)
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gold-gradient">ميثم بن يحيى التمّار الأسديّ</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              أبو سالم، شهيد الولاية والعالم المحدث الذي صلب دفاعاً عن الحق
            </p>
          </motion.div>

          {/* Intro Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="aspect-[4/5] lg:sticky lg:top-32 rounded-3xl overflow-hidden glass-card flex items-center justify-center bg-gradient-to-br from-[#1a5f3f] to-[#0d3322] border border-[#c9a227]/20 shadow-2xl"
            >
              <div className="text-center p-8">
                <div className="relative group mb-6">
                  <div className="absolute -inset-4 bg-[#c9a227]/20 rounded-full blur-2xl opacity-50"></div>
                  <img 
                    src={mazarLogo} 
                    alt="شعار مزار ميثم التمار" 
                    className="relative w-48 h-48 mx-auto object-contain drop-shadow-[0_0_15px_rgba(201,162,39,0.4)]" 
                  />
                </div>
                <div className="bg-black/30 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                   <Quote className="w-8 h-8 text-[#c9a227] mx-auto mb-4 opacity-50" />
                   <p className="text-white/80 italic text-lg leading-relaxed">
                     "والله لتُقطّعن يداك ورجلاك ولسانك، ولتُصلبن على جذع نخلة"
                   </p>
                   <span className="block mt-2 text-[#c9a227] text-sm">- من نبوءة الإمام علي (ع) لميثم</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold gold-gradient flex items-center gap-3">
                  <History className="w-8 h-8" /> ومضات من حياته
                </h2>
                <div className="space-y-4 text-white/80 leading-relaxed text-lg text-justify border-r-2 border-[#c9a227]/30 pr-6 font-ar">
                  <p>كان ميثم عبداً لامرأة من بني أسد، فاشتراه أمير المؤمنين (ع) وأعتقه. لقّب بالتمّار لأنه كان يبيع التمر في الكوفة، وكان دكانه مقصداً للمؤمنين.</p>
                  <p>خصّه الإمام علي (ع) بعلم "البلايا والمنايا"، فكان ميثم يخبر الناس بما سيجري عليهم من فتن ومصائب بفضل ما علمه إياه باب مدينة العلم.</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold gold-gradient flex items-center gap-3">
                  <Users className="w-8 h-8" /> أولاده وذريته
                </h2>
                <p className="text-white/70">نشأ أولاد ميثم في كنف أهل البيت وكانوا من كبار الرواة والفقهاء:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['عمران (صاحب الإمام السجاد)', 'صالح (صاحب الباقر والصادق)', 'شعيب (صاحب الإمام الصادق)', 'حمزة بن ميثم'].map((son) => (
                    <div key={son} className="bg-white/5 border border-white/10 p-3 rounded-lg text-white/90 text-sm">
                       {son}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 bg-[#c9a227]/5 p-6 rounded-2xl border border-[#c9a227]/20">
                <h2 className="text-3xl font-bold text-red-500/80 flex items-center gap-3">
                   قصة الاستشهاد
                </h2>
                <p className="text-white/80 leading-relaxed">
                  عندما رفع على الخشبة، جعل ميثم يحدّث الناس بفضائل عليّ وبني هاشم، فخاف ابن زياد من تأثير كلامه وأمر بقطع لسانه، فكان أول من أُلجم في الإسلام. طُعن بالحربة في اليوم الثالث من صلبه وفاضت روحه الطاهرة وهو يكبّر الله.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center gold-gradient">محطات تاريخية</h2>
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

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-4 sm:p-8 text-center border border-[#c9a227]/30 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col items-center mb-8">
              <MapPin className="w-12 h-12 text-[#c9a227] mb-4 animate-bounce" />
              <h2 className="text-3xl font-bold gold-gradient mb-2">موقع الضريح الطاهر</h2>
              <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
                يقع قبره الشريف خارج مسجد الكوفة بقرب بيت أمير المؤمنين (ع)، في المكان الذي صُلب فيه دفاعاً عن الولاية.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[450px] border border-[#c9a227]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.847545938507!2d44.4013444!3d32.02891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155ed0f631103c8b%3A0xe54d2e008a0e054!2sMaitham%20al-Tammar%20Shrine!5e0!3m2!1sen!2siq!4v1715800000000!5m2!1sen!2siq"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
              
              <div className="absolute bottom-6 right-6 left-6 sm:left-auto">
                <a 
                  href={directMapUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#c9a227] text-[#05140d] px-8 py-4 rounded-xl font-bold shadow-2xl hover:bg-[#e5c035] hover:scale-105 transition-all"
                >
                  <Navigation className="w-5 h-5" />
                  توجيه GPS (فتح الخريطة)
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}