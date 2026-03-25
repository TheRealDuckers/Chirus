import { motion } from 'motion/react';
import { Technology } from '../components/technology';
import { Zap, Shield, Cloud, Cpu, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { usePageTitle } from '../components/hooks/use-page-title';

const features = [
  {
    icon: Zap,
    title: 'Rapid Processing',
    description: 'Get results in minutes with our advanced processing technology',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Built-in quality control systems ensure accuracy and reliability',
  },
  {
    icon: Cloud,
    title: 'Cloud Connectivity',
    description: 'Seamless data integration with your existing healthcare systems',
  },
  {
    icon: Cpu,
    title: 'AI-Powered',
    description: 'Machine learning algorithms for enhanced diagnostic accuracy',
  },
];

const innovations = [
  'Next-generation biosensor technology',
  'Automated sample preparation',
  'Real-time quality monitoring',
  'Predictive maintenance alerts',
  'Advanced data analytics',
  'Multi-parameter testing capability',
];

export default function TechnologyPage() {
  usePageTitle('Technology & Innovation');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Advanced Technology & Innovation
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Cutting-edge diagnostic technology that sets new standards in healthcare
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-xl mb-4">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Technology />

      {/* Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Innovation at Every Level
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to research and development ensures that you always have access to the most advanced diagnostic technology available.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {innovations.map((innovation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{innovation}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGVxdWlwbWVudCUyMG1vZGVybnxlbnwxfHx8fDE3NzQzMDc3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Medical technology"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Certified & Compliant
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              All our equipment meets rigorous international standards and UK regulations
            </p>

            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="bg-gray-50 rounded-xl px-8 py-6 border border-gray-200">
                <div className="text-2xl font-bold text-slate-900">CE Mark</div>
                <div className="text-gray-600 text-sm mt-1">Certified</div>
              </div>
              <div className="bg-gray-50 rounded-xl px-8 py-6 border border-gray-200">
                <div className="text-2xl font-bold text-slate-900">ISO 13485</div>
                <div className="text-gray-600 text-sm mt-1">Quality Management</div>
              </div>
              <div className="bg-gray-50 rounded-xl px-8 py-6 border border-gray-200">
                <div className="text-2xl font-bold text-slate-900">IVDR</div>
                <div className="text-gray-600 text-sm mt-1">Compliant</div>
              </div>
              <div className="bg-gray-50 rounded-xl px-8 py-6 border border-gray-200">
                <div className="text-2xl font-bold text-slate-900">MHRA</div>
                <div className="text-gray-600 text-sm mt-1">Registered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}