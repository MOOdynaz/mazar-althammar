import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Youtube, Facebook, ArrowLeft } from 'lucide-react'

// استيراد الشعار من مجلد الأصول
import mazarLogo from '../assets/images/logo.png'

const quickLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'نبذة عن ميثم التمار', path: '/about' },
  { name: 'أقسام المزار', path: '/departments' },
  { name: 'عمارة المزار', path: '/architecture' }, // القسم الجديد
  { name: 'إصدارات المزار', path: '/publications' },
  { name: 'الفيديوهات', path: '/videos' },
  { name: 'المقالات', path: '/articles' },
  { name: 'معرض الصور', path: '/gallery' },
]

export default function Footer() {
  return (
    <footer className="bg-[#05140d] border-t border-[#c9a227]/20 relative overflow-hidden">
      {/* لمسة جمالية خلفية (النمط الإسلامي) */}
      <div className="absolute inset-0 islamic-pattern opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-right" dir="rtl">
          
          {/* Section 1: Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-[#c9a227]/30 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <img 
                  src={mazarLogo} 
                  alt="شعار مزار ميثم التمار" 
                  className="relative w-20 h-20 object-contain filter drop-shadow-[0_0_10px_rgba(201,162,39,0.4)]" 
                />
              </div>
              <div>
                <h3 className="text-xl font-bold gold-gradient font-display"> مزار ميثم التمار رضوان الله عليه </h3>
                <p className="text-[10px] text-[#c9a227]/70 uppercase tracking-widest font-bold">الأمانة العامة للمزارات الشيعية</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed text-justify">
              الموقع الرسمي لمزار الصحابي الجليل ميثم بن يحيى التمار (رضي الله عنه) في الكوفة المقدسة. نسعى من خلال هذه المنصة لنشر سيرة صاحب المبدأ وثائر الكلمة وتوثيق النهضة العمرانية للمزار الشريف.
            </p>
          </div>

          {/* Section 2: Navigation Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white border-r-4 border-[#c9a227] pr-3">روابط سريعة</h4>
            <ul className="grid grid-cols-1 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.path} className="group">
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-[#c9a227] flex items-center gap-2 transition-all duration-300 text-sm"
                  >
                    <ArrowLeft className="w-3 h-3 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white border-r-4 border-[#c9a227] pr-3">معلومات التواصل</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#c9a227]/10 transition-colors">
                  <MapPin className="w-5 h-5 text-[#c9a227]" />
                </div>
                <span className="text-white/60 text-sm pt-1">العراق، الكوفة المقدسة، قرب مسجد الكوفة المعظم</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#c9a227]/10 transition-colors">
                  <Phone className="w-5 h-5 text-[#c9a227]" />
                </div>
                <span className="text-white/60 text-sm font-sans" dir="ltr">+964 760 159 7895</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#c9a227]/10 transition-colors">
                  <Mail className="w-5 h-5 text-[#c9a227]" />
                </div>
                <span className="text-white/60 text-sm font-sans">info@mazaraltammar.com</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#c9a227]/10 transition-colors">
                  <Clock className="w-5 h-5 text-[#c9a227]" />
                </div>
                <span className="text-white/60 text-sm">أبواب المزار مفتوحة للزائرين على مدار الساعة</span>
              </li>
            </ul>
          </div>

          {/* Section 4: Social & Tech */}
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-r-4 border-[#c9a227] pr-3">تابعنا عبر</h4>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@mazar.altammar" target="_blank" rel="noopener noreferrer" 
                   className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all duration-300 group shadow-lg border border-white/10">
                  <Youtube className="w-5 h-5 text-white/70 group-hover:text-white" />
                </a>
                <a href="https://web.facebook.com/mazar.altammar" target="_blank" rel="noopener noreferrer"
                   className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group shadow-lg border border-white/10">
                  <Facebook className="w-5 h-5 text-white/70 group-hover:text-white" />
                </a>
              </div>
            </div>
            
            <div className="p-5 rounded-2xl bg-[#c9a227]/5 border border-[#c9a227]/20 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#c9a227]/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-[#c9a227]/20 transition-all" />
              <p className="text-[10px] text-[#c9a227] font-black mb-1 tracking-tighter uppercase">الإشراف الفني والبرمجي</p>
              <p className="text-xs text-white/90 font-bold">شعبة تكنولوجيا المعلومات</p>
              <p className="text-[10px] text-white/40 mt-1 uppercase font-medium tracking-widest">Technical Department</p>
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="mt-20 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[11px] text-white/30 text-center md:text-right">
              جميع الحقوق محفوظة لمزار ميثم بن يحيى التمار رضي الله عنه © {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-6 text-[10px] text-white/30 uppercase font-bold tracking-widest">
              <Link to="/privacy" className="hover:text-[#c9a227] transition-colors">Privacy Policy</Link>
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <Link to="/terms" className="hover:text-[#c9a227] transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}