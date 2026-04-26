import { motion } from 'framer-motion'
import { FileText, Download, Eye, Search, BookOpen, FileType } from 'lucide-react'
import { useState } from 'react'

// مصفوفة البيانات - تضم الآن الإصدارين اللذين أرسلتهما
const publications = [
  {
    id: 1,
    title: 'في رحاب ميثم التمار (رض)',
    author: 'الأمانة الخاصة لمزار ميثم التمار - الشؤون الفكرية والثقافية',
    year: '2024',
    category: 'سيرة وكرامات',
    description: 'إصدار متميز يتناول حياة الصحابي الجليل ميثم بن يحيى التمار (رض)، كراماته الباهرة، والزيارة المأثورة المروية في حقه.',
    fileUrl: 'https://files.catbox.moe/0wf0nn.pdf',
    fileSize: '1.5 MB'
  },
  {
    id: 2,
    title: 'ميثم التمار.. صدى الحق وشهيد الولاء',
    author: 'الأمانة الخاصة لمزار ميثم التمار',
    year: '2024',
    category: 'تاريخ وتراث',
    description: 'بحث معمق يسلّط الضوء على المواقف البطولية للشهيد ميثم التمار وثباته على نهج أمير المؤمنين عليه السلام حتى نيله الشهادة.',
    fileUrl: 'https://files.catbox.moe/7d8uzy.pdf',
    fileSize: '1.2 MB'
  }
]

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPubs = publications.filter(pub => 
    pub.title.includes(searchTerm) || pub.category.includes(searchTerm)
  )

  return (
    <div className="min-h-screen bg-[#05140d] text-white py-24 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-20 h-20 bg-[#c9a227]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#c9a227]/20">
              <BookOpen className="w-10 h-10 text-[#c9a227]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">المكتبة الرقمية</h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              تصفح وحمل الإصدارات والكتب الصادرة عن الأمانة الخاصة لمزار ميثم بن يحيى التمار (رض)
            </p>
          </motion.div>

          {/* Search Bar */}
          <div className="mt-12 max-w-xl mx-auto relative">
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-[#c9a227] w-5 h-5 opacity-50" />
            <input 
              type="text"
              placeholder="ابحث في العناوين أو التصنيفات..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pr-14 pl-6 focus:outline-none focus:border-[#c9a227] focus:bg-white/[0.05] transition-all text-lg font-display"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Publications List */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {filteredPubs.map((pub, index) => (
            <motion.div 
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-l from-white/[0.03] to-transparent hover:from-[#c9a227]/5 border border-white/5 hover:border-[#c9a227]/30 rounded-[2.5rem] p-8 md:p-10 transition-all flex flex-col md:flex-row items-center gap-10 shadow-2xl"
            >
              {/* File Icon Illustration */}
              <div className="w-40 h-52 bg-gradient-to-br from-[#0a261a] to-[#05140d] rounded-3xl border border-white/10 flex flex-col items-center justify-center shrink-0 shadow-2xl relative overflow-hidden group-hover:border-[#c9a227]/50 transition-colors">
                <div className="absolute top-0 right-0 w-10 h-10 bg-white/5 rounded-bl-3xl border-b border-l border-white/10" />
                <FileType className="w-16 h-16 text-[#c9a227] mb-3 opacity-80" />
                <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase">PDF DOCUMENT</span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#c9a227]/20" />
              </div>

              {/* Content */}
              <div className="flex-grow text-center md:text-right">
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                  <span className="px-4 py-1 rounded-full bg-[#c9a227]/10 text-[#c9a227] text-xs font-bold border border-[#c9a227]/20">
                    {pub.category}
                  </span>
                  <span className="text-white/30 text-xs mt-1">حجم الملف: {pub.fileSize}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-[#c9a227] transition-colors font-display leading-tight">{pub.title}</h3>
                <p className="text-white/40 text-sm mb-6 font-display">إصدار: {pub.author}</p>
                <p className="text-white/60 text-lg leading-relaxed mb-0">
                  {pub.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-row md:flex-col gap-4 shrink-0 w-full md:w-auto">
                <button 
                  onClick={() => window.open(pub.fileUrl, '_blank')}
                  className="flex-1 md:w-44 flex items-center justify-center gap-3 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-bold text-sm"
                >
                  <Eye className="w-5 h-5 text-[#c9a227]" /> قراءة الكتاب
                </button>
                <a 
                  href={pub.fileUrl}
                  download={`${pub.title}.pdf`}
                  className="flex-1 md:w-44 flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#c9a227] hover:bg-[#e0b83a] text-[#05140d] transition-all font-bold text-sm shadow-xl shadow-[#c9a227]/10"
                >
                  <Download className="w-5 h-5" /> تحميل النسخة
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPubs.length === 0 && (
          <div className="text-center py-32 border border-dashed border-white/10 rounded-[3rem]">
            <FileText className="w-16 h-16 text-white/10 mx-auto mb-4" />
            <p className="text-white/30">عذراً، لا توجد نتائج للبحث حالياً.</p>
          </div>
        )}
      </div>
    </div>
  )
}