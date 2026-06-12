import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Database,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

import {
  certifications,
  currentlyLearning,
  experience,
  githubStats,
  navItems,
  profile,
  projects,
  skillGroups,
} from "./portfolioData.js";

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Anuj home">
          A
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy">
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="summary">{profile.summary}</p>

            <div className="actions">
              <a className="button primary" href={profile.resumeUrl} download>
                <Download size={18} aria-hidden="true" />
                Resume
              </a>
              <a className="button" href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
              <a className="button" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-media project-collage" aria-label="Project collage">
            <div className="collage-header">
              <span>Project Portfolio</span>
              <Github size={18} aria-hidden="true" />
            </div>
            <article className="collage-card classroom">
              <span>AI Smart Classroom</span>
              <strong>Face recognition attendance</strong>
              <div className="mini-bars" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </article>
            <article className="collage-card student">
              <span>Student Management</span>
              <strong>Auth, dashboards, records</strong>
              <div className="mini-table" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
            </article>
            <article className="collage-card chess">
              <span>Chess Game</span>
              <strong>React board and move logic</strong>
              <div className="mini-board" aria-hidden="true">
                {Array.from({ length: 16 }).map((_, index) => (
                  <i key={index} />
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="about" className="section-shell two-column">
          <div>
            <p className="section-kicker">About</p>
            <h2>Developer focused on practical, polished software.</h2>
          </div>
          <div className="section-text">
            <p>
              I enjoy turning ideas into useful products: clean interfaces,
              dependable data flows, and code that is easy to keep improving.
              My current work spans React frontends, Python web apps, data
              projects, and machine learning prototypes.
            </p>
            <p>
              I care about straightforward user flows, maintainable code, and
              the small details that make a product feel finished.
            </p>
          </div>
        </section>

        <section id="skills" className="section-shell">
          <div className="section-heading">
            <p className="section-kicker">Skills</p>
            <h2>Tools I use to build.</h2>
          </div>
          <div className="skill-group-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="learning" className="section-shell two-column learning-section">
          <div>
            <p className="section-kicker">Currently Learning</p>
            <h2>What I'm improving right now.</h2>
          </div>
          <div className="learning-grid">
            {currentlyLearning.map((item, index) => {
              const icons = [Code2, Database, Sparkles, BookOpen];
              const Icon = icons[index] ?? BookOpen;
              return (
                <article key={item}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{item}</h3>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <div className="section-heading">
            <p className="section-kicker">Projects</p>
            <h2>Selected work.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-shot shot-${index + 1}`}>
                  <span>{project.imageLabel}</span>
                </div>
                <div className="project-body">
                  <div className="project-topline">
                    <span>{project.tag}</span>
                    <a
                      href={project.repoUrl}
                      aria-label={`${project.title} repository`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={18} aria-hidden="true" />
                    </a>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="stack-list">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <a
                    className="text-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="github" className="section-shell github-section">
          <div className="section-heading">
            <p className="section-kicker">GitHub</p>
            <h2>Code focus at a glance.</h2>
          </div>
          <div className="github-grid">
            {githubStats.map((item) => (
              <article key={`${item.value}-${item.label}`}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
          <a className="text-link github-profile-link" href={profile.githubUrl} target="_blank" rel="noreferrer">
            View GitHub profile <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </section>

        <section id="experience" className="section-shell two-column">
          <div>
            <p className="section-kicker">Experience</p>
            <h2>Recent focus.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`}>
                <p>{item.period}</p>
                <h3>{item.role}</h3>
                <span>{item.company}</span>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="section-shell">
          <div className="section-heading">
            <p className="section-kicker">Certifications</p>
            <h2>Credentials and achievements.</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((item) => (
              <article key={item.name}>
                <span>Issued by {item.issuer}</span>
                <h3>{item.name}</h3>
                <a className="text-link" href={item.credentialUrl} target="_blank" rel="noreferrer">
                  Verify credential <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell contact">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Let's build something useful.</h2>
            <p>
              Open to internships, freelance work, collaboration, and product
              ideas that need a dependable developer.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              Email
            </a>
            <a className="button" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a className="button" href={profile.githubUrl} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a className="button" href={profile.resumeUrl} download>
              <FileText size={18} aria-hidden="true" />
              Resume
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
