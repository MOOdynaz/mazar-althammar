import { motion } from 'framer-motion'
import { 
  Box, Ruler, Layers, Compass, Camera, 
  Maximize2, ArrowDownCircle, Info, Construction,
  Layout
} from 'lucide-react'

// استيراد الصور
import arch37 from '../assets/images/37.jpg'
import arch38 from '../assets/images/38.jpg'
import arch39 from '../assets/images/39.jpg'
import arch40 from '../assets/images/40.jpg'
import arch41 from '../assets/images/41.jpg'
import arch42 from '../assets/images/42.jpg'
import arch43 from '../assets/images/43.jpg'

const archImages = [
  { src: arch37, title: "المنظور المعماري الجديد" },
  { src: arch38, title: "ارتفاع المنارات والقبة" },
  { src: arch39, title: "الواجهات بنمط الجف قيم" },
  { src: arch40, title: "توسعة الصحن الخارجي" },
  { src: arch41, title: "الكتائب القرآنية والكاشي الكربلائي" },
  { src: arch42, title: "شباك الضريح الجديد" },
  { src: arch43, title: "المرافق الخدمية والثقافية" },
]

const buildingStages = [
  { stage: "المرحلة الأولى", desc: "الهدم الكامل للضريح القديم وتأسيس قواعد بعمق 2 متر مع تسليح الهيكل الكونكريتي." },
  { stage: "المرحلة الثانية", desc: "الإنهاءات الداخلية وتغليف الجدران بالمرمر و (العينه كار) والكاشي الكربلائي المعرّق." },
  { stage: "المرحلة الثالثة", desc: "توسعة الصحن الخارجي إلى 14,000 م² وبناء طابقين للمرافق العلمية والخدمية." },
]

export default function Architecture() {
  return (
    <div className="min-h-screen bg-[#05140d] text-white pt-20 overflow-x-hidden" dir="rtl">
      
      {/* Hero Header */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#144d34] via-transparent to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a227]/10 text-[#c9a227] text-xs font-bold mb-6 border border-[#c9a227]/20 uppercase tracking-widest">
              <Construction className="w-4 h-4" /> نهضة عمرانية مباركة
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight">
              الهندسة <span className="gold-gradient">والمعمار</span>
            </h1>
            <p className="text-white/60 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              "إنما يعمر مساجد الله من آمن بالله واليوم الآخر" <br className="hidden md:block" /> 
              استعراض للمراحل الهندسية لتوسعة وتطوير مزار الصحابي الجليل ميثم بن يحيى التمار (رض)
            </p>
          </motion.div>
          
          <div className="mt-12 flex justify-center items-center gap-4 text-white/40 text-sm border-t border-white/5 pt-8 max-w-xs mx-auto">
            <Camera className="w-5 h-5 text-[#c9a227]" />
            <span className="font-medium text-white/70">عدسة : عصام الموسوي</span>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "مساحة الصحن", value: "14,000 م²", icon: Maximize2 },
            { label: "مساحة الضريح", value: "1,200 م²", icon: Layout },
            { label: "ارتفاع المنارات", value: "28 م", icon: Ruler },
            { label: "قدرة الاستيعاب", value: "6,000 زائر", icon: Box },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center group hover:border-[#c9a227]/40 transition-all">
              <stat.icon className="w-6 h-6 text-[#c9a227] mx-auto mb-3 opacity-60" />
              <div className="text-2xl font-bold text-white mb-1 tracking-tighter">{stat.value}</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Building Stages & Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="space-y-12 text-right">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-4">
                <div className="w-12 h-1 bg-[#c9a227] rounded-full" /> فلسفة التصميم
              </h2>
              <p className="text-white/70 leading-relaxed text-lg italic">
                "تم الجمع في هذا المشروع بين الحداثة والتراث الإسلامي، حيث تحول الضريح من مساحة 300م² إلى 1200م² ليتلاءم مع حجم الزخم البشري للزائرين."
              </p>
            </div>

            {/* Stages Timeline */}
            <div className="space-y-8 relative pr-8">
              <div className="absolute right-3 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a227] to-transparent" />
              {buildingStages.map((stage, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  key={i} 
                  className="relative group"
                >
                  <div className="absolute -right-[25px] top-1 w-4 h-4 rounded-full bg-[#05140d] border-2 border-[#c9a227] group-hover:bg-[#c9a227] transition-colors" />
                  <h4 className="text-[#c9a227] font-bold text-sm mb-2">{stage.stage}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{stage.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <Compass className="w-8 h-8 text-[#c9a227] mb-4" />
                <h3 className="font-bold text-lg mb-2">تأصيل التراث</h3>
                <p className="text-xs text-white/50 leading-relaxed">استخدام واجهات (الجف قيم) وتطعيمها بالكاشي الكربلائي بنمط (المعرّق) لإحياء الهوية الإسلامية في المنارات.</p>
              </div>
              <div className="p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <Info className="w-8 h-8 text-[#c9a227] mb-4" />
                <h3 className="font-bold text-lg mb-2">المنارة والقبة</h3>
                <p className="text-xs text-white/50 leading-relaxed">بناء منارتين بارتفاع 28م مقسمة لـ 5 مراحل هندسية (القاعدة، الاسطوانة، المأذنة، الكأس، والقمة).</p>
              </div>
            </div>
          </div>

          {/* Sticky Gallery */}
          <div className="lg:sticky lg:top-32">
            <div className="grid grid-cols-2 gap-3">
              {archImages.map((img, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`relative rounded-3xl overflow-hidden group border border-white/5 ${index === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05140d] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 right-4 left-4">
                    <span className="text-[10px] font-bold text-[#c9a227] uppercase tracking-wider block mb-1 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">مزار ميثم التمار</span>
                    <p className="text-xs font-medium text-white/90 truncate">{img.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Final Quote & Details */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Box className="w-16 h-16 text-[#c9a227]/20 mx-auto mb-10" />
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-4xl font-bold mb-12 leading-snug font-display"
          >
            "الشباك الجديد نُفذ بمساحة <span className="text-[#c9a227]">4×5 متر</span> في مصانع العتبة العباسية المقدسة ليكون تحفة فنية تجمع بين هيبة الضريح ودقة الفن المعاصر."
          </motion.h2>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center text-[#05140d] font-bold mb-4 shadow-lg shadow-[#c9a227]/20">
              H
            </div>
            <div className="text-[#c9a227] font-bold tracking-widest uppercase text-sm">المهندسة هاجر إبراهيم</div>
            <p className="text-white/30 text-xs mt-1 tracking-widest">مشرفة مشروع إعمار المزار الشريف</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/20 to-transparent" />
      </section>

    </div>
  )
}