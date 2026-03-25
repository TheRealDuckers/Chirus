import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Products } from '../components/products';
import { ValueProposition } from '../components/value-proposition';
import { Technology } from '../components/technology';
import { Contact } from '../components/contact';
import { CTA } from '../components/cta';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';
import { usePageTitle } from '../components/hooks/use-page-title';

export default function HomePage() {
  usePageTitle('Home');

  return (
    <>
      <Hero />
      
      {/* Trust indicators */}
      <section className="py-12 bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-sm text-gray-600 uppercase tracking-wider">Trusted by Leading Healthcare Institutions</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {['NHS Trust', 'Private Clinics', 'Research Labs', 'Medical Centers'].map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-lg font-semibold text-gray-700">{name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About />
      
      {/* Enhanced value section */}
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
                Why Healthcare Professionals Choose Chirus
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We understand the critical nature of diagnostic testing. That's why we provide solutions that combine speed, accuracy, and reliability.
              </p>
              
              <div className="space-y-4">
                {[
                  'Industry-leading accuracy rates of 99.9%',
                  'Full technical support and training included',
                  'Rapid turnaround times for urgent cases',
                  'Seamless integration with existing systems',
                  'Comprehensive warranty and maintenance'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
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
                  src="https://images.unsplash.com/photo-1612636320854-776180f479d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzc0NDI1NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Healthcare professional"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
              
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
              >
                <div className="text-4xl font-bold text-teal-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Products />
      <ValueProposition />
      <Technology />
      <Contact />
      <CTA />
    </>
  );
}