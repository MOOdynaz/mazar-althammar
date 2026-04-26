import { motion } from 'framer-motion'
import { 
  Box, Ruler, Layers, History, Anchor, Hexagon, DoorOpen, Quote, Sparkles, Maximize2, Layout, Image as ImageIcon
} from 'lucide-react'

// استيراد الصور الأساسية للعرض الجانبي
import arch37 from '../assets/images/37.jpg'
import arch38 from '../assets/images/38.jpg'
import arch39 from '../assets/images/39.jpg'
import arch40 from '../assets/images/40.jpg'
import arch41 from '../assets/images/41.jpg'
import arch42 from '../assets/images/42.jpg'
import arch43 from '../assets/images/43.jpg'

const archImages = [
  { src: arch37, title: "المنظور المعماري للمزار الشريف" },
  { src: arch38, title: "القبة والمنائر بارتفاع 28.5م" },
  { src: arch39, title: "الواجهة والنقوش الإسلامية" },
  { src: arch40, title: "الصحن الشريف بعد التوسعة" },
  { src: arch41, title: "تفاصيل الكاشي الكربلائي" },
  { src: arch42, title: "شباك الضريح الجديد" },
  { src: arch43, title: "أروقة المقام الشريف" },
]

const historicalArchitectures = [
  { title: "العمارة الأولى", desc: "بنيت باللبن بمساحة لا تتجاوز 500م² مع مقابر (جبانات مراد)، وتعرضت للفيضانات والحروب." },
  { title: "العمارة الثانية", desc: "يرجح أنها تعود لعهد الدولة البويهية (371هـ)، وبقيت صامدة لأكثر من 400 عام رغم الإهمال والظروف الجوية." },
  { title: "العمارة الثالثة", desc: "شملت اكتشاف غرفة قديمة مبنية بالطابوق أسفل البناء الحالي بعمق 2-3 أمتار خلال تجديدات عام 2011م." },
  { title: "العمارة الرابعة", desc: "بدأت عام 1900م بقبة واطئة، وشهدت بناء سور السيد عطاء الله الأرومي لحماية المرقد عام 1850م." },
  { title: "العمارة الخامسة", desc: "الفترة ما بعد ثورة العشرين حتى عام 1963م، تميزت بمساحة وفخامة أكبر من سابقاتها." },
  { title: "العمارة السادسة", desc: "عمارة الحاج محمد رشاد ميرزه (1963-1968م)، بلغت مساحة الضريح فيها 413م²." },
  { title: "العمارة السابعة (الحالية)", desc: "بدأ العمل بها في 23/3/2011م، وبلغت مساحة الضريح 1200م² وصحن إجمالي 14,400م²." },
]

// دالة لتوليد مسارات الصور ديناميكياً
const generateImageRange = (start: number, end: number) => {
  const images = [];
  for (let i = start; i <= end; i++) {
    images.push(`/src/assets/images/${i}.jpg`);
  }
  return images;
};

const gallerySections = [
  { title: "صور قديمة للمزار", range: generateImageRange(37, 50), color: "from-amber-900/20" },
  { title: "المزار ما قبل الإعمار الأخير", range: generateImageRange(51, 65), color: "from-blue-900/20" },
  { title: "صور حديثة للمزار", range: generateImageRange(1, 20), color: "from-emerald-900/20" },
];

