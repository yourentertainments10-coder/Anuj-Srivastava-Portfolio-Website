import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import {
  certifications,
  experience,
  navItems,
  profile,
  projects,
  skills,
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
          <div className="hero-media" aria-label="Developer workspace visual">
            <img src="/assets/hero-workspace.png" alt="" />
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
          <div className="skill-grid">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
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
              <article key={item}>
                <span>Verified item</span>
                <h3>{item}</h3>
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
          <a className="button primary" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            {profile.email}
          </a>
        </section>
      </main>
    </>
  );
}

export default App;
