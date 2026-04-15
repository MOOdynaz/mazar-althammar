import { motion } from 'framer-motion'
import { 
  Settings, ShieldCheck, Users, PenTool, Home, Construction, 
  Heart, Zap, Briefcase, Globe, Scale, Box, Calculator, 
  Truck, Scissors, BookOpen, Star
} from 'lucide-react'

const departments = [
  {
    id: 1,
    name: 'مكتب الأمين',
    description: 'المكتب التنفيذي المسؤول عن متابعة قرارات الأمانة الخاصة وتنسيق الجداول الزمنية واللقاءات الرسمية.',
    icon: Briefcase,
    color: 'bg-[#c9a227]/10 text-[#c9a227]'
  },
  {
    id: 2,
    name: 'الشعبة الإدارية',
    description: 'تتولى إدارة الكتب الإدارية، نظام الأرشيف الحديث، وكافة شؤون الموظفين والموارد البشرية.',
    icon: Users,
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    id: 3,
    name: 'الشعبة الثقافية',
    description: 'تضم وحدات (علوم القرآن)، (الشعائر الحسينية)، (الخياطة والتطريز)، والمكتبة العامة للمزار.',
    icon: BookOpen,
    units: ['علوم القرآن', 'الشعائر', 'الخياطة والتطريز', 'المكتبة'],
    color: 'bg-emerald-500/10 text-emerald-500'
  },
  {
    id: 4,
    name: 'الشعبة الهندسية',
    description: 'تعنى بدراسة وتنفيذ المشاريع الهندسية، تطوير البنى التحتية، والإشراف الفني على التوسعة.',
    icon: Construction,
    color: 'bg-orange-500/10 text-orange-500'
  },
  {
    id: 5,
    name: 'شعبة تكنولوجيا المعلومات',
    description: 'إدارة الموقع الإلكتروني، الأنظمة البرمجية، الشبكات، والتحول الرقمي لخدمات المزار.',
    icon: Zap,
    color: 'bg-indigo-500/10 text-indigo-500'
  },
  {
    id: 6,
    name: 'شعبة الإعلام والعلاقات',
    description: 'التغطية الخبرية، إدارة التواصل الاجتماعي، وتوطيد العلاقات مع المؤسسات والزوار.',
    icon: Globe,
    color: 'bg-cyan-500/10 text-cyan-500'
  },
  {
    id: 7,
    name: 'شعبة الحسابات',
    description: 'الإدارة المالية الدقيقة، تنظيم الميزانيات، والرقابة المالية وفق الضوابط الشرعية والقانونية.',
    icon: Calculator,
    color: 'bg-green-500/10 text-green-500'
  },
  {
    id: 8,
    name: 'الشعبة القانونية',
    description: 'تقديم الاستشارات القانونية، صياغة العقود، وتمثيل المزار أمام الجهات القضائية والرسمية.',
    icon: Scale,
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    id: 9,
    name: 'الشعبة الخدمية',
    description: 'تتولى تهيئة أجواء الزيارة، وتضم وحدة الآليات المسؤولة عن النقل والخدمات اللوجستية.',
    icon: Truck,
    color: 'bg-yellow-500/10 text-yellow-500'
  },
  {
    id: 10,
    name: 'شعبة الصيانة',
    description: 'إدامة المرافق الحيوية، صياغة المولدات، الكهرباء، والتبريد لضمان راحة الزائرين.',
    icon: Settings,
    color: 'bg-stone-500/10 text-stone-500'
  },
  {
    id: 11,
    name: 'شعبة المخازن',
    description: 'إدارة الجرد المخزني، حفظ الممتلكات، وتأمين الاحتياجات اللوجستية لكافة شعب المزار.',
    icon: Box,
    color: 'bg-red-500/10 text-red-500'
  }
]

export default function Departments() {
  return (
    <div className="min-h-screen pt-24 bg-[#05140d]">
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold gold-gradient mb-6">أقسام وشعب المزار</h1>
            <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
              الهيكل التنظيمي لمزار ميثم التمار يعكس تكامل الجهود الإدارية والهندسية والثقافية لتقديم أسمى مستويات الخدمة للمكان الشريف وزائريه.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card group p-8 border border-white/5 hover:border-[#c9a227]/30 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg ${dept.color}`}>
                  <dept.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c9a227] transition-colors">
                  {dept.name}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {dept.description}
                </p>

                {/* عرض الوحدات الفرعية إذا وجدت (مثل الشعبة الثقافية والخدمية) */}
                {dept.units && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                    {dept.units.map(unit => (
                      <span key={unit} className="text-[10px] bg-white/5 text-[#c9a227] px-2 py-1 rounded border border-[#c9a227]/20">
                        {unit}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}