export default function Architecture() {
  return (
    <div className="min-h-screen bg-[#05140d] text-white pt-20 overflow-x-hidden" dir="rtl">
      
      {/* Hero Header */}
      <section className="relative py-24 px-4 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#144d34] via-[#05140d] to-black opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display">
              مراحل التطور <br /><span className="gold-gradient">العمراني للمقام</span>
            </h1>
            <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
              توثيق تأريخي لمراحل إعمار مرقد الصحابي ميثم بن يحيى التمار (رض) منذ النشأة الأولى وصولاً إلى العمارة السابعة الحديثة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historical Stages Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16 border-r-4 border-[#c9a227] pr-6">
          <History className="text-[#c9a227] w-8 h-8" />
          <h2 className="text-3xl font-bold font-display">التسلسل التأريخي للعمارات</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {historicalArchitectures.map((item, i) => (
            <div key={i} className={`p-8 rounded-3xl border ${i === 6 ? 'bg-[#c9a227]/10 border-[#c9a227]/40 lg:col-span-3' : 'bg-white/5 border-white/10'} relative overflow-hidden group transition-all`}>
              <div className="text-5xl font-black text-white/[0.03] absolute top-2 left-4">{i + 1}</div>
              <h4 className="text-[#c9a227] font-bold text-xl mb-4">{item.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "مساحة الصحن الكلية", value: "14,400 م²", icon: Maximize2 },
            { label: "ارتفاع المنارة", value: "28.34 م", icon: Ruler },
            { label: "عدد الأعمدة الكلي", value: "96 عمود", icon: Box },
            { label: "مساحة الشباك", value: "20.41 م²", icon: Layout },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <stat.icon className="w-6 h-6 text-[#c9a227] mx-auto mb-3" />
              <div className="text-2xl font-bold tracking-tighter">{stat.value}</div>
              <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto border-b border-white/5 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-4 text-white">
                <Sparkles className="text-[#c9a227]" /> شباك الضريح المقدس
              </h2>
              <p className="text-white/70 leading-relaxed text-justify">
                صُنع الشباك الجديد بمواصفات هندسية دقيقة، حيث يبلغ طوله <span className="text-[#c9a227]">5.22 م</span> وعرضه <span className="text-[#c9a227]">3.91 م</span>. يتميز بـ 13 نافذة فضية وتاج ذهبي يضم 70 سعفة نخلة ذهبية بارزة، ترمز للنخلة التي صُلب عليها ميثم التمار (رض).
              </p>
              <div className="p-6 rounded-2xl bg-white/5 border-r-4 border-[#c9a227] italic text-sm text-white/60 leading-relaxed">
                "يا روعة كرؤية الأقمار .. أنواره في روضة الأبرار <br /> قد شع شباك الضريح .. أرخوا لأنه في ميثم التمار"
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-4 text-white">
                <Hexagon className="text-[#c9a227]" /> المنائر والقبة
              </h2>
              <p className="text-white/70 leading-relaxed text-sm text-justify">
                يصل ارتفاع المنارة إلى 28.5م وهي مكونة من 5 مراحل هندسية (القاعدة، الأسطوانة، المأذنة، الكأس، والقمة). أما القبة الداخلية فيبلغ قطرها 8م وارتفاعها 18.5م، بينما القبة الخارجية بصلية الشكل بارتفاع 22م، وتمتاز برقبة طويلة تزيد من هيبتها وضخامتها.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#c9a227]/10 to-transparent border border-[#c9a227]/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><Anchor className="text-[#c9a227]" /> صندوق الخاتم</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                معمول من خشب الساج البورمي، بقياس 270سم طولاً و170سم عرضاً. يضم 12 قوساً إسلامياً ونجمات اثني عشرية من خشب الجوز المطعمة بالنارنج. تتوسط سقف الصندوق فتحة دائرية بقطر 60سم للحفاظ على شكل القبر الطاهر.
              </p>
              <div className="text-[10px] font-bold text-[#c9a227] uppercase border-t border-white/5 pt-4">
                صُنع بواسطة: الحاج كفاح الشمرتي وأولاده
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-32 grid grid-cols-2 gap-4">
            {archImages.map((img, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} className={`relative rounded-3xl overflow-hidden group border border-white/5 ${index === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05140d] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 right-4"><p className="text-[10px] font-bold text-white/90 uppercase tracking-tighter">{img.title}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Photo Gallery Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <ImageIcon className="text-[#c9a227] w-8 h-8" />
            <h2 className="text-4xl font-bold font-display gold-gradient">معرض عمارة المزار</h2>
          </div>

          <div className="space-y-32">
            {gallerySections.map((section, idx) => (
              <div key={idx} className="space-y-8">
                <div className={`p-4 border-r-4 border-[#c9a227] bg-gradient-to-l ${section.color} to-transparent`}>
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {section.range.map((imgUrl, imgIdx) => (
                    <motion.div
                      key={imgIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      className="aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group"
                    >
                      <img 
                        src={imgUrl} 
                        alt={`صورة من ${section.title}`} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => (e.currentTarget.style.display = 'none')} // إخفاء الصورة إذا لم تكن موجودة
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <Maximize2 className="text-[#c9a227] w-6 h-6" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doors Section */}
      <section className="py-24 bg-[#05140d]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">أبواب المقام الشريف</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "باب المصطفى (ص)", side: "الجهة الشرقية", desc: "الباب الرئيسية، تقع جهة مسجد الكوفة، مصنوعة من الصاج البورمي وتضم شعار النخلة." },
              { name: "باب الإمام المرتضى (ع)", side: "الجهة الشمالية", desc: "مقابل شارع الكوفة، سميت نسبة لحديث الإمام علي: 'يا ميثم إذن تكون معي في درجتي'." },
              { name: "باب الإمام الباقر (ع)", side: "الجهة الجنوبية", desc: "مقابل المقبرة القديمة، سميت لقول الإمام الباقر: 'إني لأحبه حباً شديداً'." },
            ].map((door, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] text-center transition-colors hover:border-[#c9a227]/30">
                <DoorOpen className="w-8 h-8 text-[#c9a227] mx-auto mb-6 opacity-40" />
                <h4 className="text-xl font-bold mb-2">{door.name}</h4>
                <p className="text-[#c9a227] text-[10px] font-bold uppercase mb-4 tracking-widest">{door.side}</p>
                <p className="text-white/40 text-sm leading-relaxed">{door.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Inscription Section */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote className="w-12 h-12 text-[#c9a227]/20 mx-auto mb-10" />
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed italic font-display">
            "ما مات ميثم إنما ماتوا همُ .. وَكَأنَّ حَبلَ الَصلبِ يَنبُضُ مُعلِناً"
          </p>
          <div className="mt-10 pt-10 border-t border-white/5">
            <p className="text-white/40 text-sm leading-relaxed">
              وُجدت على القبر صخرة تأريخية يعود تأريخها لعام <span className="text-[#c9a227]">1320 هـ</span> نُقش عليها: <br />
              "هذا المرقد المطهر والمضجع المنور لصاحب أمير المؤمنين (ع) ميثم التمار"
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}