import { motion } from 'framer-motion';

export function BreathingCircle() {
  return (
    <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
      <motion.div
        className='w-64 h-64 bg-white rounded-full'
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
