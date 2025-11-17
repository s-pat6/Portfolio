import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const projects = [
  {
    name: 'Emotion-Aware AI Assistant',
    icon: '🤖',
    description: 'AI-powered communication assistant that analyzes facial expressions in real-time to provide emotionally intelligent responses. Built with facial recognition technology and advanced language models.',
    highlights: [
      'Real-time facial expression recognition using DeepFace and OpenCV',
      'Context-aware responses powered by Llama 3 via Groq API',
      'Natural text-to-speech integration with Deepgram',
    ],
    tags: ['Python', 'DeepFace', 'OpenCV', 'Llama 3', 'Groq', 'Deepgram'],
    award: 'Winner - AIFAHacks 2024',
  },
  {
    name: 'Safer Story',
    icon: '🛡️',
    description: 'Safety-first navigation app that generates walking routes with maximum streetlight coverage, prioritizing user security in urban environments.',
    highlights: [
      'Generates safe walking paths with 90%+ streetlight coverage',
      'Real-time route optimization using Google Maps API',
      'Cross-platform mobile app built with React Native',
      'MongoDB backend for storing location and safety data',
    ],
    tags: ['React Native', 'Node.js', 'Google Maps API', 'MongoDB', 'REST API'],
    award: 'Winner - HackSMU 2024',
  },
  {
    name: 'Citadel Summer Terminal',
    icon: '🎮',
    description: 'Competitive tower defense AI that achieved 4th place in ELO ranking through adaptive strategy and dynamic resource optimization.',
    highlights: [
      'Achieved 4th place ELO ranking in international competition',
      'Adaptive Python algorithm that learns from opponent patterns',
      'Dynamic caching system for real-time strategy optimization',
      'Advanced pathfinding and resource management',
    ],
    tags: ['Python', 'Algorithms', 'AI Strategy', 'Dynamic Programming'],
    award: '4th Place ELO - Citadel Terminal',
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24 scroll-mt-20"
    >
      <motion.div variants={itemVariants} className="mx-auto w-full max-w-6xl">
        <motion.h2
          variants={itemVariants}
          className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl"
          style={{
            textShadow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
          }}
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="space-y-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              className="group relative rounded-3xl border-2 border-pink-200/50 bg-gradient-to-br from-pink-50/90 via-white to-fuchsia-50/90 p-8 shadow-2xl backdrop-blur-sm dark:border-pink-800/50 dark:from-pink-950/90 dark:via-zinc-900 dark:to-fuchsia-950/90 transition-all"
              style={{
                boxShadow:
                  '0 12px 50px rgba(236, 72, 153, 0.18), 0 0 40px rgba(236, 72, 153, 0.1)',
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-400/5 via-transparent to-fuchsia-400/5 dark:from-pink-500/5 dark:to-fuchsia-500/5 group-hover:from-pink-400/10 group-hover:to-fuchsia-400/10 transition-all"></div>

              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{project.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                        {project.name}
                      </h3>
                      {project.award && (
                        <div className="flex items-center gap-2">
                          <span className="text-xl">🏆</span>
                          <span className="text-sm font-semibold text-pink-600 dark:text-pink-400">
                            {project.award}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <p className="mb-4 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-zinc-700 dark:text-zinc-300"
                    >
                      <span className="text-pink-500 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="rounded-lg bg-pink-100/80 px-3 py-1.5 text-xs font-medium text-pink-700 backdrop-blur-sm dark:bg-pink-900/30 dark:text-pink-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
