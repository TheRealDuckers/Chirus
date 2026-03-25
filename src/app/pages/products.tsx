import { motion } from 'motion/react';
import { Activity, Beaker, Microscope, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { usePageTitle } from '../components/hooks/use-page-title';

const products = [
  {
    icon: Activity,
    title: 'Point of Care Testing',
    description: 'Rapid diagnostic solutions at the patient bedside, enabling immediate clinical decisions with accurate results in minutes.',
    features: [
      'Immediate results in 5-15 minutes',
      'Minimal sample volume required',
      'Easy-to-use interface',
      'Portable and compact design',
      'Quality control built-in'
    ],
    image: 'https://images.unsplash.com/photo-1682663947127-ac9d59d7f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwbGFib3JhdG9yeSUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzc0NDI1NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Beaker,
    title: 'Clinical Chemistry',
    description: 'Comprehensive chemistry analyzers for routine and specialized testing with high throughput and precision.',
    features: [
      'High-throughput processing',
      'Comprehensive test menu',
      'Automated sample handling',
      'Excellent precision and accuracy',
      'STAT priority processing'
    ],
    image: 'https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGVxdWlwbWVudCUyMG1vZGVybnxlbnwxfHx8fDE3NzQzMDc3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Microscope,
    title: 'Microbiology',
    description: 'Advanced microbiology systems for bacterial identification, antimicrobial susceptibility testing, and culture analysis.',
    features: [
      'Rapid bacterial identification',
      'Antimicrobial susceptibility testing',
      'Automated culture reading',
      'Extensive organism database',
      'Comprehensive reporting'
    ],
    image: 'https://images.unsplash.com/photo-1612636320854-776180f479d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzc0NDI1NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Cpu,
    title: 'Laboratory Automation',
    description: 'Integrated automation solutions that streamline workflows, reduce errors, and maximize laboratory efficiency.',
    features: [
      'End-to-end automation',
      'Reduced manual handling',
      'Enhanced sample tracking',
      'Improved turnaround times',
      'Scalable configurations'
    ],
    image: 'https://images.unsplash.com/photo-1682663947127-ac9d59d7f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwbGFib3JhdG9yeSUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzc0NDI1NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
];

export default function ProductsPage() {
  usePageTitle('Products & Solutions');
  const navigate = useNavigate();

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
              Our Products & Solutions
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive diagnostic platforms designed to meet the diverse needs of modern healthcare facilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {products.map((product, index) => {
              const Icon = product.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Image */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute top-6 left-6">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 text-teal-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                      Product {index + 1}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                      {product.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      {product.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => navigate('/contact')}
                      className="bg-teal-600 hover:bg-teal-700 text-white group"
                    >
                      Request More Information
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Diagnostic Capabilities?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Contact our team today to discuss which solutions are right for your facility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                Get in Touch
              </Button>
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-6 text-lg"
              >
                Back to Home
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}