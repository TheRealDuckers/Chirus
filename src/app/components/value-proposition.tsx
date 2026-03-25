import { motion } from 'motion/react';
import { Zap, Award, BarChart3, HeadphonesIcon } from 'lucide-react';
import { useInView } from './hooks/use-in-view';

const values = [
  {
    icon: Zap,
    title: 'Rapid & Accurate Diagnostics',
    description: 'Cutting-edge technology delivering fast, reliable results that healthcare professionals can trust for critical decision-making.',
  },
  {
    icon: Award,
    title: 'Trusted Healthcare Partnerships',
    description: 'Decades of collaboration with leading hospitals and laboratories across the UK and Ireland, built on reliability and excellence.',
  },
  {
    icon: BarChart3,
    title: 'Scalable Lab Solutions',
    description: 'Flexible systems that grow with your facility, from small clinics to large hospital networks with high-volume testing needs.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support Services',
    description: 'Comprehensive training, maintenance, and technical support ensuring maximum uptime and optimal performance.',
  },
];

export function ValueProposition() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Chirus
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering value through innovation, reliability, and unwavering commitment to healthcare excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-blue-900" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
