export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/80">
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
      </nav>

      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* Hero Section */}
        <section className="mb-24 text-center">
          <h2 className="mb-4 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Aspiring Software Engineer
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-zinc-600 dark:text-zinc-400">
            Building innovative solutions and exploring the world of technology
          </p>
        </section>

        {/* About Me Section */}
        <section id="about" className="mb-24 scroll-mt-20">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            About Me
          </h2>
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
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
              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "Java",
                  "Git",
                  "HTML/CSS",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 scroll-mt-20">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Experience
          </h2>
          <div className="space-y-6">
            {/* School Involvement / Clubs */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
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
            </div>

            {/* Additional Experience Item */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
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
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 scroll-mt-20">
          <h2 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Project 1 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
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
                {["React", "TypeScript", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
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
                Description of another project showcasing different skills or technologies. Explain what 
                makes this project unique or interesting.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Flask", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 3 */}
            <div className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
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
                Another project that demonstrates your versatility and range of skills. Include details 
                about challenges faced and how you overcame them.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "MySQL"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 pt-8 text-center text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Portfolio. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  );
}
