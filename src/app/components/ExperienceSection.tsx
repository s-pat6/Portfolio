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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const experiences = [
  {
    type: 'internship',
    company: 'TikHub',
    role: 'Software Engineer Intern',
    period: 'June 2025 – Sep. 2025',
    description: [
      'Built a real-time YouTube analytics service using Celery and TikHub that fetches live performance data, delivering key insights to 1,000+ users about the success of social media campaigns',
      'Developed a RESTful FastAPI backend to support task creation and status retrieval at regular intervals, incorporating Redis caching and a MySQL database to handle 50+ concurrent requests',
      'Automated testing and linting via Docker and GitHub Actions, reducing deployment time by 40%',
    ],
    tags: ['FastAPI', 'Celery', 'Redis', 'MySQL', 'Docker', 'GitHub Actions'],
  },
  {
    type: 'internship',
    company: 'Scale AI',
    role: 'Technical Advisor Intern – Gen AI',
    period: 'Dec. 2024 – June 2025',
    description: [
      'Improved chain-of-thought reasoning of enterprise LLMs by designing C++ algorithms to solve competitive programming problems, boosting Elo rating on Codeforces by 500+ points',
      'Enhanced AI agent understanding of debugging patterns in production codebases by crafting structured annotations from Git commits and pull requests that model existing bug-fixing workflows',
      'Audited math and CS problems for Humanity\'s Last Exam benchmark, ensuring quality evaluation of LLM accuracy',
    ],
    tags: ['LLMs', 'C++', 'Algorithms', 'AI'],
  },
  {
    type: 'internship',
    company: 'UT Austin Swarm Nanorobotics Lab',
    role: 'Software Engineer',
    period: 'May 2024 – July 2024',
    description: [
      'Processed microscope imagery of a simulated environment using OpenCV, applying a Gaussian blur to filter out noise and a Sobel filter to detect walls and obstacles with 100% accuracy, enabling reliable nanobot traversal',
      'Constructed a navigation program in Python with A* pathfinding, improving transport efficiency by 97%',
      'Deployed a Streamlit web interface on AWS Elastic Beanstalk to enable streamlined testing of custom pathways',
    ],
    tags: ['Python', 'OpenCV', 'A*', 'Streamlit', 'AWS'],
  },
  {
    type: 'campus',
    company: 'LA Hacks',
    role: 'Technology Coordinator',
    period: 'Present',
    description: [
      'Leading technical infrastructure for UCLA\'s largest hackathon, coordinating technology operations and ensuring seamless event execution',
      'Building developer tools and platforms to enhance the hacker experience for 1000+ participants',
    ],
    tags: ['Leadership', 'Event Tech', 'Full Stack'],
  },
  {
    type: 'campus',
    company: 'ACM at UCLA',
    role: 'Dev Team Officer',
    period: 'Present',
    description: [
      'Officer for the largest computer science organization at UCLA, mentoring students and building technical projects',
      'Contributing to open-source initiatives and organizing workshops to help students grow their development skills',
    ],
    tags: ['Mentorship', 'Open Source', 'Community'],
  },
  {
    type: 'campus',
    company: 'ScAI Lab',
    role: 'LLMs Researcher',
    period: 'Present',
    description: [
      'Conducting cutting-edge research on Large Language Models at UCLA\'s ScAI Lab',
      'Exploring novel approaches to improve LLM performance and efficiency',
    ],
    tags: ['Research', 'LLMs', 'AI/ML'],
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="flex min-h-screen snap-start flex-col items-center justify-center px-6 py-24 scroll-mt-20"
    >
      <motion.div variants={itemVariants} className="mx-auto w-full max-w-5xl">
        <motion.h2
          variants={itemVariants}
          className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl"
          style={{
            textShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
          }}
        >
          Experience
        </motion.h2>

        <motion.div variants={containerVariants} className="space-y-8">
          {/* Section: Internships */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 flex items-center gap-2">
              <span className="text-3xl">💼</span>
              Internships
            </h3>
            <div className="space-y-6">
              {experiences
                .filter((exp) => exp.type === 'internship')
                .map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group relative rounded-2xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/90 via-white to-violet-50/90 p-8 shadow-xl backdrop-blur-sm dark:border-purple-800/50 dark:from-purple-950/90 dark:via-zinc-900 dark:to-violet-950/90 transition-all"
                    style={{
                      boxShadow:
                        '0 10px 40px rgba(139, 92, 246, 0.15), 0 0 30px rgba(167, 139, 250, 0.08)',
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/5 via-transparent to-violet-400/5 dark:from-purple-500/5 dark:to-violet-500/5 group-hover:from-purple-400/10 group-hover:to-violet-400/10 transition-all"></div>

                    <div className="relative z-10">
                      <div className="mb-4 flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                            {exp.company}
                          </h3>
                          <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                            {exp.role}
                          </p>
                        </div>
                        <span className="rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="mb-4 space-y-3">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-zinc-700 dark:text-zinc-300 leading-relaxed"
                          >
                            <span className="text-purple-500 mt-1.5">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg bg-purple-100/80 px-3 py-1 text-xs font-medium text-purple-700 backdrop-blur-sm dark:bg-purple-900/30 dark:text-purple-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Section: Campus Involvement */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 flex items-center gap-2">
              <span className="text-3xl">🎓</span>
              Campus Involvement
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {experiences
                .filter((exp) => exp.type === 'campus')
                .map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="group relative rounded-2xl border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/90 via-white to-cyan-50/90 p-6 shadow-lg backdrop-blur-sm dark:border-blue-800/50 dark:from-blue-950/90 dark:via-zinc-900 dark:to-cyan-950/90 transition-all"
                    style={{
                      boxShadow:
                        '0 8px 30px rgba(59, 130, 246, 0.12), 0 0 20px rgba(99, 102, 241, 0.06)',
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/5 via-transparent to-cyan-400/5 dark:from-blue-500/5 dark:to-cyan-500/5 group-hover:from-blue-400/10 group-hover:to-cyan-400/10 transition-all"></div>

                    <div className="relative z-10">
                      <div className="mb-3">
                        <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                          {exp.company}
                        </h4>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {exp.role}
                        </p>
                      </div>

                      <ul className="mb-4 space-y-2 text-sm">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-zinc-700 dark:text-zinc-300 leading-relaxed"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-blue-100/80 px-2 py-0.5 text-xs font-medium text-blue-700 backdrop-blur-sm dark:bg-blue-900/30 dark:text-blue-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
