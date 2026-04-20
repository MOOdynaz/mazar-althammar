import { motion } from 'framer-motion'
import { 
  MapPin, 
  Navigation, 
  History, 
  Quote, 
  Users 
} from 'lucide-react'

const mazarLogo = '/logo.png'; 

const timeline = [
  { 
    year: 'النشأة', 
    title: 'من سالم إلى ميثم', 
    description: 'كان عبداً لامرأة من بني أسد فاشتراه أمير المؤمنين (ع) وأعتقه، وأخبره باسمه الحقيقي "ميثم" الذي سماه به أبواه في العجم.' 
  },
  { 
    year: 'الصحبة', 
    title: 'عالم البلايا والمنايا', 
    description: 'لازم أمير المؤمنين (ع) فخصه بعلم البلايا والمنايا، وكان من أصحاب الإمامين الحسن والحسين عليهما السلام.' 
  },
  { 
    year: 'البشارة', 
    title: 'الإخبار بالشهادة', 
    description: 'بشره الإمام علي (ع) باستشهاده مصلوباً على جذع نخلة حددها له، فكان ميثم يتردد إليها ويصلي عندها.' 
  },
  { 
    year: 'سنة 60 هـ', 
    title: 'الشهادة الخالدة', 
    description: 'استشهد على يد ابن زياد صابراً، وكان أول من أُلجم في الإسلام لمنعه من ذكر فضائل بني هاشم وهو على الخشبة.' 
  },
]

export default function About() {
  // الإحداثيات الدقيقة لمرقد ميثم التمار (29GW+H36)
  const lat = 32.0264024;
  const lng = 44.3951297;
  
  // رابط جوجل الرسمي المباشر لفتح التطبيق (بدون Dynamic Links)
  const directMapUrl = "https://www.google.com/maps/search/?api=1&query=32.0264024,44.3951297&query_place_id=ChIJK8rJnQHWXhURawFiUDgjZto";

  return (
    <div className="min-h-screen pt-20 bg-[#05140d]">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-right" dir="rtl">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium mb-6">
              من خواص أصحاب أمير المؤمنين (ع)
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 font-display text-center">
              <span className="gold-gradient">ميثم بن يحيى التمّار الأسديّ</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed text-center">
              أبو سالم، شهيد الولاية والعالم المحدث الذي صلب دفاعاً عن الحق والبيعة
            </p>
          </motion.div>

          {/* Intro Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
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
                   <p className="text-white/80 italic text-lg leading-relaxed font-serif">
                     "والله لتُقطّعن يداك ورجلاك ولسانك، ولتُصلبن على جذع نخلة"
                   </p>
                   <span className="block mt-2 text-[#c9a227] text-sm">- من حديث الإمام علي (ع) لميثم التمار</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold gold-gradient flex items-center gap-3">
                  <History className="w-8 h-8" /> ومضات من حياته
                </h2>
                <div className="space-y-4 text-white/80 leading-relaxed text-lg text-justify border-r-2 border-[#c9a227]/30 pr-6">
                  <p>كان ميثم عبداً لامرأة من بني أسد، فاشتراه أمير المؤمنين (ع) وأعتقه. لقّب بالتمّار لأنه كان يبيع التمر في الكوفة، وكان دكانه مقصداً للمؤمنين.</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold gold-gradient flex items-center gap-3">
                  <Users className="w-8 h-8" /> أولاده وذريته
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['عمران (صاحب الإمام السجاد)', 'صالح (صاحب الباقر والصادق)', 'شعيب (صاحب الإمام الصادق)', 'حمزة بن ميثم'].map((son) => (
                    <div key={son} className="bg-white/5 border border-white/10 p-4 rounded-xl text-white/90 text-sm hover:border-[#c9a227]/30 transition-colors">
                       {son}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center gold-gradient">محطات تاريخية</h2>
            <div className="relative space-y-8">
              <div className="absolute right-1/2 top-0 bottom-0 w-px bg-[#c9a227]/20 hidden lg:block" />
              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full">
                    <div className="glass-card p-6 border border-[#c9a227]/10 hover:border-[#c9a227]/40 transition-colors group">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-xs mb-3 font-bold group-hover:bg-[#c9a227] group-hover:text-black transition-colors">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#c9a227] hidden lg:block z-10 shadow-[0_0_10px_#c9a227]" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Section - تم إصلاح روابط التضمين والتوجيه */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-4 sm:p-8 text-center border border-[#c9a227]/30 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col items-center mb-8">
              <MapPin className="w-12 h-12 text-[#c9a227] mb-4 animate-bounce" />
              <h2 className="text-3xl font-bold gold-gradient mb-2 font-display">موقع الضريح الطاهر</h2>
              <p className="text-white/60 max-w-2xl mx-auto leading-relaxed text-center">
                يقع الضريح المبارك في مدينة الكوفة المقدسة <br /> 
                <span className="text-[#c9a227] font-mono mt-2 block font-bold text-lg">29GW+H36</span>
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[500px] border border-[#c9a227]/20">
              <iframe
                title="مرقد ميثم التمار"
                /* تم تصحيح رابط التضمين المباشر باستخدام الإحداثيات */
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.766324227958!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda6723385062016b%3A0xda6623385062016b!2z2YXYsdmC2K8g2YXZitir2YUg2KfZhNiq2YXYp9ix!5e0!3m2!1sar!2siq!4v1715000000000!5m2!1sar!2siq`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
              
              <div className="absolute bottom-6 right-6 left-6 sm:left-auto">
                <a 
                  href={directMapUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#c9a227] text-[#05140d] px-8 py-4 rounded-xl font-bold shadow-2xl hover:bg-[#e5c035] hover:scale-105 transition-all"
                >
                  <Navigation className="w-5 h-5" />
                  توجيه GPS (فتح الخرائط)
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}