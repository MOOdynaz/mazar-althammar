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
  MessageCircle,
  Stethoscope,
  Clock
} from 'lucide-react'

const mazarLogo = '/logo.png'; 

export default function About() {
  // إحداثيات ومعلومات الموقع (ثابتة تماماً كما طلبت)
  const lat = 32.0264024;
  const lng = 44.3951297;
  const directMapUrl = "https://www.google.com/maps/dir/?api=1&destination=32.0264024,44.3951297";

  return (
    <div className="min-h-screen pt-20 bg-[#05140d] text-white overflow-x-hidden font-display">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-right" dir="rtl">
          
          {/* --- الرواية الذهبية (صدر الصفحة) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-24 relative"
          >
            <div className="absolute inset-0 bg-[#c9a227]/5 blur-3xl rounded-full" />
            <div className="relative border-2 border-[#c9a227]/30 bg-black/40 p-8 md:p-12 rounded-[3rem] shadow-[0_0_50px_rgba(201,162,39,0.1)] overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#c9a227]/10 rounded-br-full -translate-x-16 -translate-y-16" />
              <Quote className="w-12 h-12 text-[#c9a227] mb-6 opacity-60" />
              <blockquote className="text-2xl md:text-4xl font-bold leading-relaxed mb-8 text-white">
                <span className="text-[#c9a227]">قال مِيثَم التمار:</span> دعاني أمير المؤمنين (عليه السلام) وقال: كيف أنت يا ميثم إذا دعاك دعي بني أُمية عبيد الله بن زياد إلى البراءة منّي؟ فقال: يا أمير المؤمنين، أنا والله لا أبرأ منك، قال: إذًا والله يقتلك ويصلبك، قلت: أصبر فذاك في الله قليل، فقال:
                <div className="mt-6 p-4 bg-[#c9a227] text-[#05140d] rounded-2xl inline-block shadow-[0_0_20px_rgba(201,162,39,0.4)]">
                  "يا ميثم إذًا تكون معي في درجتي"
                </div>
              </blockquote>
              <div className="text-[#c9a227]/60 text-sm font-bold border-t border-white/10 pt-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> المصدر: كتاب الرجال للشيخ الكشي
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* القائمة الجانبية - أحاديث ولقاءات */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="lg:col-span-4 space-y-8 lg:sticky lg:top-32"
            >
              {/* لقاؤه بأم سلمة */}
              <div className="bg-gradient-to-br from-[#1a5f3f]/20 to-transparent p-8 rounded-[2.5rem] border border-[#c9a227]/20 relative overflow-hidden">
                <div className="absolute top-2 left-2 opacity-10"><MessageCircle size={80}/></div>
                <h4 className="text-[#c9a227] font-bold mb-4 flex items-center gap-2 text-xl">
                   لقاؤه بأُمّ سلمة (رضي الله عنها)
                </h4>
                <p className="text-sm text-white/70 leading-loose italic">
                  قالت له أم سلمة: "والله لطالما سمعت رسول الله يوصي بك عليًا في جوف الليل". فدعت بطيب وطيبت لحيته، فقال لها: "أما أنَّها ستخضَّب بدم". فبكت وقالت: "إنه ليس بسيِّدك وحدك، وهو سيِّدي وسيِّد المسلمين".
                </p>
              </div>

              {/* أحاديث الحواريين */}
              <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
                <h4 className="text-[#c9a227] font-bold mb-6 text-lg border-b border-white/10 pb-2">حواريّ الامام علي (عليه السلام)</h4>
                <p className="text-sm leading-relaxed text-white/50 italic mb-4">
                  "إذا كان يوم القيامة نادى مناد أين حواري الامام علي بن أبي طالب؟ فيقوم عمرو بن الحمق، ومحمد بن أبي بكر، وميثم بن يحيى التمار.."
                </p>
                <div className="text-[10px] text-white/30 uppercase tracking-widest text-left">- الإمام الكاظم (عليه السلام)</div>
              </div>
            </motion.div>

            {/* المحتوى الرئيسي */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="lg:col-span-8 space-y-20"
            >
              {/* السيرة والتسمية */}
              <section className="space-y-8">
                <h2 className="text-4xl font-bold gold-gradient flex items-center gap-4">
                   من العجم إلى الكوفة
                </h2>
                <div className="bg-white/[0.02] p-8 md:p-10 rounded-[3rem] border border-white/5 space-y-6 text-lg">
                  <p className="leading-relaxed">
                    كان عبداً لامرأة من بني أسد، فاشتراه الامام علي (عليه السلام) وأعتقه. قال له: <span className="text-[#c9a227]">"ما اسمك؟"</span> قال: سالم. قال (عليه السلام): <span className="text-[#c9a227]">"أخبرني رسول الله (صلى الله عليه واله) أن اسمك الذي سمّاك به أبواك في العجم ميثم"</span>.
                  </p>
                  <p className="bg-[#c9a227]/5 p-6 rounded-2xl border-r-4 border-[#c9a227]">
                    . فعاد لاسمه الأصلي واكتنى بأبي سالم، واتخذ من بيع التمر مهنة له في الكوفة ليعرف بالتمار.
                  </p>
                </div>
              </section>

              {/* علم الغيب (المنايا والبلايا) */}
              <section className="space-y-8">
                <h2 className="text-4xl font-bold gold-gradient flex items-center gap-4">
                   علم المنايا والبلايا
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 relative">
                    <h4 className="text-[#c9a227] font-bold mb-4 flex items-center gap-2"><Sparkles /> حوار الصادقين</h4>
                    <p className="text-white/70 leading-relaxed italic">
                      التقى ميثم بحبيب بن مظاهر، فقال حبيب: "لكأني بشيخ أصلع يبيع البطيخ يُصلب في حب أهل بيت نبيه"، فرد ميثم: "وإني لأعرف رجلاً أحمر يخرج لينصر ابن بنت نبيه فيُقتل ويجال برأسه". فتعجب الناس من صدق قولهما حين وقع كل ما قالا.
                    </p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h4 className="text-[#c9a227] font-bold mb-4 flex items-center gap-2"><ScrollText /> تفسير القرآن</h4>
                    <p className="text-white/70 leading-relaxed">
                      قال لابن عباس: "سلني ما شئت من تفسير القرآن، فإني قرأت تنزيله على أمير المؤمنين وعلمني تأويله". فكان ابن عباس يكتب عنه وهو من كبار المفسرين.
                    </p>
                  </div>
                </div>
              </section>

              {/* قصة المقتل والنخلة */}
              <section className="space-y-8">
                <h2 className="text-4xl font-bold gold-gradient flex items-center gap-4">
                   طريق الخلود: قصة الشهادة
                </h2>
                <div className="bg-gradient-to-b from-[#0a261a] to-transparent p-8 md:p-12 rounded-[3rem] border border-white/10">
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="p-3 bg-[#c9a227]/20 rounded-full h-fit text-[#c9a227]"><Clock /></div>
                      <p className="text-lg leading-loose text-white/80">
                        أراه الإمام الامام علي (عليه السلام) النخلة التي سيصلب عليها، فكان ميثم يتعاهدها ويصلي عندها ويقول: <span className="text-[#c9a227]">"بوركتِ من نخلة، لكِ خُلقتُ ولي غُذيتِ"</span>. وكان يخبر جاره عمرو بن حريث بأنه سيجاوره قريباً وعمرو لا يفهم المقصد.
                      </p>
                    </div>
                    
                    <div className="bg-black/30 p-8 rounded-3xl border-l-4 border-[#c9a227]">
                      <h5 className="text-[#c9a227] font-bold mb-4">في سجن ابن زياد</h5>
                      <p className="text-sm text-white/60 leading-relaxed">
                        حُبس ميثم مع المختار الثقفي، فبشره ميثم: <span className="text-white">"إنك تفلت وتخرج ثائراً بدم الحسين فتقتل هذا الذي يقتلنا"</span>. وبالفعل خرج المختار وقُتل ميثم.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <p className="text-lg leading-loose">
                        صلبه ابن زياد، فجعل ميثم وهو على الخشبة يحدث بفضائل بني هاشم، فخاف الظلمة من كلامه وأمروا بـ <span className="text-[#c9a227] font-bold underline">إلجامه</span>، فكان أول من أُلجم في الإسلام. وفي اليوم الثالث طعن بالحربة فكبر ثم فاضت روحه دماً خضب لحيته كما أخبره مولاه.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* الذرية الطيبة */}
              <section className="space-y-8">
                <h2 className="text-3xl font-bold gold-gradient flex items-center gap-4 pr-2 border-r-4 border-[#c9a227]">
                   الذرية المباركة
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'عمران بن ميثم', info: 'من أصحاب الإمام السجاد (عليه السلام )' },
                    { name: 'صالح بن ميثم', info: 'من أصحاب الباقر والصادق (عليه السلام)' },
                    { name: 'شعيب بن ميثم', info: 'من خيرة أصحاب الإمام الصادق (عليه السلام)' },
                    { name: 'حمزة بن ميثم', info: 'من رواة الحديث الأجلاء' }
                  ].map((son, i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center justify-between group hover:border-[#c9a227]/40 transition-all">
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-lg">{son.name}</span>
                        <span className="text-[#c9a227] text-xs font-medium">{son.info}</span>
                      </div>
                      <Users className="text-white/10 group-hover:text-[#c9a227]/20 transition-colors" />
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 text-sm text-white/40 italic">
                  * عُرف من أحفاده يعقوب بن شعيب وعلي بن إسماعيل، وكانوا من أعلام الطائفة ووجوه المتكلمين وأصحاب الأئمة عليهم السلام.
                </div>
              </section>
            </motion.div>
          </div>

          {/* شهادته */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-24 bg-[#c9a227]/10 p-12 rounded-[4rem] text-center border-2 border-[#c9a227]/20"
          >
            <h2 className="text-4xl font-bold gold-gradient mb-6">الشهادة الخالدة</h2>
            <p className="text-2xl text-white/80 leading-relaxed">
              استُشهد في <span className="text-[#c9a227] font-bold">22 ذي الحجّة 60 هـ</span> <br />
              قبل وصول الإمام الحسين (عليه السلام) إلى كربلاء بعشرة أيّام. <br />
              دُفن في الكوفة المقدسة وقبره اليوم مزار شامخ.
            </p>
          </motion.div>

          {/* Map Section (UNTOUCHED) */}
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