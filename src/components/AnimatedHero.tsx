// components/AnimatedHero.tsx
import { motion } from 'framer-motion';

const AnimatedHero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600"
    >
      <div className="text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl font-bold text-white"
        >
          Welcome to My Portfolio
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-xl text-white"
        >
          I build amazing web experiences
        </motion.p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold">
            View My Work
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AnimatedHero;