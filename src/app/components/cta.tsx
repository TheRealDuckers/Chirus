import { motion } from 'motion/react';
import { Button } from './ui/button';
import { useInView } from './hooks/use-in-view';

export function CTA() {
  const { ref, isInView } = useInView();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Partner with Chirus Today
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Join leading healthcare providers across the UK and Ireland in delivering excellence through advanced diagnostic solutions. Request information or schedule a consultation with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg"
            >
              Request Information
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
