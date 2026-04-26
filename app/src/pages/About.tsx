import { motion } from 'framer-motion'
import { 
  MapPin, 
  Navigation, 
  History, 
  Quote, 
  Users,
  BookOpen,
  Sparkles,
  ScrollText,
  ShieldCheck,
  MessageCircle
} from 'lucide-react'

const mazarLogo = '/logo.png'; 

export default function About() {
  // إحداثيات ومعلومات الموقع (ثابتة كما طلبت)
  const lat = 32.0264024;
  const lng = 44.3951297;
  const directMapUrl = "https://www.google.com/maps/dir/?api=1&destination=32.0264024,44.3951297";

  return (
    <div className="min-h-screen pt-20 bg-[#05140d] text-white overflow-x-hidden font-display">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-right" dir="rtl">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center mb-24"
          >
            <span className="inline-block px-6 py-2 rounded-full bg-[#c9a227]/10 text-[#c9a227] text-sm font-bold mb-6 border border-[#c9a227]/20 tracking-widest">
              أصفياء أصحاب أمير المؤمنين (عليه السلام)
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="gold-gradient">ميثم بن يحيى التمّار</span>
            </h1>
            <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed italic">
              "حواريّ عليّ، وعالم التأويل، وشهيد الولاية الذي صلب دفاعاً عن الحق"
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* القائمة الجانبية - الاقتباسات والأحاديث */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="lg:col-span-4 space-y-8 lg:sticky lg:top-32"
            >
              {/* بطاقة الشعار */}
              <div className="rounded-[2.5rem] overflow-hidden glass-card bg-gradient-to-br from-[#1a5f3f]/40 to-[#0d3322]/40 border border-[#c9a227]/20 p-10 text-center shadow-2xl">
                <div className="relative mb-8">
                  <div className="absolute -inset-8 bg-[#c9a227]/15 rounded-full blur-3xl opacity-50"></div>
                  <img src={mazarLogo} alt="Logo" className="relative w-44 h-44 mx-auto object-contain drop-shadow-[0_0_20px_rgba(201,162,39,0.5)]" />
                </div>
                <h3 className="text-[#c9a227] text-xl font-bold mb-2">مزار ميثم التمار</h3>
                <p className="text-white/40 text-sm">الكوفة المقدسة</p>
              </div>

              {/* أحاديث أهل البيت */}
              <div className="space-y-6">
                <h4 className="text-[#c9a227] font-bold flex items-center gap-2 mr-2">
                  <MessageCircle className="w-5 h-5" /> ميثم في أحاديث المعصومين
                </h4>
                
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-[#c9a227]/30 transition-all">
                  <p className="text-sm leading-relaxed text-white/80 italic font-serif">
                    "أين حواري علي بن أبي طالب؟ فيقوم عمرو بن الحمق، ومحمد بن أبي بكر، وميثم بن يحيى التمار.."
                  </p>
                  <span className="text-[10px] text-[#c9a227] mt-3 block">- الإمام موسى الكاظم (عليه السلام)</span>
                </div>

                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-[#c9a227]/30 transition-all">
                  <p className="text-sm leading-relaxed text-white/80 italic font-serif">
                    "إنّي أُحبّك وأُحبّ أباك حبّاً شديداً"
                  </p>
                  <span className="text-[10px] text-[#c9a227] mt-3 block">- الإمام الباقر (ع) لصالح بن ميثم</span>
                </div>
              </div>
            </motion.div>

            {/* المحتوى الرئيسي - السيرة المفصلة */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="lg:col-span-8 space-y-16"
            >
              {/* قسم السيرة والأصل */}
              <section className="space-y-8">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="p-3 bg-[#c9a227]/10 rounded-2xl">
                    <History className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <h2 className="text-4xl font-bold gold-gradient">الأصل والتسمية</h2>
                </div>
                
                <div className="bg-white/[0.02] p-8 rounded-[2rem] border border-white/5 leading-relaxed text-xl text-white/80 space-y-6">
                  <p>
                    يروي الشيخ المفيد في "الإرشاد": أن ميثماً كان عبداً لامرأة من بني أسد، فاشتراه أمير المؤمنين (ع) وأعتقه.
                  </p>
                  <div className="bg-[#c9a227]/5 p-6 rounded-2xl border-r-4 border-[#c9a227] italic">
                    قال له الامام (ع): "ما اسمك؟" فقال: سالم. فقال (ع): "أخبرني رسول الله (ص) أن اسمك الذي سمّاك به أبواك في العجم ميثم".
                    فقال: صدق الله ورسوله، وصدقت يا أمير المؤمنين، والله إنه لإسمي.
                  </div>
                  <p>
                    بناءً على أمر الإمام، عاد ميثم لاسمه الأصلي واكتنى بـ "أبي سالم". لُقب بـ "التمار" لأنه كان يبيع التمر في دكانه بالكوفة، وكان دكانه مقصداً للمؤمنين.
                  </p>
                </div>
              </section>

              {/* قسم المنزلة العلمية */}
              <section className="space-y-8">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="p-3 bg-[#c9a227]/10 rounded-2xl">
                    <BookOpen className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <h2 className="text-4xl font-bold gold-gradient">المنزلة العلمية والتفسير</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h4 className="text-[#c9a227] font-bold mb-4 flex items-center gap-2">
                      <ScrollText className="w-5 h-5" /> تفسير القرآن
                    </h4>
                    <p className="text-white/70 leading-relaxed">
                      روى الكشي لقاءه بابن عباس، حيث قال له ميثم: "يا ابن عباس سلني ما شئت من تفسير القرآن، فإني قرأت تنزيله على أمير المؤمنين وعلمني تأويله". فأقبل ابن عباس يكتب عنه في القرطاس.
                    </p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h4 className="text-[#c9a227] font-bold mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5" /> شرطة الخميس
                    </h4>
                    <p className="text-white/70 leading-relaxed">
                      يُعد ميثم من أصفياء أصحاب الإمام علي (ع) في "شرطة الخميس"، ومن حوارييه المقربين، وصحب الإمامين الحسن والحسين (عليهما السلام) وكان من التابعين الأجلاء.
                    </p>
                  </div>
                </div>
              </section>

              {/* علم المنايا والبلايا - القصة الكاملة */}
              <section className="space-y-8">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="p-3 bg-[#c9a227]/10 rounded-2xl">
                    <Sparkles className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <h2 className="text-4xl font-bold gold-gradient">علم المنايا والبلايا</h2>
                </div>
                <div className="bg-gradient-to-r from-white/[0.03] to-transparent p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
                  <Quote className="absolute -left-4 -top-4 w-32 h-32 text-white/5" />
                  <p className="text-lg leading-loose text-white/80 relative z-10">
                    روى الكشي عن فضيل بن الزبير: أن ميثماً التقى بحبيب بن مظاهر الأسدي، فأخبر حبيب بمصلب ميثم وبقر بطنه عند دار الرزق، وأخبر ميثم حبيب بمقتله ونصرته لابن بنت رسول الله وحمل رأسه بالكوفة.
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/5 text-white/50 text-sm italic">
                    "والله ما ذهبت الأيّام حتّى رأينا ميثماً مصلوباً.. وجيء برأس حبيب قد قُتل مع الحسين (ع)، ورأينا كلّ ما قالوا."
                  </div>
                </div>
              </section>

              {/* قسم الذرية - الأولاد */}
              <section className="space-y-8">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="p-3 bg-[#c9a227]/10 rounded-2xl">
                    <Users className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <h2 className="text-4xl font-bold gold-gradient">الذرية المباركة</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'عمران بن ميثم', role: 'من أصحاب الإمام زين العابدين (ع)' },
                    { name: 'صالح بن ميثم', role: 'من أصحاب الإمامين الباقر والصادق (ع)' },
                    { name: 'شعيب بن ميثم', role: 'من خيرة أصحاب الإمام الصادق (ع)' },
                    { name: 'حمزة بن ميثم', role: 'من الرواة الأجلاء عن الأئمة (ع)' }
                  ].map((son, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-4"
                    >
                      <div className="w-3 h-3 bg-[#c9a227] rounded-full shadow-[0_0_10px_#c9a227]"></div>
                      <div>
                        <div className="text-white font-bold">{son.name}</div>
                        <div className="text-[#c9a227] text-xs mt-1">{son.role}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-white/40 text-sm mt-4 bg-white/5 p-4 rounded-xl border border-white/5 italic">
                  * عُرف من ذريته رواة حديث عظام وأعلام في الطائفة، كيعقوب بن شعيب وعلي بن إسماعيل بن شعيب الذي كان من وجوه المتكلمين.
                </p>
              </section>
            </motion.div>
          </div>

          {/* Map Section (ثابتة كما في الطلب) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 glass-card p-6 sm:p-12 text-center border border-[#c9a227]/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[3rem]"
          >
            <div className="flex flex-col items-center mb-10">
              <div className="p-4 bg-[#c9a227]/10 rounded-full mb-6">
                <MapPin className="w-12 h-12 text-[#c9a227]" />
              </div>
              <h2 className="text-4xl font-bold gold-gradient mb-4 font-display">موقع الضريح الطاهر</h2>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-lg">
                يقع الضريح المبارك في مدينة الكوفة المقدسة <br /> 
                <span className="text-[#c9a227] font-mono mt-4 block font-bold text-2xl select-all tracking-widest">29GW+H36</span>
              </p>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden h-[500px] border border-[#c9a227]/20">
              <iframe
                title="مرقد ميثم التمار"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.234!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDAxJzM1LjAiTiA0NMKwMjMnNDIuNSJF!5e0!3m2!1sar!2siq!4v1715000000000!5m2!1sar!2siq`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              <div className="absolute bottom-8 inset-x-8 flex justify-center">
                <a 
                  href={directMapUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#c9a227] text-[#05140d] px-12 py-5 rounded-2xl font-bold shadow-2xl hover:bg-[#e5c035] transition-all transform hover:-translate-y-1 active:scale-95"
                >
                  <Navigation className="w-6 h-6" />
                  توجيه GPS (فتح الخرائط)
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}