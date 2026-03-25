import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useInView } from './hooks/use-in-view';
import { CheckCircle } from 'lucide-react';

const innovations = [
  'AI-powered diagnostic algorithms',
  'Cloud-based data management',
  'Real-time quality control monitoring',
  'Seamless LIS integration',
];

export function Technology() {
  const { ref, isInView } = useInView();

  return (
    <section id="technology" className="py-20 lg:py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Innovation Driving Better Outcomes
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              At Chirus, we leverage cutting-edge diagnostic platforms and emerging technologies to transform laboratory operations and clinical workflows. Our systems are designed to enhance accuracy, reduce turnaround times, and ultimately improve patient outcomes.
            </p>
            
            <div className="space-y-4">
              {innovations.map((innovation, index) => (
                <motion.div
                  key={innovation}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0" />
                  <span className="text-gray-200">{innovation}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695048441357-b5fab05fa63d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGlhZ25vc3RpYyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0NDI0ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare diagnostic technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
