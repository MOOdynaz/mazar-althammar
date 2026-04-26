import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Users, Building, Image as ImageIcon, Sparkles } from 'lucide-react'

// استيراد الصور القديمة
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'
import img6 from '../assets/images/6.jpg'
import img7 from '../assets/images/7.jpg'
import img8 from '../assets/images/8.jpg'
import img9 from '../assets/images/9.jpg'
import img10 from '../assets/images/10.jpg'
import img11 from '../assets/images/11.jpg'
import img12 from '../assets/images/12.jpg'
import img13 from '../assets/images/13.jpg'
import img14 from '../assets/images/14.jpg'

// استيراد صور الزائرين
import img25 from '../assets/images/25.jpg'
import img26 from '../assets/images/26.jpg'
import img27 from '../assets/images/27.jpg'
import img28 from '../assets/images/28.jpg'
import img29 from '../assets/images/29.jpg'
import img30 from '../assets/images/30.jpg'
import img31 from '../assets/images/31.jpg'

// استيراد صور الذكاء الاصطناعي (من 32 إلى 36)
import img32 from '../assets/images/32.jpg'
import img33 from '../assets/images/33.jpg'
import img34 from '../assets/images/34.jpg'
import img35 from '../assets/images/35.jpg'
import img36 from '../assets/images/36.jpg'

const categories = [
  { id: 'all', name: 'الكل', icon: Camera },
  { id: 'shrine', name: 'المزار', icon: Building },
  { id: 'visitors_photos', name: 'صور الزائرين', icon: ImageIcon },
  { id: 'ai_photos', name: 'ذكاء اصطناعي', icon: Sparkles },
  { id: 'visitors', name: 'توافد المؤمنين', icon: Users },
  { id: 'location', name: 'الموقع', icon: MapPin },
]

const galleryImages = [
  { id: 1, title: 'ضريح ميثم التمار', description: 'الضريح المقدس للصحابي الجليل', category: 'shrine', src: img1 },
  { id: 2, title: 'المزار من الخارج', description: 'واجهة مزار ميثم التمار', category: 'shrine', src: img2 },
  { id: 3, title: 'توافد الزائرين', description: 'المؤمنون يزورون المزار', category: 'visitors', src: img3 },
  { id: 4, title: 'القبة الذهبية', description: 'القبة الذهبية للمزار', category: 'shrine', src: img4 },
  { id: 5, title: 'المنبر الشريف', description: 'منبر المزار الداخلي', category: 'shrine', src: img5 },
  { id: 6, title: 'الكوفة المقدسة', description: 'إطلالة على مدينة الكوفة', category: 'location', src: img6 },
  { id: 7, title: 'جموع الموالين', description: 'جموع المؤمنين في الصحن', category: 'visitors', src: img7 },
  { id: 8, title: 'الحرم الداخلي', description: 'أروقة الحرم الشريف', category: 'shrine', src: img8 },
  { id: 9, title: 'استراحة الزوار', description: 'الخدمات المقدمة للزائرين', category: 'visitors', src: img9 },
  { id: 10, title: 'صلاة الجماعة', description: 'المؤمنون يؤدون الصلاة', category: 'visitors', src: img10 },
  { id: 11, title: 'مدخل المزار', description: 'بوابة الدخول الرئيسية', category: 'location', src: img11 },
  { id: 12, title: 'النقوش الإسلامية', description: 'زخارف القبة والمنائر', category: 'shrine', src: img12 },
  { id: 13, title: 'أجواء إيمانية', description: 'لحظات من زيارة الموالين', category: 'visitors', src: img13 },
  { id: 14, title: 'خدمة الزوار', description: 'جانب من الخدمات الميدانية', category: 'visitors', src: img14 },
  
  // صور الزائرين
  { id: 25, title: 'عدسة الزوار', description: 'توثيق الزيارة بعدسة المحبين', category: 'visitors_photos', src: img25 },
  { id: 26, title: 'زاوية خاصة', description: 'صورة تذكارية من داخل الصحن', category: 'visitors_photos', src: img26 },
  { id: 27, title: 'مشهد للمزار', description: 'المزار الشريف كما يراه الزائر', category: 'visitors_photos', src: img27 },
  { id: 28, title: 'لحظة دخول', description: 'صور الزوار عند البوابات الشريفة', category: 'visitors_photos', src: img28 },
  { id: 29, title: 'لقطة علوية', description: 'جمال القبة من زاوية أحد الزوار', category: 'visitors_photos', src: img29 },
  { id: 30, title: 'في رحاب ميثم', description: 'لقطة بعدسة أحد الزائرين للمزار', category: 'visitors_photos', src: img30 },
  { id: 31, title: 'ذكرى الزيارة', description: 'صورة من أرشيف الزائرين الكرام', category: 'visitors_photos', src: img31 },

  // صور الذكاء الاصطناعي (تمت إضافة الصور من 33 إلى 36)
  { id: 32, title: 'تجسيد فني (1)', description: 'لوحة فنية للمزار بواسطة الذكاء الاصطناعي', category: 'ai_photos', src: img32 },
  { id: 33, title: 'تجسيد فني (2)', description: 'رؤية فنية رقمية للمرقد الشريف', category: 'ai_photos', src: img33 },
  { id: 34, title: 'تجسيد فني (3)', description: 'تصميم تخيلي لجماليات العمارة الإسلامية', category: 'ai_photos', src: img34 },
  { id: 35, title: 'تجسيد فني (4)', description: 'إبداع بصري يجسد هيبة المقام', category: 'ai_photos', src: img35 },
  { id: 36, title: 'تجسيد فني (5)', description: 'لوحة رقمية مستوحاة من عبق التاريخ', category: 'ai_photos', src: img36 },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = galleryImages.filter(
    (image) => activeCategory === 'all' || image.category === activeCategory
  )

  const currentIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1

  const goToPrevious = () => {
    if (currentIndex > 0) setSelectedImage(filteredImages[currentIndex - 1])
  }

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) setSelectedImage(filteredImages[currentIndex + 1])
  }

  return (
    <div className="min-h-screen pt-20 bg-[#05140d]">
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto text-right" dir="rtl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium mb-6">
              معرض الصور
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white font-display">
              صور من <span className="gold-gradient">المزار الشريف</span>
            </h1>
          </motion.div>

          {/* أزرار الفئات */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all shadow-xl ${
                  activeCategory === category.id
                    ? 'bg-[#c9a227] text-[#05140d] scale-105'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* شبكة الصور */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  layout
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group bg-stone-900 border border-white/5 shadow-2xl"
                >
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                    <h3 className="text-[#c9a227] font-bold text-lg">{image.title}</h3>
                    <p className="text-white/80 text-xs line-clamp-2">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* نافذة العرض الكبيرة (Lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a227] hover:text-[#05140d] transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all text-white z-20"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}
            {currentIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-all text-white z-20"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-stone-900 rounded-3xl flex items-center justify-center mb-6 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <div className="text-center" dir="rtl">
                <h3 className="text-3xl font-bold text-[#c9a227] mb-2">{selectedImage.title}</h3>
                <p className="text-white/60 text-lg">{selectedImage.description}</p>
                <div className="mt-4 text-white/30 text-sm">
                  صورة {currentIndex + 1} من {filteredImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}