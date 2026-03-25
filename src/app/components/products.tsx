import { motion } from 'motion/react';
import { Activity, Beaker, Microscope, Cpu } from 'lucide-react';
import { useInView } from './hooks/use-in-view';

const products = [
  {
    icon: Activity,
    title: 'Point of Care Testing',
    description: 'Rapid diagnostic solutions at the patient bedside, enabling immediate clinical decisions with accurate results in minutes.',
  },
  {
    icon: Beaker,
    title: 'Clinical Chemistry',
    description: 'Comprehensive chemistry analyzers for routine and specialized testing with high throughput and precision.',
  },
  {
    icon: Microscope,
    title: 'Microbiology',
    description: 'Advanced microbiology systems for bacterial identification, antimicrobial susceptibility testing, and culture analysis.',
  },
  {
    icon: Cpu,
    title: 'Laboratory Automation',
    description: 'Integrated automation solutions that streamline workflows, reduce errors, and maximize laboratory efficiency.',
  },
];

export function Products() {
  const { ref, isInView } = useInView();

  return (
    <section id="products" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive diagnostic platforms tailored to meet the diverse needs of modern healthcare facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 group"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                  <Icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
