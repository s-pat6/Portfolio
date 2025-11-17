import { motion } from 'framer-motion';
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiPytorch,
} from 'react-icons/si';
import {
  FaJava,
  FaDatabase,
  FaAws,
  FaTerminal,
  FaEye,
} from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { IconType } from 'react-icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const skills: Skill[] = [
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
  { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
  { name: 'Bash', icon: FaTerminal, color: '#4EAA25' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'OpenCV', icon: FaEye, color: '#5C3EE8' },
];

export default function AboutSection() {
  return (
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
        className="mx-auto w-full max-w-6xl"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-12 text-center text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl"
          style={{
            textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
          }}
        >
          About Me
        </motion.h2>

        {/* Grid layout: left bubbles | text | right bubbles */}
        <div className="grid grid-cols-[300px_auto_300px] gap-12 items-start py-20">
          {/* Left Bubbles Column */}
          <div className="relative h-full">
            <div className="relative w-full min-h-[600px] flex flex-col justify-around py-8">
              {skills.filter((_, i) => i % 2 === 0).map((skill, idx) => {
                const index = idx * 2; // Original index for consistent positioning
                // Staggered layout: alternating left/right within the column
                const stagger = idx % 2 === 0 ? 30 : 70; // Alternate between left (30%) and right (70%) of column
                const verticalSpacing = (100 / 8) * idx + 10; // Evenly distributed vertically
                const offsetX = (Math.sin(index * 2.5) * 15); // Small horizontal variation
                const offsetY = (Math.cos(index * 3.7) * 8); // Small vertical variation
                const rotation = Math.sin(index * 3.14159) * 12;
                const randomDelay = idx * 0.08;
                const size = 70 + (idx % 3) * 6; // Size varies in pattern: 70, 76, 82

                return (
                  <motion.div
                    key={skill.name}
                    variants={{
                      hidden: { opacity: 0, scale: 0, rotate: rotation },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        rotate: rotation,
                        transition: {
                          duration: 0.6,
                          delay: randomDelay,
                          ease: [0.34, 1.56, 0.64, 1],
                        },
                      },
                    }}
                    whileHover={{ scale: 1.2, y: -8, rotate: rotation + 5 }}
                    className="absolute pointer-events-auto group"
                    style={{
                      left: `calc(${stagger}% + ${offsetX}px)`,
                      top: `calc(${verticalSpacing}% + ${offsetY}px)`,
                      transform: 'translate(-50%, -50%)',
                      width: `${size}px`,
                      height: `${size}px`,
                    }}
                  >
                    <div
                      className="flex h-full w-full items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-2xl backdrop-blur-xl transition-all dark:border-zinc-700/30 dark:bg-zinc-800/20"
                      style={{
                        boxShadow: `0 8px 32px ${skill.color}30, 0 0 24px ${skill.color}15, inset 0 1px 1px rgba(255,255,255,0.2)`,
                      }}
                    >
                      <skill.icon
                        className="transition-all group-hover:scale-110"
                        style={{
                          width: `${size * 0.55}px`,
                          height: `${size * 0.55}px`,
                          color: skill.color,
                          filter: `drop-shadow(0 0 8px ${skill.color}80) drop-shadow(0 0 4px ${skill.color})`,
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-zinc-900/90 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white/90 dark:text-zinc-900">
                      {skill.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Central About Text */}
          <motion.div
            variants={itemVariants}
            className="relative z-20 rounded-3xl border-2 border-blue-200/50 bg-gradient-to-br from-blue-50/95 via-white/95 to-indigo-50/95 p-10 shadow-2xl backdrop-blur-md dark:border-blue-800/50 dark:from-blue-950/95 dark:via-zinc-900/95 dark:to-indigo-950/95 max-w-3xl mx-auto"
            style={{
              boxShadow: '0 20px 60px rgba(59, 130, 246, 0.2), 0 0 40px rgba(99, 102, 241, 0.1)',
            }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 via-transparent to-indigo-400/10 dark:from-blue-500/10 dark:to-indigo-500/10"></div>
            <div className="relative z-10">
              <p className="mb-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science student at UCLA</span>,
                passionate about leveraging technology to solve complex problems. I am a <span className="font-semibold">USACO Gold competitor</span> and
                <span className="font-semibold"> 3x Hackathon Winner</span> (HackUTD, HackSMU, AIFAHacks).
              </p>
              <p className="mb-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                My journey in software engineering includes internships at <span className="font-semibold text-purple-600 dark:text-purple-400">TikHub</span>,
                <span className="font-semibold text-purple-600 dark:text-purple-400"> Scale AI</span>, and
                <span className="font-semibold text-purple-600 dark:text-purple-400"> UT Austin Swarm Nanorobotics Lab</span>,
                where I've worked on everything from real-time analytics and LLM optimization to computer vision and pathfinding algorithms.
              </p>
              <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                On campus, I serve as <span className="font-semibold">Technology Coordinator for LA Hacks</span>,
                <span className="font-semibold"> Dev Team Officer for ACM</span>, and
                <span className="font-semibold"> LLMs Researcher at ScAI Lab</span>, where I contribute to cutting-edge research and help build
                the next generation of developers.
              </p>
            </div>
          </motion.div>

          {/* Right Bubbles Column */}
          <div className="relative h-full">
            <div className="relative w-full min-h-[600px] flex flex-col justify-around py-8">
              {skills.filter((_, i) => i % 2 === 1).map((skill, idx) => {
                const index = idx * 2 + 1; // Original index for consistent positioning
                // Staggered layout: alternating right/left within the column (opposite of left column)
                const stagger = idx % 2 === 0 ? 70 : 30; // Alternate between right (70%) and left (30%) of column
                const verticalSpacing = (100 / 8) * idx + 10; // Evenly distributed vertically
                const offsetX = (Math.sin(index * 2.5) * 15); // Small horizontal variation
                const offsetY = (Math.cos(index * 3.7) * 8); // Small vertical variation
                const rotation = Math.sin(index * 3.14159) * 12;
                const randomDelay = idx * 0.08;
                const size = 70 + (idx % 3) * 6; // Size varies in pattern: 70, 76, 82

                return (
                  <motion.div
                    key={skill.name}
                    variants={{
                      hidden: { opacity: 0, scale: 0, rotate: rotation },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        rotate: rotation,
                        transition: {
                          duration: 0.6,
                          delay: randomDelay,
                          ease: [0.34, 1.56, 0.64, 1],
                        },
                      },
                    }}
                    whileHover={{ scale: 1.25, y: -10, rotate: rotation + 5 }}
                    className="absolute pointer-events-auto group"
                    style={{
                      left: `calc(${stagger}% + ${offsetX}px)`,
                      top: `calc(${verticalSpacing}% + ${offsetY}px)`,
                      transform: 'translate(-50%, -50%)',
                      width: `${size}px`,
                      height: `${size}px`,
                    }}
                  >
                    <div
                      className="flex h-full w-full items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-2xl backdrop-blur-xl transition-all dark:border-zinc-700/30 dark:bg-zinc-800/20"
                      style={{
                        boxShadow: `0 8px 32px ${skill.color}30, 0 0 24px ${skill.color}15, inset 0 1px 1px rgba(255,255,255,0.2)`,
                      }}
                    >
                      <skill.icon
                        className="transition-all group-hover:scale-110"
                        style={{
                          width: `${size * 0.55}px`,
                          height: `${size * 0.55}px`,
                          color: skill.color,
                          filter: `drop-shadow(0 0 8px ${skill.color}80) drop-shadow(0 0 4px ${skill.color})`,
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-zinc-900/90 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white/90 dark:text-zinc-900">
                      {skill.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
