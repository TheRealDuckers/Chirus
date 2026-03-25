import { motion } from 'motion/react';

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-16 h-16 border-4 border-teal-400 border-t-transparent rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <p className="text-white text-lg">Loading...</p>
      </motion.div>
    </div>
  );
}
