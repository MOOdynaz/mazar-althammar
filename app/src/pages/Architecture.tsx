import { motion } from 'framer-motion'
import { 
  Box, Ruler, Layers, History, Anchor, Hexagon, DoorOpen, Quote, Sparkles, Maximize2, Layout, Image as ImageIcon
} from 'lucide-react'
// --- 2. استيراد صور المعرض (50 سطراً لضمان ظهور الصور 100%) ---
// القسم الأول: صور قديمة (37-50)
import img37 from '../assets/images/37.jpg'; import img38 from '../assets/images/38.jpg';
import img39 from '../assets/images/39.jpg'; import img40 from '../assets/images/40.jpg';
import img41 from '../assets/images/41.jpg'; import img42 from '../assets/images/42.jpg';
import img43 from '../assets/images/43.jpg'; import img44 from '../assets/images/44.jpg';
import img45 from '../assets/images/45.jpg'; import img46 from '../assets/images/46.jpg';
import img47 from '../assets/images/47.jpg'; import img48 from '../assets/images/48.jpg';
import img49 from '../assets/images/49.jpg'; import img50 from '../assets/images/50.jpg';
import img66 from '../assets/images/66.jpg'
import img67 from '../assets/images/67.jpg'
import img68 from '../assets/images/68.jpg'
import img69 from '../assets/images/69.jpg'
import img70 from '../assets/images/70.jpg'

// القسم الثاني: ما قبل الإعمار (51-65)
import img51 from '../assets/images/51.jpg'; import img52 from '../assets/images/52.jpg';
import img53 from '../assets/images/53.jpg'; import img54 from '../assets/images/54.jpg';
import img55 from '../assets/images/55.jpg'; import img56 from '../assets/images/56.jpg';
import img57 from '../assets/images/57.jpg'; import img58 from '../assets/images/58.jpg';
import img59 from '../assets/images/59.jpg'; import img60 from '../assets/images/60.jpg';
import img61 from '../assets/images/61.jpg'; import img62 from '../assets/images/62.jpg';
import img63 from '../assets/images/63.jpg'; import img64 from '../assets/images/64.jpg';
import img65 from '../assets/images/65.jpg';

// القسم الثالث: صور حديثة (1-20)
import img1 from '../assets/images/1.jpg'; import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg'; import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg'; import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg'; import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg'; import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.jpg'; import img12 from '../assets/images/12.jpg';
import img13 from '../assets/images/13.jpg'; import img14 from '../assets/images/14.jpg';
import img15 from '../assets/images/15.jpg'; import img16 from '../assets/images/16.jpg';
import img17 from '../assets/images/17.jpg'; import img18 from '../assets/images/18.jpg';
import img19 from '../assets/images/19.jpg'; import img20 from '../assets/images/20.jpg';

// --- 3. تنظيم المصفوفات للعرض ---
const archImages = [
  { src: img66, title: "حجر القبر القديم" },
  { src: img67, title: "حجر القبر الجديد" },
  { src: img68, title: "المرقد الشريف بعد الاعمار" },
  { src: img69, title: "المرقد الشريف بعد الاعمار" },
  { src: img70, title: "اروقة الضريح بعد الاعمار" },

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

const gallerySections = [
  { 
    title: "صور قديمة للمزار", 
    images: [img37, img38, img39, img40, img41, img42, img43, img44, img45, img46, img47, img48, img49, img50],
    color: "from-amber-900/20" 
  },
  { 
    title: "المزار ما قبل الإعمار الأخير", 
    images: [img51, img52, img53, img54, img55, img56, img57, img58, img59, img60, img61, img62, img63, img64, img65],
    color: "from-blue-900/20" 
  },
  { 
    title: "صور حديثة للمزار", 
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20],
    color: "from-emerald-900/20" 
  },
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#05140d] via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute bottom-4 right-4"><p className="text-[10px] font-bold text-white/90 uppercase tracking-tighter">{img.title}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- معرض الصور المقسم (النسخة النهائية) --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-20 text-center">
            <ImageIcon className="text-[#c9a227] w-12 h-12 opacity-50" />
            <h2 className="text-4xl md:text-5xl font-bold font-display gold-gradient">معرض عمارة المزار</h2>
            <div className="w-24 h-1 bg-[#c9a227] rounded-full opacity-30" />
          </div>

          <div className="space-y-32">
            {gallerySections.map((section, idx) => (
              <div key={idx} className="space-y-10">
                <div className={`p-6 border-r-4 border-[#c9a227] bg-gradient-to-l ${section.color} to-transparent rounded-l-2xl`}>
                  <h3 className="text-3xl font-bold text-white/90">{section.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                  {section.images.map((imgSrc, imgIdx) => (
                    <motion.div
                      key={imgIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group shadow-2xl"
                    >
                      <img 
                        src={imgSrc} 
                        alt={`${section.title} - ${imgIdx + 1}`} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#c9a227]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <Maximize2 className="text-[#c9a227] w-8 h-8 drop-shadow-lg" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* باقي الأقسام الثابتة */}
      <section className="py-24 bg-[#05140d]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 font-display">أبواب المقام الشريف</h2>
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

      <section className="py-32 border-t border-white/5 bg-black/20">
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