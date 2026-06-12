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

import { motion } from "framer-motion";

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
          AS
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
        <motion.section
          id="home"
          className="hero section-shell"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-copy">
            <span className="status-badge">{profile.status}</span>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="summary">{profile.summary}</p>

            <div className="actions">
              <a className="button primary" href={profile.resumeUrl} download>
                <Download size={18} aria-hidden="true" />
                Resume
              </a>
              <a
                className="button"
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
              <a
                className="button"
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-media" aria-label="Project collage">
            <img
              src="/assets/hero-workspace.png"
              alt="Project portfolio"
              className="hero-image"
            />
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="section-shell about-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-heading">
            <h2>Developer focused on practical, polished software.</h2>
          </div>
          <div className="section-text">
            <p>
              I build real software products across web development, machine
              learning, and data analytics. My work combines clean interfaces,
              reliable backend logic, database-backed workflows, and practical
              problem solving.
            </p>
            <p>
              I am focused on internship and entry-level software development
              opportunities where I can contribute, keep learning, and ship
              useful applications with React, Python, Flask, SQL, and ML tools.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="section-shell"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-heading">
            <h2>Technical Skills</h2>
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
        </motion.section>

        <section id="learning" className="section-shell two-column learning-section">
          <div>
            <h2>Current Learning Focus</h2>
          </div>
          <div className="learning-grid">
            {currentlyLearning.map((item, index) => {
              const icons = [Code2, Sparkles, Database, BookOpen];
              const Icon = icons[index] ?? BookOpen;
              return (
                <article key={item.title}>
                  <Icon size={22} aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <motion.section
          id="projects"
          className="section-shell"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-heading">
            <h2>Selected Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <ProjectVisual project={project} />
                <div className="project-body">
                  <div className="project-topline">
                    <span>{project.tag}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="feature-list">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="stack-list">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a
                      className="button small"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={16} aria-hidden="true" />
                      GitHub
                    </a>
                    {/* <a
                      className="button small"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ArrowUpRight size={16} aria-hidden="true" />
                      Live Demo
                    </a> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <section id="github" className="section-shell github-section">
          <div className="section-heading">
            <h2>GitHub</h2>
          </div>
          <div className="github-grid">
            {githubStats.map((item) => (
              <article key={`${item.value}-${item.label}`}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
          <a
            className="button github-profile-link"
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} aria-hidden="true" />
            View GitHub Profile
          </a>
        </section>

        <motion.section
          id="experience"
          className="section-shell two-column"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2>Leadership & Experience</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`}>
                <p>{item.period}</p>
                <h3>{item.role}</h3>
                <span>{item.company}</span>
                <ul className="feature-list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="certifications"
          className="section-shell"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-heading">
            <h2>Certifications</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((item) => (
              <article key={item.name}>
                <div className="cert-topline">
                  <strong
                    className={`issuer-logo ${item.issuer.toLowerCase()}`}
                    aria-hidden="true"
                  >
                    {item.logo}
                  </strong>
                  <span>Issued by {item.issuer}</span>
                </div>
                <h3>{item.name}</h3>
                <a
                  className="text-link"
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Verify credential <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="section-shell contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2>Let's build something useful.</h2>
            <p>
              Open to internships, software development opportunities,
              collaborations, and innovative projects.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              Email
            </a>
            <a
              className="button"
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              className="button"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a className="button" href={profile.resumeUrl} download>
              <FileText size={18} aria-hidden="true" />
              Resume
            </a>
          </div>
        </motion.section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Anuj Srivastava</p>
        <span>Software Developer</span>
        <div>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </footer>
    </>
  );
}

function ProjectVisual({ project }) {
  const projectImages = {
    classroom: "/assets/hero-workspace.png",
    student: "/assets/hero-workspace.png",
    chess: "/assets/hero-workspace.png",
  };

  return (
    <div className="project-shot" aria-label={project.imageLabel}>
      <img src={projectImages[project.visual]} alt={project.title} />
    </div>
  );
}

export default App;

