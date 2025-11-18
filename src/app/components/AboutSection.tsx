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
} from 'react-icons/fa';
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

interface Interest {
  name: string;
  emoji: string;
}

const skills: Skill[] = [
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
  { name: 'Bash', icon: FaTerminal, color: '#4EAA25' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
];

const interests: Interest[] = [
  { name: 'Basketball', emoji: '🏀' },
  { name: 'Music', emoji: '🎵' },
  { name: 'Poker', emoji: '🃏' },
  { name: 'Chess', emoji: '♟️' },
  { name: 'Video Games', emoji: '🎮' },
  { name: 'Geography/Culture', emoji: '🌍' },
  { name: 'Gym', emoji: '💪' },
];

interface SkillBubbleProps {
  skill: Skill;
  idx: number;
  position: 'left' | 'right';
}

function SkillBubble({ skill, idx, position }: SkillBubbleProps) {
  const size = 70;
  const staggerRotation = Math.sin(idx * 1.5 + (position === 'right' ? 1 : 0)) * 8;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0, rotate: staggerRotation },
        visible: {
          opacity: 1,
          scale: 1,
          rotate: staggerRotation,
          transition: {
            duration: 0.5,
            delay: idx * 0.08,
            ease: [0.34, 1.56, 0.64, 1],
          },
        },
      }}
      whileHover={{ scale: 1.15, rotate: staggerRotation + 5 }}
      className="group relative flex justify-center z-40"
    >
      <div
        className="flex h-full w-full items-center justify-center rounded-full border border-gray-300/50 bg-gray-300/25 shadow-xl backdrop-blur-xl transition-all dark:border-gray-500/50 dark:bg-gray-500/25"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: `0 8px 32px ${skill.color}30, 0 0 24px ${skill.color}15, inset 0 1px 1px rgba(255,255,255,0.2)`,
        }}
      >
        <skill.icon
          className="transition-all group-hover:scale-110"
          style={{
            width: `${size * 0.55}px`,
            height: `${size * 0.55}px`,
            color: skill.color,
            filter: `drop-shadow(0 0 8px ${skill.color}80)`,
          }}
        />
      </div>
        <div
          className="absolute z-[9999] right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap rounded-lg bg-white/90 px-2 py-1 text-xs font-medium text-zinc-900 dark:bg-zinc-900/90 dark:text-white"
        >
        {skill.name}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="flex h-screen snap-start flex-col items-center justify-center px-6 py-8 scroll-mt-0"
    >
      <motion.div
        variants={itemVariants}
        className="mx-auto w-full max-w-5xl"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-8 text-center text-4xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-5xl"
          style={{
            textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
          }}
        >
          About Me
        </motion.h2>

        {/* Main grid: left skills, center content, right skills */}
        <div className="grid grid-cols-[auto_1fr_auto] gap-8 items-center justify-items-center">
          {/* Center: About Text + Interests - Rendered first so bubbles can layer on top */}
          <div className="flex flex-col items-center gap-6 order-2">
            {/* About Text */}
            <motion.div
              variants={itemVariants}
              className="relative z-20 rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-100/80 via-white to-indigo-100/80 p-8 shadow-2xl backdrop-blur-md dark:border-blue-800/50 dark:from-blue-950/95 dark:via-zinc-900/95 dark:to-indigo-950/95 w-full"
              style={{
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.2), 0 0 40px rgba(99, 102, 241, 0.1)',
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/10 via-transparent to-indigo-400/10 dark:from-blue-500/10 dark:to-indigo-500/10"></div>
              <div className="relative z-10">
                <p className="text-lg leading-8 text-zinc-800 dark:text-zinc-300">
                  I'm a <span className="font-semibold text-blue-700 dark:text-blue-400">Computer Science student at UCLA </span>
                  exploring my interests within software development, particularly in <span className="font-semibold">fullstack development</span> and
                  <span className="font-semibold"> distributed systems</span>.
                  I've previously interned at <span className="font-semibold text-purple-700 dark:text-purple-400">TikHub</span> and
                  <span className="font-semibold text-purple-700 dark:text-purple-400"> Scale AI</span>.
                  My campus activities include organizing <span className="font-semibold">LA Hacks</span> on the tech team, being a
                  <span className="font-semibold"> Dev Team Officer for ACM</span>, and an LLMs Researcher at the
                  <span className="font-semibold"> Scalable Analytics Institute Lab</span>.
                </p>
              </div>
            </motion.div>

            {/* Interests Section */}
            <motion.div
              variants={itemVariants}
              className="w-full"
            >
              <h3 className="mb-4 text-center text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                Interests
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {interests.map((interest, idx) => (
                  <motion.div
                    key={interest.name}
                    variants={{
                      hidden: { opacity: 0, scale: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          delay: idx * 0.06,
                          ease: 'easeOut',
                        },
                      },
                    }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="group"
                  >
                    <div
                      className="flex items-center gap-2 rounded-full border border-gray-300/50 bg-gray-100/60 px-4 py-2 shadow-lg backdrop-blur-xl transition-all hover:shadow-xl dark:border-zinc-700/30 dark:bg-zinc-800/20"
                      style={{
                        boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15), inset 0 1px 1px rgba(255,255,255,0.2)',
                      }}
                    >
                      <span className="text-lg">{interest.emoji}</span>
                      <span className="text-sm font-medium text-zinc-950 dark:text-zinc-100">
                        {interest.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Left Skill Bubbles - 2-3-2 Layout */}
          <motion.div className="flex flex-col gap-6 order-1">
            {/* Row 1: 2 bubbles */}
            <div className="flex gap-4 justify-center">
              {skills.filter((_, i) => i % 2 === 0).slice(0, 2).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx} position="left" />
              ))}
            </div>
            {/* Row 2: 3 bubbles */}
            <div className="flex gap-4 justify-center">
              {skills.filter((_, i) => i % 2 === 0).slice(2, 5).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx + 2} position="left" />
              ))}
            </div>
            {/* Row 3: 2 bubbles */}
            <div className="flex gap-4 justify-center">
              {skills.filter((_, i) => i % 2 === 0).slice(5, 7).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx + 5} position="left" />
              ))}
            </div>
          </motion.div>

          {/* Right Skill Bubbles - 2-3-2 Layout */}
          <motion.div className="flex flex-col gap-6 order-3">
            {/* Row 1: 2 bubbles */}
            <div className="flex gap-4 justify-center">
              {skills.filter((_, i) => i % 2 === 1).slice(0, 2).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx} position="right" />
              ))}
            </div>
            {/* Row 2: 3 bubbles */}
            <div className="flex gap-4 justify-center">
              {skills.filter((_, i) => i % 2 === 1).slice(2, 5).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx + 2} position="right" />
              ))}
            </div>
            {/* Row 3: 2 bubbles */}
            <div className="flex gap-4 justify-center">
              {skills.filter((_, i) => i % 2 === 1).slice(5, 7).map((skill, idx) => (
                <SkillBubble key={skill.name} skill={skill} idx={idx + 5} position="right" />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
