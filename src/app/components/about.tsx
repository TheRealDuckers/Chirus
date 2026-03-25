import { motion } from 'motion/react';
import { useInView } from './hooks/use-in-view';

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Leading Diagnostic Excellence
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Chirus provides comprehensive diagnostic solutions across clinical chemistry, microbiology, and point-of-care testing. With decades of experience serving healthcare providers throughout the UK and Ireland, we are committed to delivering innovative technology that enhances laboratory efficiency and patient care.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our expertise spans from cutting-edge laboratory automation systems to portable point-of-care devices, ensuring healthcare professionals have access to accurate, rapid diagnostic results when and where they need them most.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
