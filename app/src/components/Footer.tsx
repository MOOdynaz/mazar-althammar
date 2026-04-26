import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Youtube, Facebook } from 'lucide-react'

// استيراد الشعار
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
      {/* لمسة جمالية خلفية */}
      <div className="absolute inset-0 islamic-pattern opacity-5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-right" dir="rtl">
          
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-[#c9a227]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <img 
                  src={mazarLogo} 
                  alt="شعار مزار ميثم التمار" 
                  className="relative w-16 h-16 object-contain filter drop-shadow-[0_0_8px_rgba(201,162,39,0.3)]" 
                />
              </div>
              <div>
                <h3 className="text-xl font-bold gold-gradient leading-tight font-display">مزار ميثم التمار</h3>
                <p className="text-[10px] text-[#c9a227]/70 uppercase tracking-wider font-medium">الأمانة العامة للمزارات الشيعية</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 text-justify">
              الموقع الرسمي لمزار الصحابي الجليل ميثم بن يحيى التمار (رضي الله عنه) في الكوفة المقدسة، من خواص أصحاب أمير المؤمنين عليه السلام وثائر الكلمة في وجه الظلم.
            </p>
          </div>

          {/* Quick Links - تم تحديث الروابط هنا */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-r-4 border-[#c9a227] pr-3">روابط سريعة</h4>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-[#c9a227] hover:pr-2 transition-all duration-300 inline-block text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-r-4 border-[#c9a227] pr-3">معلومات التواصل</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-[#c9a227] group-hover:scale-110 transition-transform mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed text-right">العراق، الكوفة المقدسة، قرب مسجد الكوفة</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-[#c9a227] group-hover:scale-110 transition-transform" />
                <span className="text-white/60 text-sm font-sans" dir="ltr">+964 760 159 7895</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-[#c9a227] group-hover:scale-110 transition-transform" />
                <span className="text-white/60 text-sm font-sans">info@mazaraltammar.com</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Clock className="w-5 h-5 text-[#c9a227] group-hover:scale-110 transition-transform" />
                <span className="text-white/60 text-sm">أبواب المزار مفتوحة دائماً للزائرين</span>
              </li>
            </ul>
          </div>

          {/* Social Media & Tech Office */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-r-4 border-[#c9a227] pr-3">تابعنا</h4>
            <div className="flex gap-4 mb-8">
              <a href="https://www.youtube.com/@mazar.altammar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all duration-300 group shadow-lg">
                <Youtube className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
              <a href="https://web.facebook.com/mazar.altammar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group shadow-lg">
                <Facebook className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#c9a227]/10 to-transparent border border-[#c9a227]/20 shadow-inner">
              <p className="text-[10px] text-[#c9a227] font-bold mb-1 opacity-80">إشراف وتطوير</p>
              <p className="text-xs text-white/80 font-bold tracking-wider">شعبة تكنولوجيا المعلومات</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/30">
            <p className="text-center md:text-right">
              جميع الحقوق محفوظة لمزار ميثم بن يحيى التمار رضي الله عنه © {new Date().getFullYear()}
            </p>
            <div className="flex gap-8">
              <span className="hover:text-[#c9a227] transition-colors cursor-pointer underline-offset-4 hover:underline">سياسة الخصوصية</span>
              <span className="hover:text-[#c9a227] transition-colors cursor-pointer underline-offset-4 hover:underline">شروط الاستخدام</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}