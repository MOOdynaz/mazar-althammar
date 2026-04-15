import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const quickLinks = [
  { name: 'الرئيسية', path: '/' },
  { name: 'نبذة عن ميثم التمار', path: '/about' },
  { name: 'الفيديوهات', path: '/videos' },
  { name: 'المقالات', path: '/articles' },
  { name: 'معرض الصور', path: '/gallery' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0d3322] border-t border-[#c9a227]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a227] to-[#e5c035] flex items-center justify-center">
                <span className="text-[#0d3322] font-bold text-xl">م</span>
              </div>
              <div>
                <h3 className="text-lg font-bold gold-gradient">ميثم بن يحيى التمار</h3>
                <p className="text-xs text-white/60">رضي الله عنه</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              مزار الصحابي الجليل ميثم بن يحيى التمار (رضي الله عنه) في الكوفة، 
              أحد أصحاب أمير المؤمنين عليه السلام وأول من فسر القرآن بالتأويل.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gold-gradient">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-[#c9a227] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gold-gradient">معلومات التواصل</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c9a227] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  الكوفة، محافظة النجف، العراق
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                <span className="text-white/70 text-sm">+964 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                <span className="text-white/70 text-sm">info@maitham-altammar.iq</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                <span className="text-white/70 text-sm">مفتوح على مدار الساعة</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 gold-gradient">تابعنا</h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.youtube.com/@mazar.altammar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-[#c9a227]/20 transition-colors"
              >
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-white/70 text-sm">يوتيوب</span>
              </a>
              <a
                href="https://web.facebook.com/mazar.altammar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-[#c9a227]/20 transition-colors"
              >
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-white/70 text-sm">فيسبوك</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-right">
              جميع الحقوق محفوظة © 2026 مزار ميثم بن يحيى التمار
            </p>
            <p className="text-white/50 text-sm">
شعبة تكنولوجيا المعلومات             </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
