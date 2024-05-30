import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type EllipsisWaveProps = {
  className?: string;
};

export const EllipsisWave = ({ className }: EllipsisWaveProps) => {
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: '0%',
    },
    end: {
      y: ['0%', '25%', '0%'],
    },
  };

  const loadingCircleTransition = {
    duration: 0.5,
    repeat: Infinity,
    ease: 'easeInOut',
  };

  return (
    <motion.div
      className={twMerge(
        'flex items-center justify-center text-zinc-400',
        className,
      )}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        variants={loadingCircleVariants}
        transition={{ ...loadingCircleTransition, delay: 0 }}
      >
        .
      </motion.span>
      <motion.span
        variants={loadingCircleVariants}
        transition={{ ...loadingCircleTransition, delay: 0.1 }}
      >
        .
      </motion.span>
      <motion.span
        variants={loadingCircleVariants}
        transition={{ ...loadingCircleTransition, delay: 0.2 }}
      >
        .
      </motion.span>
    </motion.div>
  );
};
