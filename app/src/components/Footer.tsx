import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Youtube, Facebook } from 'lucide-react'

const quickLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'نبذة عن ميثم التمار', path: '/about' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              {/* الشعار بدلاً من الحرف */}
              <img src="/logo.png" alt="Logo" className="w-14 h-14 object-contain" />
              <div>
                <h3 className="text-lg font-bold gold-gradient leading-tight">مزار ميثم التمار</h3>
                <p className="text-[10px] text-[#c9a227]/70 uppercase tracking-wider">الأمانة العامة للمزارات</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 text-justify">
              الموقع الرسمي لمزار الصحابي الجليل ميثم بن يحيى التمار (رضي الله عنه) في الكوفة المقدسة، أحد أصحاب أمير المؤمنين عليه السلام وثائر الكلمة في وجه الظلم.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-r-4 border-[#c9a227] pr-3">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-[#c9a227] hover:translate-x-[-5px] transition-all inline-block text-sm"
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
                <MapPin className="w-5 h-5 text-[#c9a227] group-hover:scale-110 transition-transform" />
                <span className="text-white/60 text-sm">العراق، الكوفة المقدسة، قرب مسجد الكوفة</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-[#c9a227] group-hover:scale-110 transition-transform" />
                <span className="text-white/60 text-sm" dir="ltr">+964 760 159 7895</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-[#c9a227] group-hover:scale-110 transition-transform" />
                <span className="text-white/60 text-sm">info@mazaraltammar.com</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Clock className="w-5 h-5 text-[#c9a227] group-hover:scale-110 transition-transform" />
                <span className="text-white/60 text-sm">أبواب المزار مفتوحة دائماً</span>
              </li>
            </ul>
          </div>

          {/* Social Media & Tech Office */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-r-4 border-[#c9a227] pr-3">تابعنا</h4>
            <div className="flex gap-4 mb-8">
              <a href="https://youtube.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-colors group">
                <Youtube className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
              <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors group">
                <Facebook className="w-5 h-5 text-white/70 group-hover:text-white" />
              </a>
            </div>
            <div className="p-4 rounded-xl bg-[#c9a227]/5 border border-[#c9a227]/20">
              <p className="text-[10px] text-[#c9a227] font-bold mb-1">تطوير وإشراف</p>
              <p className="text-xs text-white/70 font-medium tracking-widest">شعبة تكنولوجيا المعلومات</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center md:text-right">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/30 text-[11px]">
              حقوق النشر محفوظة لمزار ميثم بن يحيى التمار رضي الله عنه © {new Date().getFullYear()}
            </p>
            <div className="flex gap-6 text-[11px] text-white/30">
              <span className="hover:text-[#c9a227] cursor-pointer">سياسة الخصوصية</span>
              <span className="hover:text-[#c9a227] cursor-pointer">شروط الاستخدام</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}