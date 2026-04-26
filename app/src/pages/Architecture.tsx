import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Box, 
  Ruler, 
  Layers, 
  Compass, 
  Camera, 
  ChevronRight,
  Maximize2
} from 'lucide-react'

// استيراد الصور الجديدة
import arch37 from '../assets/images/37.jpg'
import arch38 from '../assets/images/38.jpg'
import arch39 from '../assets/images/39.jpg'
import arch40 from '../assets/images/40.jpg'
import arch41 from '../assets/images/41.jpg'
import arch42 from '../assets/images/42.jpg'
import arch43 from '../assets/images/43.jpg'

const archImages = [
  { src: arch37, title: "منظور جوي للعمارة" },
  { src: arch38, title: "تفاصيل القبة والمنارات" },
  { src: arch39, title: "الواجهات الإسلامية" },
  { src: arch40, title: "التوسعة الجديدة" },
  { src: arch41, title: "النقوش المعرّقة" },
  { src: arch42, title: "الشباك الشريف" },
  { src: arch43, title: "الصحن الخارجي" },
]

export default function Architecture() {
  return (
    <div className="min-h-screen bg-[#05140d] text-white pt-20 overflow-x-hidden" dir="rtl">
      
      {/* Header Section */}
      <section className="relative py-20 px-4 border-b border-[#c9a227]/10 bg-black/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[#c9a227] text-sm font-bold tracking-[0.2em] mb-4 block uppercase"
          >
            التراث والحداثة
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-display"
          >
            عمارة <span className="gold-gradient">المزار الشريف</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            استعراض للمراحل الهندسية والنهضة العمرانية التي شهدها مرقد الصحابي الجليل ميثم بن يحيى التمار (رض)
          </p>
          <div className="mt-8 flex justify-center items-center gap-2 text-white/40 text-sm italic">
            <Camera className="w-4 h-4" /> عدسة: عصام الموسوي
          </div>
        </div>
      </section>

      {/* Main Info Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <div className="space-y-12 text-right text-lg leading-relaxed text-white/80">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Maximize2 className="text-[#c9a227]" /> التوسعة الاستراتيجية
              </h2>
              <p>
                شهد المرقد تحولاً جذرياً في مساحته الاستيعابية، حيث تمت توسعة الضريح الداخلي من <span className="text-[#c9a227] font-bold">300 م²</span> ليصل إلى <span className="text-[#c9a227] font-bold">1200 م²</span>. 
                أما الصحن الخارجي، فقد تضاعفت مساحته لتصل إلى <span className="text-[#c9a227] font-bold">14000 م²</span> موزعة على طابقين لضمان انسيابية حركة الزائرين الذين يتجاوز عددهم 6000 زائر يومياً.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-[#c9a227]/30 transition-all">
                <Ruler className="text-[#c9a227] mb-4 w-8 h-8" />
                <h3 className="text-xl font-bold text-white mb-2">القبة والمنائر</h3>
                <p className="text-sm">تضم العمارة الجديدة منارتين بارتفاع 28م وقطر 2.5م، تم تشييدهما وفق خمس مراحل هندسية تبدأ من القاعدة وصولاً لقمة المأذنة.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-[#c9a227]/30 transition-all">
                <Compass className="text-[#c9a227] mb-4 w-8 h-8" />
                <h3 className="text-xl font-bold text-white mb-2">الطراز المعماري</h3>
                <p className="text-sm">يعتمد البناء أسلوب "المعرّق" الإسلامي، حيث تم تطعيم واجهات "الجف قيم" بالكاشي الكربلائي والكتائب القرآنية والعينه كار.</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <Layers className="text-[#c9a227]" /> المرافق الخدمية
              </h2>
              <p>
                لا يقتصر المشروع على الجانب العبادي فقط، بل يضم مرافق متكاملة تشمل:
              </p>
              <ul className="grid grid-cols-2 gap-4 text-sm text-[#c9a227]">
                <li className="flex items-center gap-2">• متحف المزار الشريف</li>
                <li className="flex items-center gap-2">• مضيف ومطعم الزائرين</li>
                <li className="flex items-center gap-2">• قاعات دراسية وعلمية</li>
                <li className="flex items-center gap-2">• أجنحة إدارية وخدمية</li>
              </ul>
            </div>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-2 gap-4 sticky top-32">
            {archImages.map((img, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`relative rounded-2xl overflow-hidden group ${index === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-4">
                  <span className="text-xs font-bold text-[#c9a227]">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Detail Quote Section */}
      <section className="py-20 bg-black/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Box className="w-12 h-12 text-[#c9a227] mx-auto mb-8 opacity-20" />
          <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
            "تم تصميم الشباك الجديد بمساحة 4×5 متر وبارتفاع 3 أمتار، وتم تنفيذه في مصنع السقاي التابع للعتبة العباسية المقدسة ليجمع بين دقة الفن الإسلامي وهيبة المقام."
          </h2>
          <div className="text-[#c9a227] font-bold">- المهندسة هاجر إبراهيم</div>
          <p className="text-white/40 text-sm mt-1">مشرفة مشروع الإعمار</p>
        </div>
      </section>

    </div>
  )
}