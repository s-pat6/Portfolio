import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

export default function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex min-h-screen snap-start flex-col items-center justify-center text-center pt-[80px]"
    >
      <motion.p
        variants={itemVariants}
        className="mb-10 text-5xl text-zinc-600 dark:text-zinc-400 sm:text-10xl"
      >
        Hello, I'm
      </motion.p>
      <motion.h2
        variants={itemVariants}
        className="mb-12 text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl md:text-8xl hero-glow"
      >
        Spandan Patel
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="mx-auto max-w-3xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl"
      >
        I'm a <span
          className="relative font-semibold text-pink-600 dark:text-pink-400"
          style={{
            textShadow: '0 0 12px rgba(236, 72, 153, 0.7), 0 0 24px rgba(236, 72, 153, 0.4)',
            filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.5))',
          }}
        >
          computer science
        </span> major at
        <br />
        <Image
          src="/UCLA-square-logo.jpg"
          alt="UCLA Logo"
          width={80}
          height={80}
          className="mt-4 rounded-xl shadow-lg mx-auto"
          priority
        />
      </motion.p>
    </motion.section>
  );
}
