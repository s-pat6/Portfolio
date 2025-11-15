'use client';

import { motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <ParticlesBackground />
      <div className="relative z-10">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/80"
        >
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                Portfolio
              </h1>
              <div className="flex gap-6">
                <a
                  href="#about"
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex min-h-screen snap-start flex-col items-center justify-center text-center"
        >
          <motion.p
            variants={itemVariants}
            className="mb-10 text-5xl text-zinc-600 dark:text-zinc-400 sm:text-10xl"
          >
            Hello, I'm
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mb-12 text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl md:text-8xl"
            style={{
              textShadow: 
                // Sharp blue glow on the left (negative x-offset) - reduced opacity
                '-10px 0 6px rgba(0, 191, 255, 0.4), -12px 0 12px rgba(0, 150, 255, 0.35), -15px 0 18px rgba(0, 100, 255, 0.3), -18px 0 24px rgba(0, 150, 255, 0.25), ' +
                // Rich purple glow in the center - reduced opacity
                '0 0 6px rgba(138, 43, 226, 0.3), 0 0 12px rgba(148, 0, 211, 0.25), 0 0 18px rgba(138, 43, 226, 0.2), 0 0 24px rgba(148, 0, 211, 0.15), ' +
                // Vibrant pink glow on the right (positive x-offset) - reduced opacity
                '10px 0 6px rgba(255, 20, 147, 0.4), 12px 0 12px rgba(255, 0, 150, 0.35), 15px 0 18px rgba(255, 20, 147, 0.3), 18px 0 24px rgba(255, 0, 150, 0.25), 20px 0 30px rgba(255, 20, 147, 0.2)',
              filter: 
                'drop-shadow(-10px 0 10px rgba(0, 191, 255, 0.3)) drop-shadow(-12px 0 15px rgba(0, 150, 255, 0.25)) ' +
                'drop-shadow(0 0 12px rgba(138, 43, 226, 0.2)) drop-shadow(0 0 18px rgba(148, 0, 211, 0.15)) ' +
                'drop-shadow(10px 0 10px rgba(255, 20, 147, 0.3)) drop-shadow(12px 0 15px rgba(255, 0, 150, 0.25)) drop-shadow(15px 0 20px rgba(255, 20, 147, 0.2))',
            }}
          >
            Spandan Patel
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl"
          >
            a Computer Science student at{' '}
            <span 
              className="relative inline-block font-semibold text-blue-600 dark:text-blue-400"
              style={{
                textShadow: '0 0 10px rgba(59, 130, 246, 0.5), 10 0 20px rgb(255, 251, 0)',
                filter: 'drop-shadow(0 0 8px rgb(255, 238, 0))',
              }}
            >
              UCLA
            </span>
            {' '}exploring my interests in the{' '}
            <span 
              className="relative inline-block font-semibold text-cyan-600 dark:text-cyan-400"
              style={{
                textShadow: '0 0 10px rgba(6, 182, 212, 0.5), 10 0 20px rgb(200, 200, 200)',
                filter: 'drop-shadow(0 0 8px rgb(235, 235, 235))',
              }}
            >
              cloud
            </span>
            {' '}and{' '}
            <span 
              className="relative inline-block font-semibold text-pink-600 dark:text-pink-400"
              style={{
                textShadow: '0 0 10px rgba(236, 72, 153, 0.5), 10 0 20px rgb(48, 48, 48)',
                filter: 'drop-shadow(0 0 8px rgb(16, 16, 16))',
              }}
            >
              artificial intelligence
            </span>
          </motion.p>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24 scroll-mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto w-full max-w-4xl"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl"
              style={{
                textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
                filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))',
              }}
            >
              About Me
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="relative rounded-3xl border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/90 p-10 shadow-2xl backdrop-blur-sm dark:border-blue-800/50 dark:from-blue-950/90 dark:via-zinc-900 dark:to-indigo-950/90"
              style={{
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.2), 0 0 40px rgba(99, 102, 241, 0.1)',
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 via-transparent to-indigo-400/10 dark:from-blue-500/10 dark:to-indigo-500/10"></div>
              <div className="relative z-10">
                <p className="mb-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                  I'm a passionate software engineering student currently pursuing my degree at university.
                  I love solving complex problems and turning ideas into reality through code. My journey in
                  software development has been driven by curiosity and a desire to create meaningful impact
                  through technology.
                </p>
                <p className="mb-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source
                  projects, or collaborating with peers on exciting initiatives. I'm always eager to learn and
                  take on new challenges that push me to grow as a developer.
                </p>
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    Skills & Technologies
                  </h3>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3"
                  >
                    {[
                      'JavaScript',
                      'TypeScript',
                      'React',
                      'Next.js',
                      'Node.js',
                      'Python',
                      'Java',
                      'Git',
                      'HTML/CSS',
                      'Tailwind CSS',
                    ].map((skill, index) => (
                      <motion.span
                        key={skill}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 shadow-md transition-colors dark:bg-blue-900/50 dark:text-blue-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24 scroll-mt-20"
        >
          <motion.div variants={itemVariants} className="mx-auto w-full max-w-4xl">
            <motion.h2
              variants={itemVariants}
              className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl"
              style={{
                textShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
                filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.4))',
              }}
            >
              Experience
            </motion.h2>
            <motion.div variants={containerVariants} className="space-y-6">
              {/* School Involvement / Clubs */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                      Club/Organization Name
                    </h3>
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      Role/Position
                    </p>
                  </div>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Present
                  </span>
                </div>
                <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                  Description of your involvement, responsibilities, and achievements in this club or organization.
                  Highlight any technical projects, leadership roles, or initiatives you've led or contributed to.
                </p>
                <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                  <li>Key achievement or responsibility</li>
                  <li>Another significant contribution</li>
                  <li>Technical project or initiative you worked on</li>
                </ul>
              </motion.div>

              {/* Additional Experience Item */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                      Another Experience
                    </h3>
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      Role/Position • Date Range
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                  Description of this experience, what you learned, and how it contributed to your growth
                  as a software engineer.
                </p>
                <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                  <li>Notable achievement or project</li>
                  <li>Skills developed or technologies used</li>
                  <li>Impact or results of your work</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24 scroll-mt-20"
        >
          <motion.div variants={itemVariants} className="mx-auto w-full max-w-6xl">
            <motion.h2
              variants={itemVariants}
              className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl"
              style={{
                textShadow: '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
                filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.4))',
              }}
            >
              Projects
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="grid gap-6 md:grid-cols-2"
            >
              {/* Project 1 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -8 }}
                className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    Project Name
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                      aria-label="GitHub"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                      aria-label="Live Demo"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                  A brief description of your project, the problem it solves, and the technologies you used
                  to build it.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind'].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -8 }}
                className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    Another Project
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                      aria-label="GitHub"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                      aria-label="Live Demo"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                  Description of another project showcasing different skills or technologies. Explain what
                  makes this project unique or interesting.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Flask', 'PostgreSQL'].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -8 }}
                className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg transition-all dark:border-zinc-800 dark:bg-zinc-900 md:col-span-2"
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    Third Project
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                      aria-label="GitHub"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                      aria-label="Live Demo"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                  Another project that demonstrates your versatility and range of skills. Include details
                  about challenges faced and how you overcame them.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'MySQL'].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-zinc-200 py-8 text-center text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
        >
          <p>© {new Date().getFullYear()} Portfolio. Built with Next.js and Tailwind CSS.</p>
        </motion.footer>

        {/* Floating Glassy Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-8 rounded-full border border-blue-200/50 bg-gradient-to-br from-blue-50/80 via-white/70 to-indigo-50/80 px-12 py-5 shadow-2xl backdrop-blur-md dark:border-blue-800/50 dark:from-blue-950/80 dark:via-zinc-900/70 dark:to-indigo-950/80"
          style={{
            boxShadow: '0 8px 32px rgba(59,130,246,0.15), 0 0 24px rgba(99,102,241,0.08)',
          }}
        >
          {/* LinkedIn */}
          <div className="relative group">
            <a
              href="https://www.linkedin.com/in/spandan-p/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-transform hover:scale-110"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-blue-600 dark:text-blue-400">
                <rect width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.08"/>
                <path d="M7.5 9.5v5h2v-5h-2zm1-1.5a1 1 0 110-2 1 1 0 010 2zm3 1.5v5h2v-2.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V14.5h2v-2.5c0-1.7-1.3-3-3-3s-3 1.3-3 3z" fill="currentColor"/>
              </svg>
            </a>
            <span className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-50">
              LinkedIn
            </span>
          </div>
          {/* GitHub */}
          <div className="relative group">
            <a
              href="https://github.com/s-pat6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-transform hover:scale-110"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-zinc-700 dark:text-zinc-200">
                <rect width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.08"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" fill="currentColor"/>
              </svg>
            </a>
            <span className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-50">
              GitHub
            </span>
          </div>
          {/* Email */}
          <div className="relative group">
            <a
              href="mailto:spandanpatel@ucla.edu"
              aria-label="Email"
              className="transition-transform hover:scale-110"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-pink-600 dark:text-pink-400">
                <rect width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.08"/>
                <path d="M4 8.5V16a1.5 1.5 0 001.5 1.5h13A1.5 1.5 0 0020 16V8.5l-8 5-8-5zM20 7a1.5 1.5 0 00-1.5-1.5h-13A1.5 1.5 0 004 7l8 5 8-5z" fill="currentColor"/>
              </svg>
            </a>
            <span className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-50">
              Email
            </span>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
