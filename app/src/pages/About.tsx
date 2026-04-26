import { motion } from 'framer-motion'
import { 
  MapPin, 
  Navigation, 
  History, 
  Quote, 
  Users,
  BookOpen,
  Sparkles
} from 'lucide-react'

const mazarLogo = '/logo.png'; 

const timeline = [
  { 
    year: 'اللقاء التاريخي', 
    title: 'من سالم إلى ميثم', 
    description: 'اشتراه أمير المؤمنين (ع) وأعتقه، وأخبره بأن رسول الله (ص) أخبره بأن اسمه الحقيقي الذي سماه به أبواه في العجم هو "ميثم"، فصدق ميثم ذلك ورجع لاسمه الأصلي واكتنى بأبي سالم.' 
  },
  { 
    year: 'المنزلة العلمية', 
    title: 'تفسير القرآن وعلم المنايا', 
    description: 'قرأ تنزيل القرآن على الإمام علي (ع) وعلمه تأويله، كما خصه الإمام بعلم "المنايا والبلايا"، فتنبأ بمقتله ومقتل حبيب بن مظاهر بدقة مذهلة.' 
  },
  { 
    year: 'الصحبة والولاء', 
    title: 'حواري الأئمة', 
    description: 'عُد من أصفياء أصحاب الإمام علي (ع) في "شرطة الخميس"، وكان من أصحاب الإمامين الحسن والحسين (ع)، وقريباً جداً من أهل بيت النبوة.' 
  },
  { 
    year: 'الشهادة', 
    title: 'الثبات حتى الصلب', 
    description: 'رفض البراءة من أمير المؤمنين (ع) أمام ابن زياد، فأمر بصلبه وبقر بطنه، فاستشهد صابراً محتسباً ليكون مع الإمام في درجته.' 
  },
]

export default function About() {
  const lat = 32.0264024;
  const lng = 44.3951297;
  const directMapUrl = "https://www.google.com/maps/dir/?api=1&destination=32.0264024,44.3951297";

  return (
    <div className="min-h-screen pt-20 bg-[#05140d] text-white overflow-x-hidden">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-right" dir="rtl">
          
          {/* Header Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-sm font-medium mb-6 border border-[#c9a227]/30">
              حواري أمير المؤمنين ومولى بني أسد
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-display">
              <span className="gold-gradient">ميثم بن يحيى التمّار</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              التابعي الجليل، عالم المنايا والبلايا، وشهيد العقيدة الذي لم ينقض العهد
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Right Column: Quotes & Media */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 lg:sticky lg:top-32">
              <div className="rounded-3xl overflow-hidden glass-card bg-gradient-to-br from-[#1a5f3f] to-[#0d3322] border border-[#c9a227]/20 shadow-2xl p-8 text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-4 bg-[#c9a227]/20 rounded-full blur-2xl opacity-50"></div>
                  <img src={mazarLogo} alt="Logo" className="relative w-40 h-40 mx-auto object-contain drop-shadow-[0_0_15px_rgba(201,162,39,0.4)]" />
                </div>
                <div className="space-y-6">
                  <div className="bg-black/40 p-6 rounded-2xl border border-[#c9a227]/20">
                    <Quote className="w-6 h-6 text-[#c9a227] mb-3 opacity-50" />
                    <p className="text-white/90 italic leading-relaxed font-serif">
                      "يا ميثم، إذًا تكون معي في درجتي"
                    </p>
                    <span className="text-[#c9a227] text-xs mt-2 block">- قول الإمام علي (ع) لميثم عند بشارة الشهادة</span>
                  </div>
                  <div className="bg-black/40 p-6 rounded-2xl border border-[#c9a227]/20">
                    <p className="text-white/90 italic leading-relaxed font-serif">
                      "إنّي أُحبّك وأُحبّ أباك حبّاً شديداً"
                    </p>
                    <span className="text-[#c9a227] text-xs mt-2 block">- قول الإمام الباقر (ع) لصالح بن ميثم</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Left Column: Biography Details */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold gold-gradient flex items-center gap-3">
                  <History className="w-8 h-8" /> السيرة المباركة
                </h2>
                <div className="space-y-6 text-white/80 leading-relaxed text-lg border-r-4 border-[#c9a227]/30 pr-6">
                  <p>
                    ذكر الشيخ المفيد في الإرشاد أن ميثماً كان عبداً لامرأة من بني أسد، فاشتراه أمير المؤمنين (ع) وأعتقه. كانت مهنته بيع التمر في الكوفة ولذلك لُقب بالتمار.
                  </p>
                  <p>
                    اشتهر بعلمه بتفسير القرآن، حيث قال لابن عباس: <span className="text-[#c9a227]">"سلني ما شئت من تفسير القرآن، فإني قرأت تنزيله على أمير المؤمنين وعلمني تأويله"</span>، فكان ابن عباس يكتب عنه.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold gold-gradient flex items-center gap-3">
                  <Sparkles className="w-8 h-8" /> علم المنايا والبلايا
                </h2>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 italic text-base leading-relaxed">
                  روى الكشي حادثة لقائه بحبيب بن مظاهر، حيث أخبر حبيب بمصلب ميثم وبقر بطنه، وأخبر ميثم حبيب بمقتله وحمل رأسه في الكوفة، فكان كما قالا تماماً، مما أدهش أهل الكوفة من دقة علمهما بما سيجري.
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold gold-gradient flex items-center gap-3">
                  <Users className="w-8 h-8" /> أولاد ميثم (رض)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'عمران بن ميثم', info: 'من أصحاب الإمام زين العابدين (ع)' },
                    { name: 'صالح بن ميثم', info: 'من أصحاب الإمامين الباقر والصادق (ع)' },
                    { name: 'شعيب بن ميثم', info: 'من خيرة أصحاب الإمام الصادق (ع)' },
                    { name: 'حمزة بن ميثم', info: 'من رواة الحديث الأجلاء' }
                  ].map((son) => (
                    <div key={son.name} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-[#c9a227]/30 transition-all flex items-center gap-4">
                      <div className="w-2 h-2 bg-[#c9a227] rounded-full shrink-0"></div>
                      <div>
                        <div className="text-[#c9a227] font-bold text-sm">{son.name}</div>
                        <div className="text-white/50 text-xs mt-1">{son.info}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold gold-gradient text-center mb-16 font-display">محطات النور في حياته</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="bg-[#0a261a] p-6 rounded-2xl border border-white/5 hover:border-[#c9a227]/40 transition-all group"
                >
                  <div className="text-[#c9a227] font-bold mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#c9a227] transition-colors">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Section (UNTOUCHED) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-10 text-center border border-[#c9a227]/30 shadow-2xl"
          >
            <div className="flex flex-col items-center mb-8">
              <MapPin className="w-12 h-12 text-[#c9a227] mb-4" />
              <h2 className="text-3xl font-bold gold-gradient mb-2 font-display">موقع الضريح الطاهر</h2>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
                يقع الضريح المبارك في مدينة الكوفة المقدسة <br /> 
                <span className="text-[#c9a227] font-mono mt-2 block font-bold text-lg select-all">29GW+H36</span>
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[400px] sm:h-[500px] border border-[#c9a227]/20">
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
              
              <div className="absolute bottom-6 inset-x-6 sm:left-auto sm:right-6">
                <a 
                  href={directMapUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#c9a227] text-[#05140d] px-8 py-4 rounded-xl font-bold shadow-2xl hover:bg-[#e5c035] transition-all"
                >
                  <Navigation className="w-5 h-5" />
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