import { motion } from 'framer-motion'
import { Book as BookIcon, Download, Eye, Search, FileText } from 'lucide-react'
import { useState } from 'react'

const publications = [
  {
    id: 1,
    title: 'ميثم التمار.. ثائر الكلمة والولاء',
    author: 'اللجنة العلمية في المزار',
    year: '2024',
    type: 'كتاب',
    description: 'دراسة تاريخية شاملة تتناول حياة الصحابي الجليل ميثم بن يحيى التمار وأدواره السياسية والدينية.',
    image: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f07?auto=format&fit=crop&q=80&w=400', // يمكنك استبدالها بغلاف الكتاب الحقيقي
  },
  {
    id: 2,
    title: 'مجلة ميثم (العدد الأول)',
    author: 'شعبة الإعلام الثقافي',
    year: '2025',
    type: 'مجلة دورية',
    description: 'مجلة فصلية تتناول البحوث القرآنية والتاريخية والنشاطات الخاصة بالمزار الشريف.',
    image: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    title: 'تفسير القرآن لميثم التمار (جمع وتحقيق)',
    author: 'قسم التحقيق والدراسات',
    year: '2023',
    type: 'مجلد بحثي',
    description: 'جمع المرويات التفسيرية المسندة للصحابي ميثم التمار رضي الله عنه مع دراسة تحليلية.',
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df643?auto=format&fit=crop&q=80&w=400',
  }
]

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredDocs = publications.filter(doc => 
    doc.title.includes(searchQuery) || doc.author.includes(searchQuery)
  )

  return (
    <div className="min-h-screen pt-24 bg-[#05140d]">
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 islamic-pattern opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold gold-gradient mb-6">إصدارات المزار</h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              نافذة المزار الثقافية والعلمية التي توثق البحوث والكتب والمجلات الصادرة عن الشعب العلمية والفكرية.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-16 relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c9a227]" />
            <input
              type="text"
              placeholder="ابحث عن كتاب أو إصدار..."
              className="w-full pr-12 pl-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-[#c9a227] outline-none transition-all"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocs.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card group flex flex-col h-full border border-white/5 hover:border-[#c9a227]/30 transition-all overflow-hidden"
              >
                {/* Book Cover Placeholder */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img src={doc.image} alt={doc.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05140d] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 bg-[#c9a227] text-[#05140d] px-3 py-1 rounded-lg text-xs font-bold">
                    {doc.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#c9a227] transition-colors">{doc.title}</h3>
                  <div className="flex items-center gap-2 text-white/40 text-xs mb-4">
                    <FileText className="w-3 h-3" /> {doc.author}
                    <span className="mx-2">|</span>
                    {doc.year}
                  </div>
                  <p className="text-white/50 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {doc.description}
                  </p>
                  
                  {/* Actions */}
                  <div className="mt-auto flex gap-3">
                    <button className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all border border-white/10">
                      <Eye className="w-4 h-4 text-[#c9a227]" /> معاينة
                    </button>
                    <button className="flex-1 bg-[#c9a227] hover:bg-[#e5c035] text-[#05140d] py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#c9a227]/10">
                      <Download className="w-4 h-4" /> تحميل
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}