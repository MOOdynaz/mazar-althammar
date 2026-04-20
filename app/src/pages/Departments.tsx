import { motion } from 'framer-motion'
import { 
  Settings, ShieldCheck, Users, Construction, 
  Zap, Globe, Scale, Box, Calculator, 
  Truck, BookOpen, Heart, FileSearch, LayoutGrid
} from 'lucide-react'

const departments = [
  {
    id: 1,
    name: 'شعبة المشاريع الهندسية',
    description: 'المسؤولة عن إعداد المخططات الهندسية، الإشراف على مشاريع التوسعة، وتطوير البنى التحتية للمزار.',
    icon: Construction,
    color: 'bg-orange-500/10 text-orange-500'
  },
  {
    id: 2,
    name: 'شعبة حفظ النظام',
    description: 'تعنى بتنظيم حركة الزائرين، توفير الحماية للمكان الشريف، وضمان الانسيابية الأمنية داخل المزار.',
    icon: ShieldCheck,
    color: 'bg-red-600/10 text-red-600'
  },
  {
    id: 3,
    name: 'شعبة الإعلام والعلاقات العامة',
    description: 'إدارة التغطية الإخبارية، التواصل مع المؤسسات الرسمية، ونشر رسالة المزار الثقافية عبر المنصات المختلفة.',
    icon: Globe,
    color: 'bg-cyan-500/10 text-cyan-500'
  },
  {
    id: 4,
    name: 'شعبة الشؤون الثقافية والدينية',
    description: 'إقامة المحافل القرآنية، التوجيه الديني، إحياء الشعائر، وإدارة المكتبة العامة والوحدات العلمية.',
    icon: BookOpen,
    units: ['علوم القرآن', 'الشعائر الحسينية', 'التوجيه الديني', 'المكتبة'],
    color: 'bg-emerald-500/10 text-emerald-500'
  },
  {
    id: 5,
    name: 'شعبة الشؤون الإدارية',
    description: 'تنظيم الموارد البشرية، المراسلات الإدارية، أرشفة الوثائق، ومتابعة شؤون الموظفين الرسمية.',
    icon: Users,
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    id: 6,
    name: 'شعبة الشؤون القانونية',
    description: 'تقديم المشورة القانونية، صياغة العقود الرسمية، وتمثيل المزار أمام الجهات القضائية والحكومية.',
    icon: Scale,
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    id: 7,
    name: 'شعبة الصيانة الهندسية',
    description: 'إدامة المرافق الحيوية، صيانة المنظومات الكهربائية والتبريد، وضمان عمل الخدمات الفنية على مدار الساعة.',
    icon: Settings,
    color: 'bg-stone-500/10 text-stone-500'
  },
  {
    id: 8,
    name: 'شعبة الشؤون الخدمية',
    description: 'تهيئة أجواء الزيارة، النظافة، إدارة وحدات النقل (الآليات)، وتقديم الخدمات اللوجستية للزوار.',
    icon: Truck,
    units: ['الآليات', 'الخدمات اللوجستية'],
    color: 'bg-yellow-500/10 text-yellow-500'
  },
  {
    id: 9,
    name: 'شعبة تكنولوجيا المعلومات',
    description: 'تطوير الأنظمة البرمجية، إدارة الشبكات، التحول الرقمي، وصيانة البنية التحتية التقنية للمزار.',
    icon: Zap,
    color: 'bg-indigo-500/10 text-indigo-500'
  },
  {
    id: 10,
    name: 'شعبة الشؤون النسوية',
    description: 'تقديم الخدمات الدينية والثقافية والتنظيمية للزائرات، وإدارة الوحدات الفنية والخدمية الخاصة بالنساء.',
    icon: Heart,
    color: 'bg-pink-500/10 text-pink-500'
  },
  {
    id: 11,
    name: 'شعبة المخازن',
    description: 'إدارة الجرد المخزني، حفظ الأصول والممتلكات، وتجهيز الشعب والوحدات بالاحتياجات الضرورية.',
    icon: Box,
    color: 'bg-amber-700/10 text-amber-700'
  },
  {
    id: 12,
    name: 'شعبة الشؤون المالية',
    description: 'إدارة الميزانية، صرف الرواتب، التنظيم المالي، وإعداد التقارير المالية الدورية للأمانة العامة.',
    icon: Calculator,
    color: 'bg-green-500/10 text-green-500'
  },
  {
    id: 13,
    name: 'شعبة التدقيق',
    description: 'الرقابة المالية والإدارية الداخلية لضمان دقة التنفيذ ومطابقة الضوابط الشرعية والقانونية.',
    icon: FileSearch,
    color: 'bg-slate-400/10 text-slate-400'
  }
]

export default function Departments() {
  return (
    <div className="min-h-screen pt-24 bg-[#05140d]">
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold gold-gradient mb-6 font-display">أقسام وشعب المزار</h1>
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